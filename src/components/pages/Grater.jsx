 import React from "react";
 import { motion } from "framer-motion";
import { Italic } from "lucide-react";
const greateNoida=[
    {
        title:"Sector 20",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806936/SECTOR-20_POCKET-A_k6rxaz.jpg"
    },
    {
        title:" Sector 18",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806932/SECTOR-18_POCKET-9B_yydym4.jpg"
    }
    ,
    {
        title:"SECTOR-18_POCKET-8",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806927/SECTOR-18_POCKET-8_mbuubx.jpg"
    }
    ,
    {
        title:"SECTOR-18_POCKET7E",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806927/SECTOR-18_POCKET-7E_s1p6zm.jpg"
    }
    ,
    {
        title:" Sector-18_ Pocket-7b",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806924/SECTOR-18_POCKET-7B_7F_psxopn.jpg"
    }
    ,
    {
        title:"Sector 24",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806920/SECTOR-_24_mb58i7.jpg"
    }
    ,
    {
        title:" Sector 18",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806917/SECTOR-18_POCKET-1B_hhrcci.jpg"
    }
    ,
    {
        title:" Sector 24",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806917/SECTOR-_24A_gmxtfu.jpg"
    }
    ,
    {
        title:" Sector 22E",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806910/SECTOR-_22E_hfnasq.jpg"
    }
    ,
    {
        title:" Sector 21",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806908/SECTOR-_21_becukh.jpg"
    }
    ,
    {
        title:" sector 17A",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806906/SECTOR-_17A_vej65j.jpg"
    }
    ,
    {
        title:"NILONI_SHAHPUR_BLOCK",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806890/7_VILLAGE-_NILONI_SHAHPUR_BLOCK-B_s56mvq.jpg"
    }
    ,
    {
        title:"RAMPUR_BANGAR_SADAR",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806890/7_VILLAGE-_RAMPUR_BANGAR_SADAR_jwrmbr.jpg"
    }
    ,
    {
        title:"MIRJAPUR_SECTOR-18_PCKT-9",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784806880/7_VILLAGE-_MIRJAPUR_SECTOR-18_PCKT-9_hgjb00.jpg"
    }
    ,
    {
        title:" Sector-127",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg"
    }
    ,
    {
        title:" Sector 155",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784805601/SECTOR-_155_y0fowy.jpg"
    }
 ]
    
  
export default function Grater(){
    const [selectedMap, setSelectedMap] = useState(null);
    return(
        <section className="bg-white py-16 px-16 text-black">
            <div  className="max-auto mt-10 max-w-5xl">
                <h1 className="mb-12 text-center text-5xl font-bolt text-black">
                    Greater Noida <span className="text-red-600"> Sector</span>  Maps
                </h1>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {greateNoida.map((item, index) => (
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

                <p className="mt-2 text-gray-600">
                  Premium Noida Authority Map
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
                
               

            </div>
        </section>
    )
}