import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noidaData } from "../data/noidaData";

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

// pure A→Z comparison: name parts alphabetically, number/roman parts numerically
const compareTokens = (a, b) => {
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

export default function Noida() {
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("az");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const noidaDataWithId = noidaData.map((item, index) => ({
    ...item,
    id: index,
    image: item.image?.trim(),
  }));

  const openDetail = (item) => {
    navigate(`/noida/${item.id}`);
  };

  const sortedData = [...noidaDataWithId].sort((a, b) => {
    const titleA = a.title?.trim().toLowerCase() || "";
    const titleB = b.title?.trim().toLowerCase() || "";

    switch (sortBy) {
      case "az":
        return compareTokens(tokenize(titleA), tokenize(titleB));
      case "za":
        return compareTokens(tokenize(titleB), tokenize(titleA));
      case "number-low":
        return (
          Number(titleA.match(/\d+/)?.[0] || 0) -
          Number(titleB.match(/\d+/)?.[0] || 0)
        );
      case "number-high":
        return (
          Number(titleB.match(/\d+/)?.[0] || 0) -
          Number(titleA.match(/\d+/)?.[0] || 0)
        );
      default:
        return 0;
    }
  });

  const filteredData = sortedData.filter((item) => {
    const query = normalize(searchQuery);

    const matchesSearch =
      !query ||
      normalize(item.title).includes(query) ||
      normalize(item.slug).includes(query) ||
      normalize(item.description).includes(query);

    const matchesCategory =
      category === "residential"
        ? item.title?.toLowerCase().includes("residential") ||
          item.description?.toLowerCase().includes("residential")
        : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative mt-10 overflow-hidden py-16 px-4 sm:px-6 lg:px-8 text-white">
      <h2
        className="
          text-center
          text-4xl
          text-black
          sm:text-5xl
          lg:text-6xl
          font-bold
          tracking-tight
          mb-12
        "
      >
        Noida <span className="text-red-500">Sector</span> Maps
      </h2>

      {/* FILTER AREA */}
      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
          mb-10
        "
      >
        <div className="relative w-full md:w-1/4">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Noida sectors..."
            className="
              w-full
              rounded-xl
              border
              border-red-500/10
              bg-black/[0.06]
              backdrop-blur-xl
              pl-11
              pr-10
              py-3
              text-black
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-red-500/50
              focus:ring-2
              focus:ring-red-500/20
            "
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-gray-400
                hover:text-red-500
                transition-colors
              "
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setCategory("noida")}
            className={`
              px-5
              py-2.5
              rounded-xl
              font-medium
              transition-all
              ${
                category === "noida"
                  ? "bg-red-500 text-black shadow-lg shadow-red-500/30"
                  : "bg-black text-gray-300 border border-white/10 hover:bg-white/10"
              }
            `}
          >
            Residential Map
          </button>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            w-full
            md:w-auto
            rounded-xl
            border
            border-white/10
            bg-[#111111]
            px-4
            py-3
            text-white
            outline-none
            focus:border-orange-500/50
          "
        >
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
          <option value="number-low">Sector Low → High</option>
          <option value="number-high">Sector High → Low</option>
        </select>
      </div>

      {/* MAP CARDS */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-4
          gap-5
          sm:gap-7
        "
      >
        {filteredData
          .filter(Boolean)
          .map((item, index) => (
            <motion.div
              key={`noida-${item.id ?? index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={() => openDetail(item)}
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
              <div
                className="
                  relative
                  w-full
                  aspect-[4/3]
                  overflow-hidden
                "
              >
                {item?.image ? (
                  <img
                    src={item.image}
                    alt={item?.title || "Noida Sector Map"}
                    loading="lazy"
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

                {/* subtle border accent */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />

                {/* bottom gradient fade for depth */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Divider line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

              <div className="flex items-center justify-center min-h-[56px] px-3 py-3 bg-white">
                <h3
                  className="
                    w-full
                    text-center
                    text-sm
                    sm:text-base
                    font-semibold
                    leading-tight
                    text-gray-800
                    group-hover:text-red-500
                    transition-colors
                    line-clamp-2
                  "
                >
                  {item?.title || "Untitled Sector"}
                </h3>
              </div>

              {/* hover glow */}
              <div
                className="
                  absolute
                  -bottom-8
                  left-1/2
                  -translate-x-1/2
                  w-28
                  h-10
                  rounded-full
                  bg-red-500/25
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  pointer-events-none
                "
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
