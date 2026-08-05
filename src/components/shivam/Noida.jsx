import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noidaData } from "../data/noidaData";

export default function Noida() {
  const [sortBy, setSortBy] = useState("  Sector Low → High");
  const navigate = useNavigate();
  

  const openDetail = (index) => {
    navigate(`/noida/${index}`);
  };

  const sortedData = [...noidaData].sort((a, b) => {
    const titleA = a.title.trim().toLowerCase();
    const titleB = b.title.trim().toLowerCase();

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
    <section className="bg-white mt-10 py-16 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold mb-12">
           Noida <span className="text-red-500">Sector</span> Maps
        </h2>

        <div className="flex justify-end mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="number-low">Sector Low → High</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            
            <option value="number-high">Sector High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {sortedData.map((item) => {

            const originalIndex = noidaData.indexOf(item);

            return (
              <motion.div
                key={originalIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-3xl bg-white border shadow-xl hover:shadow-2xl"
              >

                <div
  onClick={() => openDetail(originalIndex)}
  className="relative h-64 overflow-hidden  cursor-pointer group"
>
  <img
    src={item.image}
    alt={item.title}
    title="Alpha 1 Greater Noida Map"

    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
</div>

<div className="flex justify-center mt-2">
  <h3
    className="
      w-fit
      px-3
      py-1
      text-base
      font-semibold
      text-gray-900
      hover:text-red-500
      transition-colors
      rounded-md
    "
    title={item.title}
  >
    {item.title}
  </h3>
</div>

                <div >
                 

                 

<button
  onClick={() => openDetail(originalIndex)}
>

</button>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}