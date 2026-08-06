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
    <section className="bg-white mt-10 py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold mb-12">
          Greater Noida <span className="text-red-500">Sector</span> Maps
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Greater Noida sectors..."
            className="w-full md:w-1/2 lg:w-1/4 border rounded-lg px-4 py-3 text-black outline-none"
          />
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
  <button
    onClick={() => setCategory("residential")}
    className={`w-full sm:w-auto px-5 py-2 rounded-lg ${
      category === "residential"
        ? "bg-red-600 text-white"
        : "bg-gray-200 text-black"
    }`}
  >
    Residential Map
  </button>

  <button
    onClick={() => setCategory("greater-noida")}
    className={`w-full sm:w-auto px-5 py-2 rounded-lg ${
      category === "greater-noida"
        ? "bg-red-600 text-white"
        : "bg-gray-200 text-black"
    }`}
  >
    Greater Noida
  </button>
</div>


          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-auto border rounded-lg px-4 py-2"
          >
            <option value="number-low">Sector Low → High</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="number-high">Sector High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {filteredData.map((item) => (
            <motion.div
              key={item.slug || item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-3xl bg-white border shadow-xl hover:shadow-2xl cursor-pointer"
              onClick={() => openDetail(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openDetail(item);
                }
              }}
            >

              {/* IMAGE */}
              <div
                onClick={() => openDetail(item)}
                className="relative w-full aspect-[3/2] sm:aspect-[4/3] overflow-hidden cursor-pointer group rounded-t-3xl bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              {/* TITLE */}
              <div className="flex justify-center mt-2">
                <h3
                  className="w-fit px-3 py-1 text-base font-semibold text-gray-900 hover:text-red-500 transition-colors rounded-md"
                  title={item.title}
                >
                  {item.title}
                </h3>
              </div>

              {/* BUTTON */}
              <div className="p-4 -mt-4 flex justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDetail(item);
                  }}
                >
                 
                </button>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}