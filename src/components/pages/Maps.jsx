import React from "react";
import { motion } from "framer-motion";

const locations = [
  {
    title: "Noida",

    description:
      "Explore premium residential and commercial properties across Noida's fastest-growing sectors with excellent connectivity and modern infrastructure.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890796/SURAJPUR-SITE-IV_y9axjx.png"
  },
  {
    title: "Greater Noida",
    description:
      "Discover spacious townships, luxury apartments, villas and investment opportunities in Greater Noida.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg",
  },
  {
    title: "Yamuna Expressway",
    description:
      "Invest in the rapidly developing Yamuna Expressway corridor near Jewar Airport, Film City and upcoming industrial hubs.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806936/SECTOR-20_POCKET-A_k6rxaz.jpg",
  },
];


export default function Maps() {
  return (
    <section className="bg-white py-24 overflow-hidden">

      <div className="mx-auto max-w-5xl px-6">
        




        {locations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="mb-28"
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-5xl font-extrabold text-gray-900"
            >
              {item.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 max-w-4xl text-lg leading-8 text-gray-600"
            >
              {item.description}
            </motion.p>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-[700px] w-[980px] object-cover"
               
               
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}