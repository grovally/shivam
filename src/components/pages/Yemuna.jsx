
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const yemuna=[
    {
        title:"",
        image:""
    },
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }

]
export default function Yamuna() {
   const [selectedMap, setSelectedMap] = useState(null);
  
  
  
   

return (
  <section className="bg-white py-16 px-6 text-black">
    <div className="mx-auto mt-10 max-w-7xl">
     <h2 className="mb-12 text-center text-5xl font-bold">
  Yamuna Expressway <span className="text-red-500">Sector</span> Maps
</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {yemuna.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.35 }}
            className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-lg">
                ⭐ Premium
              </span>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80">
                  Premium Location • Noida
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-gray-500">
                  Explore Details
                </p>

                
              </div>

              <button
                onClick={() => setSelectedMap(item)}
                className="rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
              >
                View →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup */}

      <AnimatePresence>
        {selectedMap && (
          <motion.div
            className="fixed inset-0 z-50  mt-14 flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMap(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl overflow-hidden rounded-3xl bg-white"
            >
              <button
                onClick={() => setSelectedMap(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-red-600 p-3 text-white"
              >
                <X size={22} />
              </button>

              <img
                src={selectedMap.image}
                alt={selectedMap.title}
                className="h-[85vh] w-full object-contain bg-black"
              />

              <div className="p-8">
                <h2 className="text-4xl font-bold">
                  {selectedMap.title}
                </h2>

               <p className="text-sm text-white/80">
  Premium Location • Yamuna Expressway
</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
);
  

}