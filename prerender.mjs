import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  getItemSlug,
  getSlugFromTitle,
  sanitizeSlug,
} from "./src/utils/slugUtils.js";
import { noidaData } from "./src/components/data/noidaData.js";
import { greaterNoida } from "./src/components/data/greaterNoidaData.js";
import { yemuna } from "./src/components/data/yemunaNoidaData.js";

// ── helpers ──────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");

if (!fs.existsSync(path.join(distDir, "index.html"))) {
  console.error("❌ dist/index.html not found. Run 'vite build' before prerendering.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const BASE_URL = "https://chhabra-properties.com";
const DEFAULT_IMG =
  "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890737/DELTA-II_ajsre2.png";

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function cleanDescription(desc, title, isBlog = false) {
  const cleaned = (desc || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (cleaned.length >= 20) {
    return cleaned.slice(0, 200).trim();
  }

  if (isBlog) {
    return `Read ${title.trim()} on Chhabra Properties. Real estate trends, sector developments, and property market insights.`;
  }

  return `Download the latest ${title.trim()} map with complete location, planning and connectivity details from Chhabra Properties.`;
}

function replaceOrAddMeta(html, property, attr, value) {
  const tagRegex = new RegExp(
    `<meta\\s+[^>]*${attr}=["']${escapeRegex(property)}["'][^>]*\\/?>`,
    "gi"
  );
  const newTag = `<meta ${attr}="${escapeHtml(property)}" content="${escapeHtml(value)}" />`;

  if (tagRegex.test(html)) {
    return html.replace(tagRegex, newTag);
  }
  return html.replace(/<\/head>/i, `  ${newTag}\n</head>`);
}

function buildHtml(title, description, image, url, ogTitle) {
  const isBlog = url.includes("/blog");
  const cleanTitle = (title || "").trim();

  let pageTitle = (ogTitle || "").trim();
  if (!pageTitle) {
    if (url.includes("/greater-noida")) {
      pageTitle = `${cleanTitle}, Greater Noida HD Map`;
    } else if (url.includes("/noida")) {
      pageTitle = `${cleanTitle}, Noida HD Map`;
    } else if (url.includes("/yamuna-expressway")) {
      pageTitle = `${cleanTitle}, Yamuna Expressway HD Map`;
    } else {
      pageTitle = `${cleanTitle} | Chhabra Properties`;
    }
  }

  const desc = cleanDescription(description, cleanTitle, isBlog);
  const img = (image || "").trim() || DEFAULT_IMG;

  let altText = `${cleanTitle} - Map`;
  if (isBlog) {
    altText = `${cleanTitle} - Chhabra Properties`;
  } else if (url.includes("/greater-noida")) {
    altText = `${cleanTitle} - Greater Noida Map`;
  } else if (url.includes("/noida")) {
    altText = `${cleanTitle} - Noida Map`;
  } else if (url.includes("/yamuna-expressway")) {
    altText = `${cleanTitle} - Yamuna Expressway Map`;
  }

  let html = baseHtml;

  // Title
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);

  // Canonical URL
  const canonicalRegex = /<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/i;
  const canonicalTag = `<link rel="canonical" href="${escapeHtml(url)}" />`;
  if (canonicalRegex.test(html)) {
    html = html.replace(canonicalRegex, canonicalTag);
  } else {
    html = html.replace(/<\/head>/i, `  ${canonicalTag}\n</head>`);
  }

  // Primary Description
  html = replaceOrAddMeta(html, "description", "name", desc);

  // Open Graph
  html = replaceOrAddMeta(html, "og:title", "property", pageTitle);
  html = replaceOrAddMeta(html, "og:description", "property", desc);
  html = replaceOrAddMeta(html, "og:image", "property", img);
  html = replaceOrAddMeta(html, "og:image:alt", "property", altText);
  html = replaceOrAddMeta(html, "og:url", "property", url);
  html = replaceOrAddMeta(html, "og:type", "property", "article");

  // Twitter / X
  html = replaceOrAddMeta(html, "twitter:title", "name", pageTitle);
  html = replaceOrAddMeta(html, "twitter:description", "name", desc);
  html = replaceOrAddMeta(html, "twitter:image", "name", img);
  html = replaceOrAddMeta(html, "twitter:image:alt", "name", altText);

  return html;
}

// ── write a route ─────────────────────────────────────────────────
const generatedPaths = new Set();

function writeRoute(routePath, title, description, image, ogTitle) {
  // Normalize route path to prevent invalid filesystem characters/trailing spaces
  const normalizedPath = routePath
    .trim()
    .replace(/\/+/g, "/")
    .replace(/\/$/, "");

  if (generatedPaths.has(normalizedPath)) {
    return;
  }
  generatedPaths.add(normalizedPath);

  const url = `${BASE_URL}${normalizedPath}`;
  const html = buildHtml(title, description, image, url, ogTitle);

  const relativeDir = normalizedPath.replace(/^\//, "");
  const outDir = path.join(distDir, relativeDir);

  // 1) Write folder/index.html
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");

  // 2) Write folder.html for cleanUrls web servers
  const htmlFilePath = `${outDir}.html`;
  fs.writeFileSync(htmlFilePath, html, "utf-8");

  console.log(`✅ ${normalizedPath}`);
}

// ── generate routes ───────────────────────────────────────────────
let count = 0;

function processSection(prefix, dataset, defaultRegion) {
  for (const item of dataset) {
    if (!item || !item.title) continue;

    const cleanSlug = getItemSlug(item);
    if (!cleanSlug) continue;

    const cleanTitle = item.title.trim();
    const itemOgTitle = (item.ogTitle || `${cleanTitle}, ${defaultRegion}`).trim();

    // Canonical clean route
    writeRoute(`${prefix}/${cleanSlug}`, item.title, item.description, item.image, itemOgTitle);
    count++;

    // If item had a legacy/different raw slug with spaces, dots, or symbols,
    // also generate fallback for that legacy path so older shared URLs don't break
    if (item.slug) {
      const sanitizedRaw = sanitizeSlug(item.slug);
      if (sanitizedRaw && sanitizedRaw !== cleanSlug) {
        writeRoute(`${prefix}/${sanitizedRaw}`, item.title, item.description, item.image, itemOgTitle);
      }

      // Check title slug as fallback
      const titleSlug = getSlugFromTitle(item.title);
      if (titleSlug && titleSlug !== cleanSlug) {
        writeRoute(`${prefix}/${titleSlug}`, item.title, item.description, item.image, itemOgTitle);
      }
    }
  }
}

console.log("Generating Noida map routes...");
writeRoute(
  "/noida",
  "Noida Sector Maps HD",
  "Explore and download high definition sector layout maps of Noida with complete sector details from Chhabra Properties.",
  DEFAULT_IMG,
  "Noida Sector Maps HD | Chhabra Properties"
);
processSection("/noida", noidaData, "Noida HD Map");

console.log("\nGenerating Greater Noida map routes...");
writeRoute(
  "/greater-noida",
  "Greater Noida Sector Maps HD",
  "Explore and download high definition sector layout maps of Greater Noida with complete sector details from Chhabra Properties.",
  DEFAULT_IMG,
  "Greater Noida Sector Maps HD | Chhabra Properties"
);
processSection("/greater-noida", greaterNoida, "Greater Noida HD Map");

console.log("\nGenerating Yamuna Expressway map routes...");
writeRoute(
  "/yamuna-expressway",
  "Yamuna Expressway Sector Maps HD",
  "Explore and download high definition sector layout maps of Yamuna Expressway with complete sector details from Chhabra Properties.",
  DEFAULT_IMG,
  "Yamuna Expressway Sector Maps HD | Chhabra Properties"
);
processSection("/yamuna-expressway", yemuna, "Yamuna Expressway HD Map");

console.log("\nGenerating Blog routes...");
writeRoute(
  "/blog",
  "Real Estate Blogs & Market Insights",
  "Read the latest property news, sector development updates, and real estate investment insights in Noida, Greater Noida, and Yamuna Expressway.",
  DEFAULT_IMG,
  "Real Estate Blogs & Market Insights | Chhabra Properties"
);

try {
  const blogsRes = await fetch("https://chhhabra-1.onrender.com/api/blogs/", {
    signal: AbortSignal.timeout(8000),
  });
  if (blogsRes.ok) {
    const blogs = await blogsRes.json();
    if (Array.isArray(blogs)) {
      for (const b of blogs) {
        if (!b || !b.title) continue;
        const slug = b.slug || b.id;
        if (slug) {
          writeRoute(
            `/blog/${slug}`,
            b.title,
            b.description || b.content || "",
            b.image || DEFAULT_IMG,
            `${b.title.trim()} | Chhabra Properties`
          );
        }
      }
    }
  }
} catch (e) {
  console.log("Note: Remote blogs fetch skipped during prerender:", e.message);
}

console.log(`\n🎉 Successfully prerendered ${count} map detail routes and blog routes (${generatedPaths.size} total static paths).`);
