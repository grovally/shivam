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
        "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890796/SURAJPUR-SITE-IV_y9axjx.png",
      path: "/noida",
    },
    {
      title: "Greater Noida",
      description:
        "Discover modern townships, luxury homes, commercial projects, and high-growth investment locations.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg",
      path: "/greater-noida",
    },
    {
      title: "Yamuna Expressway",
      description:
        "Industrial plots, premium residential projects, and investment options near the upcoming Jewar Airport.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806936/SECTOR-20_POCKET-A_k6rxaz.jpg",
      path: "/yamuna-expressway",
    },
  ];

  return (
    <section className="relative mt-10 overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8">

      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      {/* Soft red glow */}
      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -60, 70, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-400/15
          blur-[130px]
        "
      />

      {/* Blue glow */}
      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 70, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-400/10
          blur-[140px]
        "
      />

      {/* =====================================================
          CRYSTAL GLASS 1
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -25, 0, 25, 0],
          rotate: [12, 18, 12, 6, 12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          top-20
          left-[4%]
          h-44
          w-44
          rotate-12
          rounded-[40px]
          border
          border-white/80
          bg-gradient-to-br
          from-white/80
          via-white/20
          to-red-100/30
          shadow-[0_20px_80px_rgba(255,255,255,0.45)]
          backdrop-blur-sm
          opacity-80
        "
      >
        <div className="absolute inset-3 rounded-[30px] border border-white/50" />

        <div
          className="
            absolute
            -left-10
            top-1/2
            h-20
            w-32
            -translate-y-1/2
            rotate-45
            bg-white/40
            blur-2xl
          "
        />
      </motion.div>

      {/* =====================================================
          CRYSTAL GLASS 2
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 30, 0, -30, 0],
          rotate: [-15, -8, -15, -20, -15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          top-[35%]
          right-[3%]
          h-56
          w-56
          rounded-[50px]
          border
          border-white/90
          bg-gradient-to-br
          from-white/90
          via-white/30
          to-blue-100/20
          shadow-[0_25px_100px_rgba(255,255,255,0.5)]
          backdrop-blur-sm
          opacity-70
        "
      >
        <div className="absolute inset-4 rounded-[40px] border border-white/50" />

        <div
          className="
            absolute
            right-0
            top-10
            h-32
            w-20
            rotate-45
            bg-white/40
            blur-2xl
          "
        />
      </motion.div>

      {/* =====================================================
          SMALL CRYSTAL
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [35, 45, 35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-10
          left-[35%]
          h-28
          w-28
          rounded-[28px]
          border
          border-white/70
          bg-gradient-to-br
          from-white/70
          to-red-100/20
          shadow-[0_15px_60px_rgba(255,255,255,0.4)]
          backdrop-blur-sm
          opacity-70
        "
      />

      {/* Center glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-100/20
          blur-[150px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Explore Locations
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Explore{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Property
            </span>{" "}
            Locations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Find premium residential, commercial and investment properties
            across Noida, Greater Noida and Yamuna Expressway.
          </p>
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -12,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/80
                bg-white/75
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-red-200
                hover:shadow-[0_30px_80px_rgba(220,38,38,0.18)]
              "
            >

              {/* Card glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-red-500/10
                  via-transparent
                  to-blue-500/10
                "
              />

              {/* =====================================================
                  IMAGE
              ===================================================== */}

              <div
                
              >
                <div  
                onClick={() => navigate(card.path)} className="relative w-full h-[260px] md:h-[320px] lg:h-[300px] flex items-center justify-center overflow-hidden">
  <img
    src={card.image}
    alt={card.title}
    className="
      w-full
      h-full
      object-contain
      object-center
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />
</div>

                

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-white/10
                  "
                />

                {/* Glass shine */}

                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-1/3
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    blur-sm
                  "
                />

                {/* Location badge */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-white/30
                    bg-black/40
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-md
                  "
                >
                  {card.title}
                </div>

              </div>

              {/* =====================================================
                  CONTENT
              ===================================================== */}

              <div className="relative z-20 p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {card.description}
                </p>

                <button
                  onClick={() => navigate(card.path)}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-red-600
                    to-red-500
                    px-6
                    py-3
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-red-500/20
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-xl
                    hover:shadow-red-500/30
                  "
                >
                  Explore

                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
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