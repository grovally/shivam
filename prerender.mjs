import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ── helpers ──────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const baseHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const BASE_URL = "https://chhabra-properties.com";
const DEFAULT_IMG =
  "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890737/DELTA-II_ajsre2.png";


const { noidaData } = await import("./src/components/data/noidaData.js");
const { greaterNoida } = await import("./src/components/data/greaterNoidaData.js");
const { yemuna } = await import("./src/components/data/yemunaNoidaData.js");

function getSlugFromTitle(title = "") {
  return title.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}
function getItemSlug(item) {
  return item?.slug || getSlugFromTitle(item?.title);
}

function buildHtml(title, description, image, url) {
  const pageTitle = `${title} | Chhabra Properties`;
  const desc = description?.trim().slice(0, 200) ||
    `Download the latest ${title} map with complete location, planning and connectivity details.`;
  const img = image || DEFAULT_IMG;

  let html = baseHtml;

  const setMeta = (property, attr, value) => {
    const regex = new RegExp(
      `(<meta\\s+${attr}="${escapeRegex(property)}"[^>]*\\s+content=")[^"]*("\\s*/?>)`,
      "gi"
    );
    const regexAlt = new RegExp(
      `(<meta\\s+content=")[^"]*("\\s+${attr}="${escapeRegex(property)}"[^>]*\\s*/?>)`,
      "gi"
    );
    const escaped = escapeHtml(value);
    if (regex.test(html)) {
      html = html.replace(regex, `$1${escaped}$2`);
    } else if (regexAlt.test(html)) {
      html = html.replace(regexAlt, `$1${escaped}$2`);
    }
  };

  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);
  html = html.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/i,
    `$1${escapeHtml(desc)}$2`
  );

  setMeta("og:title", "property", pageTitle);
  setMeta("og:description", "property", desc);
  setMeta("og:image", "property", img);
  setMeta("og:image:alt", "property", `${title} - Map`);
  setMeta("og:url", "property", url);
  setMeta("og:type", "property", "article");

  setMeta("twitter:title", "name", pageTitle);
  setMeta("twitter:description", "name", desc);
  setMeta("twitter:image", "name", img);
  setMeta("twitter:image:alt", "name", `${title} - Map`);

  return html;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ── write a route ─────────────────────────────────────────────────
function writeRoute(routePath, title, description, image) {
  const url = `${BASE_URL}${routePath}`;
  const html = buildHtml(title, description, image, url);
  const outDir = path.join(distDir, routePath.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
  console.log(`✅ ${routePath}`);
}

// ── generate routes ───────────────────────────────────────────────
let count = 0;

for (const item of noidaData) {
  if (!item) continue;
  const slug = getItemSlug(item);
  if (!slug) continue;
  writeRoute(`/noida/${slug}`, item.title, item.description, item.image);
  count++;
}

for (const item of greaterNoida) {
  if (!item) continue;
  const slug = getItemSlug(item);
  if (!slug) continue;
  writeRoute(`/greater-noida/${slug}`, item.title, item.description, item.image);
  count++;
}

for (const item of yemuna) {
  if (!item) continue;
  const slug = getItemSlug(item);
  if (!slug) continue;
  writeRoute(`/yamuna-expressway/${slug}`, item.title, item.description, item.image);
  count++;
}

console.log(`\n🎉 Prerendered ${count} routes.`);
