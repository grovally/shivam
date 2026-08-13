import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowUpDown } from "lucide-react";
import { greaterNoida } from "../data/greaterNoidaData";

const getSlugFromTitle = (title) =>
  (title || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// normalize text for search: lowercase + remove hyphens/extra spaces
const normalize = (str) =>
  (str || "")
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// ---- Roman numeral support (I, II, III, IV ... ) ----
const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const romanToInt = (str) => {
  if (!/^[IVXLCDM]+$/i.test(str) || str.length > 6) return null;
  const s = str.toUpperCase();
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = romanMap[s[i]];
    const next = romanMap[s[i + 1]];
    if (next && cur < next) result -= cur;
    else result += cur;
  }
  return result;
};

// break a title into comparable tokens: numbers/roman numerals -> {type:'num'}, words -> {type:'str'}
const tokenize = (title) =>
  (title || "")
    .trim()
    .split(/[\s\-_,.()]+/)
    .filter(Boolean)
    .map((tok) => {
      if (/^\d+$/.test(tok)) return { type: "num", val: Number(tok) };
      const roman = romanToInt(tok);
      if (roman !== null) return { type: "num", val: roman };
      return { type: "str", val: tok.toLowerCase() };
    });

// title digit se start ho raha hai ya letter se
const startsWithDigit = (title) => /^\d/.test((title || "").trim());

// pure A→Z comparison: name parts alphabetically, number/roman parts numerically
// PLUS: titles starting with a digit always go to the bottom
const compareTokens = (a, b, titleA, titleB) => {
  const aIsNum = startsWithDigit(titleA);
  const bIsNum = startsWithDigit(titleB);

  if (aIsNum !== bIsNum) {
    return aIsNum ? 1 : -1; // digit-starting title goes after
  }

  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    const ta = a[i];
    const tb = b[i];
    if (!ta) return -1;
    if (!tb) return 1;
    if (ta.type === "num" && tb.type === "num") {
      if (ta.val !== tb.val) return ta.val - tb.val;
    } else if (ta.type === "str" && tb.type === "str") {
      const c = ta.val.localeCompare(tb.val);
      if (c !== 0) return c;
    } else {
      const c = String(ta.val).localeCompare(String(tb.val));
      if (c !== 0) return c;
    }
  }
  return 0;
};

function MapGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 sm:gap-7">
      {items.filter(Boolean).map((item, index) => (
        <motion.div
          key={item.slug ? `${item.slug}-${index}` : `noida-${index}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={() => onOpen(item)}
          className="
            group
            relative
            w-full
            cursor-pointer
            rounded-2xl
            overflow-hidden
            bg-white
            shadow-md
            shadow-black/10
            ring-1
            ring-black/5
            hover:shadow-2xl
            hover:shadow-red-500/20
            hover:ring-red-500/30
            transition-all
            duration-300
          "
        >
          {/* Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
            {item?.image ? (
              <img
                src={item.image}
                alt={item?.title || "Noida Sector Map"}
                className="
                  w-full
                  h-full
                  object-contain
                  p-2
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-[1.06]
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Image unavailable
              </div>
            )}

            {/* subtle top-corner accent instead of full border */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />

            {/* bottom gradient fade for depth */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Divider line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

          {/* Title */}
          <div className="flex items-center justify-center min-h-[56px] px-3 py-3 bg-white">
            <h3 className="w-full text-center text-sm sm:text-base font-semibold leading-tight text-gray-800 group-hover:text-red-500 transition-colors line-clamp-2">
              {item?.title || "Untitled Sector"}
            </h3>
          </div>

          {/* hover glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-28 h-10 rounded-full bg-red-500/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}

export default function GreateNoida() {
  const [sortBy, setSortBy] = useState("az");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const openDetail = (item) => {
    const slug = item?.slug || getSlugFromTitle(item?.title);
    navigate(`/greater-noida/${encodeURIComponent(slug)}`);
  };

  const safeData =
    greaterNoida?.filter((item) => item && item.title && item.image) || [];

  const sortData = (data) =>
    [...data].sort((a, b) => {
      const titleA = a.title.trim().toLowerCase();
      const titleB = b.title.trim().toLowerCase();

      switch (sortBy) {
        case "az":
          return compareTokens(tokenize(titleA), tokenize(titleB), titleA, titleB);

        case "za": {
          const aIsNum = startsWithDigit(titleA);
          const bIsNum = startsWithDigit(titleB);
          if (aIsNum !== bIsNum) return aIsNum ? 1 : -1;
          return compareTokens(tokenize(titleB), tokenize(titleA), titleB, titleA);
        }

        case "number-low": {
          const numA = Number(titleA.match(/\d+/)?.[0] || 0);
          const numB = Number(titleB.match(/\d+/)?.[0] || 0);
          return numA - numB;
        }

        case "number-high": {
          const numA = Number(titleA.match(/\d+/)?.[0] || 0);
          const numB = Number(titleB.match(/\d+/)?.[0] || 0);
          return numB - numA;
        }

        default:
          return 0;
      }
    });

  const matchesSearch = (item) => {
    const query = normalize(searchQuery);
    return (
      !query ||
      normalize(item.title).includes(query) ||
      normalize(item.slug).includes(query) ||
      normalize(item.description).includes(query)
    );
  };

  // Keywords that clearly indicate an INDUSTRIAL / commercial-industrial project.
  // Anything not matching these (and not explicitly labeled residential) is treated as Residential,
  // since most sector maps (Alpha, Beta, Gamma, Sigma, Omicron, ABADI villages, etc.)
  // are residential/mixed sectors even though their titles don't contain the word "residential".
  const INDUSTRIAL_KEYWORDS = [
    "ECOTECH",
    "SURAJPUR",
    "TECH ZONE",
    "TOY CITY",
    "BZP",
    "INDUSTRIAL AREA",
    "EPIP",
    "UDYOG",
    "KP-II",
    "KP-III",
    "KP-IV",
    "KP-V",
    "K.P-II",
    "MP GREATER NOIDA",
    "MP NOIDA EXTENSION",
  ];

  const classifyItem = (item) => {
    const t = `${item.title || ""} ${item.slug || ""}`.toUpperCase();
    const desc = (item.description || "").toUpperCase();

    // explicit tag in title always wins
    if (t.includes("RESIDENTIAL")) return "residential";
    if (t.includes("INDUSTRIAL")) return "industrial";

    // known industrial project keywords
    if (INDUSTRIAL_KEYWORDS.some((k) => t.includes(k))) return "industrial";

    // description strongly indicates an industrial hub and doesn't mention residential
    if (desc.includes("INDUSTRIAL") && !desc.includes("RESIDENTIAL")) {
      return "industrial";
    }

    // default: sector/village/society maps are residential
    return "residential";
  };

  const residentialData = sortData(
    safeData.filter(
      (item) => matchesSearch(item) && classifyItem(item) === "residential"
    )
  );

  const industrialData = sortData(
    safeData.filter(
      (item) => matchesSearch(item) && classifyItem(item) === "industrial"
    )
  );

  const totalShown = residentialData.length + industrialData.length;

  return (
    <section className="relative mt-10 overflow-hidden bg-transparent py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl text-black sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Greater Noida <span className="text-red-500">Sector</span> Maps
        </h2>
       

        {/* FILTER AREA (shared search + sort, applies to both sections) */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-14 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl p-3 shadow-sm">
          {/* Search */}
          <div className="relative w-full sm:w-1/3">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sector, society or area..."
              className="w-full rounded-xl border border-gray-200 bg-white px-10 py-2.5 text-sm text-black placeholder:text-gray-400 outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/15"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative w-full sm:w-auto">
            <ArrowUpDown className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-56 appearance-none rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm text-black outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/15"
            >
              <option value="az">Sort: A → Z</option>
              <option value="za">Sort: Z → A</option>
              <option value="number-low">Sector No: Low → High</option>
              <option value="number-high">Sector No: High → Low</option>
            </select>
          </div>
        </div>

        {/* ============================
            RESIDENTIAL MAP SECTION (shown first)
        ============================ */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Residential Map <span className="text-red-500">Greater Noida</span>
          </h3>

          {residentialData.length > 0 ? (
            <MapGrid items={residentialData} onOpen={openDetail} />
          ) : (
            <p className="text-gray-400 text-sm">No residential maps found.</p>
          )}
        </div>

        {/* ============================
            INDUSTRIAL MAP SECTION (shown below)
        ============================ */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Industrial Map <span className="text-red-500">Greater Noida</span>
          </h3>

          {industrialData.length > 0 ? (
            <MapGrid items={industrialData} onOpen={openDetail} />
          ) : (
            <p className="text-gray-400 text-sm">No industrial maps found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
