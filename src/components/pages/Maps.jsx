import React from "react";
import { motion } from "framer-motion";

const locations = [
  {
    id: "noida",
    title: "Noida",
    path:"/noida",
    description:
      "Explore premium residential and commercial properties across Noida's fastest-growing sectors with excellent connectivity and modern infrastructure.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890796/SURAJPUR-SITE-IV_y9axjx.png",
  },
  {
    id: "greater-noida",
    title: "Greater Noida",
    path:"/greater-noida",
    description:
      "Discover spacious townships, luxury apartments, villas and investment opportunities in Greater Noida.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg",
  },
  {
    id: "yamuna-expressway",
    title: "Yamuna Expressway",
    path:"/yemunaexpress",
    description:
      "Invest in the rapidly developing Yamuna Expressway corridor near Jewar Airport, Film City and upcoming industrial hubs.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806936/SECTOR-20_POCKET-A_k6rxaz.jpg",
  },
];

export default function Maps() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-black md:text-5xl">
            Explore Our Locations
          </h1>

          <p className="mt-4 text-red-500 text-sm md:text-lg">
            Discover premium residential & commercial destinations across NCR.
          </p>
        </div>

        {/* Top Buttons */}
        <div className="sticky top-20 z-30 mb-20 bg-white/95 py-4 backdrop-blur">
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((item) => (
              <a
                key={item.id}
                href={`${item.path}`}
                className="rounded-full bg-red-500  px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg md:px-7"
              >
                {item.title}
              </a>
              
            ))}
          </div>
        </div>

        {locations.map((item, index) => (
          <motion.div
            id={item.id}
            key={item.path}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="mb-24 scroll-mt-10"
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-3xl font-extrabold text-red-500 md:text-5xl"
            >
              {item.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 max-w-4xl text-base leading-8 text-black/95 md:text-lg"
            >
              {item.description}
            </motion.p>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-[190px] w-full object-cover sm:h-[380px] md:h-[500px] lg:h-[650px]"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}