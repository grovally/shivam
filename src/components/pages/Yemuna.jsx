import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yemuna } from "../data/yemunaNoidaData";

export default function Yamuna() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("number-low");
  const [searchQuery, setSearchQuery] = useState("");

  const openDetail = (item) => {
    navigate(`/yamuna-expressway/${item.slug}`);
  };

  const sortedData = [...yemuna].sort((a, b) => {
    const titleA = (a?.title || "").trim().toLowerCase();
    const titleB = (b?.title || "").trim().toLowerCase();

    switch (sortBy) {
      case "az":
        return titleA.localeCompare(titleB);

      case "za":
        return titleB.localeCompare(titleA);

      case "number-low": {
        const numA = parseInt(titleA.match(/\d+/)?.[0] || 0);
        const numB = parseInt(titleB.match(/\d+/)?.[0] || 0);
        return numA - numB;
      }

      case "number-high": {
        const numA = parseInt(titleA.match(/\d+/)?.[0] || 0);
        const numB = parseInt(titleB.match(/\d+/)?.[0] || 0);
        return numB - numA;
      }

      default:
        return 0;
    }
  });

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto mt-10">

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
          Yamuna Expressway
          <span className="text-red-500"> Sector Maps</span>
        </h2>

        {/* Filter */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Yamuna sectors..."
            className="w-full md:w-1/2 border rounded-lg px-4 py-3 shadow-md text-black outline-none"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-auto border rounded-lg px-4 py-2 shadow-md outline-none"
          >
            <option value="number-low">Sector Low → High</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="number-high">Sector High → Low</option>
          </select>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {sortedData
            .filter((item) => {
              const query = searchQuery.trim().toLowerCase();
              if (!query) return true;
              return (
                item.title?.toLowerCase().includes(query) ||
                item.slug?.toLowerCase().includes(query)
              );
            })
            .map((item) => (
            <motion.div
              key={item.slug}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl"
            >
              {/* Image */}
              <div
                onClick={() => openDetail(item)}
                className="relative h-64 overflow-hidden cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              {/* Title */}
              <div className="flex justify-center mt-2">
                <h3
                  className="w-fit px-3 py-1 text-base font-semibold text-gray-900 hover:text-red-500 transition-colors rounded-md"
                  title={item.title}
                >
                  {item.title}
                </h3>
              </div>

              {/* Button */}
              <div className="p-4 -mt-10">
                <button
                  onClick={() => openDetail(item)}
                 
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