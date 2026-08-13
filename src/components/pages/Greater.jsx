import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const residentialData = sortData(
    safeData.filter(
      (item) =>
        matchesSearch(item) &&
        (item.title?.toLowerCase().includes("residential") ||
          item.description?.toLowerCase().includes("residential"))
    )
  );

  const industrialData = sortData(
    safeData.filter(
      (item) =>
        matchesSearch(item) &&
        !(
          item.title?.toLowerCase().includes("residential") ||
          item.description?.toLowerCase().includes("residential")
        )
    )
  );

  return (
    <section className="relative mt-10 overflow-hidden bg-transparent py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl text-black sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
          Greater Noida <span className="text-red-500">Sector</span> Maps
        </h2>

        {/* FILTER AREA (shared search + sort, applies to both sections) */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-14">
          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Noida sectors..."
            className="w-full md:w-1/4 rounded-xl border border-red-500/10 bg-red/[0.06] backdrop-blur-xl px-4 py-3 text-black placeholder:text-gray-400 outline-none transition border-red-500/50 focus:ring-2 ring-red-500/20"
          />

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-auto rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none focus:border-orange-500/50"
          >
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="number-low">Sector Low → High</option>
            <option value="number-high">Sector High → Low</option>
          </select>
        </div>

        {/* ============================
            INDUSTRIAL MAP SECTION
        ============================ */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Industrial Map <span className="text-red-500">Greater Noida</span>
          </h3>

          {industrialData.length > 0 ? (
            <MapGrid items={industrialData} onOpen={openDetail} />
          ) : (
            <p className="text-gray-400 text-sm">No industrial maps found.</p>
          )}
        </div>

        {/* ============================
            RESIDENTIAL MAP SECTION
        ============================ */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Residential Map <span className="text-red-500">Greater Noida</span>
          </h3>

          {residentialData.length > 0 ? (
            <MapGrid items={residentialData} onOpen={openDetail} />
          ) : (
            <p className="text-gray-400 text-sm">No residential maps found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
