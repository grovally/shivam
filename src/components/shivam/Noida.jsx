import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noidaData } from "../data/noidaData";

export default function Noida() {
  const [sortBy, setSortBy] = useState("number-low");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const noidaDataWithId = noidaData.map((item, index) => ({ ...item, id: index }));

  const openDetail = (item) => {
    navigate(`/noida/${item.id}`);
  };

  const sortedData = noidaDataWithId
    .sort((a, b) => {
      const titleA = a.title?.trim().toLowerCase() || "";
      const titleB = b.title?.trim().toLowerCase() || "";

      switch (sortBy) {
        case "az":
          return titleA.localeCompare(titleB);
        case "za":
          return titleB.localeCompare(titleA);
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

  return (
    <section className="bg-white mt-10 py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-12">
          Noida <span className="text-red-500">Sector</span> Maps
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Noida sectors..."
            className="w-full md:w-1/2 border rounded-lg px-4 py-3 text-black outline-none"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-auto border rounded-lg px-4 py-2 outline-none"
          >
            <option value="number-low">Sector Low → High</option>
            <option value="number-high">Sector High → Low</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              key={`noida-${item.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-3xl bg-white border shadow-xl hover:shadow-2xl"
            >
              <div
                onClick={() => openDetail(item)}
                className="relative h-64 overflow-hidden cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={`${item.title} Noida Map`}
                  title={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
              </div>

              <div className="flex justify-center mt-3">
                <h3 className="px-3 py-1 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
