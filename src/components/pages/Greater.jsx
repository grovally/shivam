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

export default function GreateNoida() {
  const [category, setCategory] = useState("greater-noida");
  const [sortBy, setSortBy] = useState("number-low");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const openDetail = (item) => {
    const slug = item?.slug || getSlugFromTitle(item?.title);
    navigate(`/greater-noida/${encodeURIComponent(slug)}`);
  };

  const safeData =
    greaterNoida?.filter(
      (item) => item && item.title && item.image
    ) || [];

  const sortedData = [...safeData].sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    switch (sortBy) {
      case "az":
        return titleA.localeCompare(titleB);

      case "za":
        return titleB.localeCompare(titleA);

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

  const filteredData = sortedData.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      item.title?.toLowerCase().includes(query) ||
      item.slug?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query);

    const matchesCategory =
      category === "residential"
        ? item.title?.toLowerCase().includes("residential") ||
          item.description?.toLowerCase().includes("residential")
        : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative mt-10 overflow-hidden bg-transparent py-16 px-4 sm:px-6 lg:px-8 text-white">

  {/* =====================================================
      PREMIUM CRYSTAL BACKGROUND
  ===================================================== */}
 

  {/* =====================================================
      CONTENT
  ===================================================== */}
  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Heading */}
    <h2
      className="
        text-center
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-bold
        tracking-tight
        mb-12
      "
    >
       Greater Noida{" "}
      <span className="text-red-500">
        Sector
      </span>{" "}
      Maps
    </h2>


    {/* =====================================================
        FILTER AREA
    ===================================================== */}
    <div
      className="
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-center
        md:justify-between
        mb-8
      "
    >

      {/* Search */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Noida sectors..."
        className="
          w-full
          md:w-1/4
          rounded-xl
          border
          border-white/10
          bg-white/[0.06]
          backdrop-blur-xl
          px-4
          py-3
          text-white
          placeholder:text-gray-400
          outline-none
          transition
          focus:border-orange-500/50
          focus:ring-2
          focus:ring-orange-500/20
        "
      />


      {/* Category */}
      <div className="flex flex-wrap gap-3">

        <button
          
          className={`
            px-5
            py-2.5
            rounded-xl
            font-medium
            transition-all
            ${
              category === "residential"
                ? "bg-orange-500 text-white shadow-lg shadow-red-500/30"
                : "bg-white/[0.07] text-gray-300 border border-white/10 hover:bg-white/10"
            }
          `}
        >
          Residential Map
        </button>


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
                ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                : "bg-white/[0.07] text-gray-300 border border-white/10 hover:bg-white/10"
            }
          `}
        >
          Industrial Map
        </button>

      </div>


      {/* Sort */}
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
        <option value="number-low">
          Sector Low → High
        </option>

        <option value="number-high">
          Sector High → Low
        </option>

        <option value="az">
          A → Z
        </option>

        <option value="za">
          Z → A
        </option>
      </select>

    </div>


    {/* =====================================================
        MAP CARDS
    ===================================================== */}
   <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-4
    gap-6
  "
>
  {filteredData
    .filter(Boolean)
    .map((item) => (
      <motion.div
        key={`noida-${item.id}`}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          y: -10,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          group
          w-full
          overflow-hidden
          
          bg-white/[0.06]
          backdrop-blur-xl
          border
          border-white/10
         
          hover:border-red-500/30
          hover:shadow-red-500/10
          transition-all
        "
      >
        {/* Image */}
        <div
          onClick={() => openDetail(item)}
          className="
            relative
            w-full
            aspect-[4/3]
            overflow-hidden
            cursor-pointer
            
            bg-gray-900
          "
        >
          {item?.image ? (
            <img
              src={item.image}
              alt={item?.title || "Noida Sector Map"}
              className="
                w-full
                h-full
                object-cover
                border-4
                border-red-500
                transition-transform
                duration-500
                group-hover:scale-105
              "
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Image unavailable
            </div>
          )}

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-white/5
              pointer-events-none
            "
          />

          {/* Glow */}
          <div
            className="
              absolute
              -bottom-10
              left-1/2
              -translate-x-1/2
              w-32
              h-12
              rounded-full
              bg-red-500/20
             
              opacity-0
              group-hover:opacity-100
              transition-opacity
              pointer-events-none
            "
          />
        </div>

        {/* Title */}
        <div className="flex items-center justify-center min-h-[64px] px-3 py-3">
          <h3
            className="
              w-full
              text-center
              text-md
              sm:text-base
              font-semibold
              leading-tight
              text-black
              
              group-hover:text-red-500
              transition-colors
              line-clamp-2
            "
          >
            {item?.title || "Untitled Sector"}
          </h3>
        </div>
      </motion.div>
    ))}
</div>
  </div>

</section>
  );
}