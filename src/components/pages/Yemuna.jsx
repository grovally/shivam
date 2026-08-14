import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowUpDown } from "lucide-react";
import { yemuna } from "../data/yemunaNoidaData";

// ------------------------------------
// Generate slug
// ------------------------------------
const getSlugFromTitle = (title) =>
  (title || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ------------------------------------
// Normalize search text
// ------------------------------------
const normalize = (str) =>
  (str || "")
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// ------------------------------------
// Roman numeral support
// ------------------------------------
const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (str) => {
  if (!/^[IVXLCDM]+$/i.test(str) || str.length > 6) {
    return null;
  }

  const s = str.toUpperCase();

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

// ------------------------------------
// Tokenize title
// ------------------------------------
const tokenize = (title) =>
  (title || "")
    .trim()
    .split(/[\s\-_,.()]+/)
    .filter(Boolean)
    .map((tok) => {
      // Normal number
      if (/^\d+$/.test(tok)) {
        return {
          type: "num",
          val: Number(tok),
        };
      }

      // Roman number
      const roman = romanToInt(tok);

      if (roman !== null) {
        return {
          type: "num",
          val: roman,
        };
      }

      // Normal text
      return {
        type: "str",
        val: tok.toLowerCase(),
      };
    });

// title digit se start ho raha hai ya letter se
const startsWithDigit = (title) => /^\d/.test((title || "").trim());

// ------------------------------------
// Compare tokens (digit-starting titles always sort last, like Greater Noida page)
// ------------------------------------
const compareTokens = (a, b, titleA, titleB) => {
  const aIsNum = startsWithDigit(titleA);
  const bIsNum = startsWithDigit(titleB);

  if (aIsNum !== bIsNum) {
    return aIsNum ? 1 : -1;
  }

  const len = Math.max(a.length, b.length);

  for (let i = 0; i < len; i++) {
    const ta = a[i];
    const tb = b[i];

    if (!ta) return -1;
    if (!tb) return 1;

    // Number vs Number
    if (ta.type === "num" && tb.type === "num") {
      if (ta.val !== tb.val) {
        return ta.val - tb.val;
      }
    }

    // String vs String
    else if (ta.type === "str" && tb.type === "str") {
      const c = ta.val.localeCompare(tb.val);

      if (c !== 0) {
        return c;
      }
    }

    // Mixed
    else {
      const c = String(ta.val).localeCompare(String(tb.val));

      if (c !== 0) {
        return c;
      }
    }
  }

  return 0;
};

// ====================================
// YAMUNA COMPONENT
// ====================================
export default function Yamuna() {
  const navigate = useNavigate();

  // ----------------------------------
  // States
  // ----------------------------------
  const [category, setCategory] = useState("yemuna");
  const [sortBy, setSortBy] = useState("az");
  const [searchQuery, setSearchQuery] = useState("");

  // ----------------------------------
  // Open detail page
  // ----------------------------------
  const openDetail = (item) => {
    const slug =
      item?.slug || getSlugFromTitle(item?.title);

    navigate(
      `/yamuna-expressway/${encodeURIComponent(slug)}`
    );
  };

  // ----------------------------------
  // Sort data
  // ----------------------------------
  const sortedData = [...yemuna].sort((a, b) => {
    const titleA = (a?.title || "")
      .trim()
      .toLowerCase();

    const titleB = (b?.title || "")
      .trim()
      .toLowerCase();

    switch (sortBy) {
      // A → Z
      case "az":
        return compareTokens(
          tokenize(titleA),
          tokenize(titleB),
          titleA,
          titleB
        );

      // Z → A
      case "za": {
        const aIsNum = startsWithDigit(titleA);
        const bIsNum = startsWithDigit(titleB);
        if (aIsNum !== bIsNum) return aIsNum ? 1 : -1;
        return compareTokens(
          tokenize(titleB),
          tokenize(titleA),
          titleB,
          titleA
        );
      }

      // Number low → high
      case "number-low": {
        const numA = parseInt(
          titleA.match(/\d+/)?.[0] || 0
        );

        const numB = parseInt(
          titleB.match(/\d+/)?.[0] || 0
        );

        return numA - numB;
      }

      // Number high → low
      case "number-high": {
        const numA = parseInt(
          titleA.match(/\d+/)?.[0] || 0
        );

        const numB = parseInt(
          titleB.match(/\d+/)?.[0] || 0
        );

        return numB - numA;
      }

      default:
        return 0;
    }
  });

  // ----------------------------------
  // Search + Category filter
  // ----------------------------------
  const filteredData = sortedData.filter((item) => {
    const query = normalize(searchQuery);

    const matchesSearch =
      !query ||
      normalize(item?.title).includes(query) ||
      normalize(item?.slug).includes(query) ||
      normalize(item?.description).includes(query);

    const matchesCategory =
      category === "residential"
        ? normalize(item?.title).includes(
            "residential"
          ) ||
          normalize(item?.description).includes(
            "residential"
          )
        : true;

    return matchesSearch && matchesCategory;
  });

  // ==================================
  // RETURN
  // ==================================
  return (
    <section
      className="
        relative
        mt-10
        overflow-hidden
        bg-transparent
        py-16
        px-4
        sm:px-6
        lg:px-8
        text-white
      "
    >
      <div className="relative  max-w-7xl mx-auto">

        {/* ============================
            HEADING
        ============================ */}
        <h2
          className="
            text-center
            text-4xl
            text-black
            sm:text-5xl
            lg:text-6xl
            font-bold
            tracking-tight
            mb-4
          "
        >
          Yamuna{" "}
          <span className="text-red-500">
            Sector
          </span>{" "}
          Maps
        </h2>

        
        {/* ============================
            FILTER AREA
        ============================ */}
        <div
          className="
            relative
            
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
            mb-10
            rounded-2xl
            border
            border-black/10
            bg-white/70
            backdrop-blur-xl
            p-3
            shadow-sm
          "
        >

          {/* ==========================
              SEARCH
          ========================== */}
          <div className="relative w-full sm:w-1/3">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              onClick={(e) =>
                e.stopPropagation()
              }
              onFocus={(e) =>
                e.stopPropagation()
              }
              placeholder="Search Yamuna sectors..."
              className="
                pointer-events-auto
                relative
                
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-10
                py-2.5
                text-sm
                text-black
                placeholder:text-gray-400
                outline-none
                transition
                focus:border-red-500/60
                focus:ring-2
                focus:ring-red-500/15
              "
            />
            {searchQuery && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery("");
                }}
                aria-label="Clear search"
                className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2  text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* ==========================
              SORT
          ========================== */}
          <div className="relative w-full sm:w-auto">
            <ArrowUpDown className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="
                pointer-events-auto
                relative
                
                w-full
                sm:w-56
                appearance-none
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-4
                py-2.5
                text-sm
                text-black
                outline-none
                transition
                focus:border-red-500/60
                focus:ring-2
                focus:ring-red-500/15
              "
            >
              <option value="az">
                Sort: A → Z
              </option>

              <option value="za">
                Sort: Z → A
              </option>

              <option value="number-low">
                Sector No: Low → High
              </option>

              <option value="number-high">
                Sector No: High → Low
              </option>
            </select>
          </div>

        </div>

        {/* ============================
            MAP CARDS
        ============================ */}
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
                key={
                  item.slug
                    ? `${item.slug}-${index}`
                    : `yamuna-${index}`
                }
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -8,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                onClick={() =>
                  openDetail(item)
                }
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

                {/* ======================
                    IMAGE
                ====================== */}
                <div
                  className="
                    relative
                    w-full
                    aspect-[4/3]
                    overflow-hidden
                    bg-gray-100
                  "
                >

                  {item?.image ? (
                    <img
                      src={item.image}
                      alt={
                        item?.title ||
                        "Yamuna Sector Map"
                      }
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
                        e.currentTarget.style.display =
                          "none";
                      }}
                    />
                  ) : (
                    <div
                      className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        text-sm
                      "
                    >
                      Image unavailable
                    </div>
                  )}

                  {/* Border */}
                  <div
                    className="
                      absolute
                      inset-0
                      ring-1
                      ring-inset
                      ring-black/5
                      pointer-events-none
                    "
                  />

                  {/* Gradient */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-16
                      bg-gradient-to-t
                      from-black/10
                      to-transparent
                      pointer-events-none
                    "
                  />

                </div>

                {/* ======================
                    DIVIDER
                ====================== */}
                <div
                  className="
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-red-500/30
                    to-transparent
                  "
                />

                {/* ======================
                    TITLE
                ====================== */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    min-h-[56px]
                    px-3
                    py-3
                    bg-white
                  "
                >
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
                    {item?.title ||
                      "Untitled Sector"}
                  </h3>
                </div>

                {/* ======================
                    HOVER GLOW
                ====================== */}
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

        {/* ============================
            NO RESULTS
        ============================ */}
        {filteredData.length === 0 && (
          <div
            className="
              py-16
              text-center
              text-gray-500
            "
          >
            <p className="text-lg font-medium">
              No Yamuna sectors found.
            </p>

            <p className="mt-2 text-sm">
              Try another sector name or number.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
