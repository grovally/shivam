import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Shivam() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Noida",
      description:
        "Premium residential apartments, commercial spaces, villas, and investment opportunities across Noida.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/c_fill,g_auto,w_800,h_600/v1785231975/SECTOR-20_POCKET-_E_zweeql.png",
      path: "/noida",
    },
    {
      title: "Greater Noida",
      description:
        "Discover modern townships, luxury homes, commercial projects, and high-growth investment locations.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/c_fill,g_auto,w_800,h_600/v1784890794/SURAJPUR-SITE-C_INDUSTRIAL._yb3ljr.png",
      path: "/greater-noida",
    },
    {
      title: "Yamuna Expressway",
      description:
        "Industrial plots, premium residential projects, and investment options near the upcoming Jewar Airport.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/c_fill,g_auto,w_800,h_600/v1784806908/SECTOR-_21_becukh.jpg",
      path: "/yamuna-expressway",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50 py-16 md:py-24">

      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-400/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[130px]"
      />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900">
            Explore{" "}
            <span className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
              Property
            </span>{" "}
            Locations
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Find premium residential, commercial and investment properties in
            Noida, Greater Noida and Yamuna Expressway.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: .5,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-red-300/40"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10"/>

              {/* Image */}
              <div
                onClick={() => navigate(card.path)}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
              >

                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>

                <motion.div
                  animate={{
                    opacity:[0.2,.5,.2]
                  }}
                  transition={{
                    repeat:Infinity,
                    duration:2
                  }}
                  className="absolute top-4 right-4 h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_#22c55e]"
                />

              </div>

              {/* Content */}
              <div className="relative p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {card.description}
                </p>

                <button
                  onClick={() => navigate(card.path)}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-white font-semibold transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40"
                >
                  Explore
                  <motion.span
                    animate={{ x: [0,6,0] }}
                    transition={{
                      repeat:Infinity,
                      duration:1
                    }}
                  >
                    →
                  </motion.span>
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
