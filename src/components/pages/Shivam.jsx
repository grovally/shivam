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
        "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890554/SECTOR-80_81_ty6ztm.png",
      path: "/noida",
    },
    {
      title: "Greater Noida",
      description:
        "Discover modern townships, luxury homes, commercial projects, and high-growth investment locations.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890765/MP_GREATER_NOIDA_na15fy.png",
  
      path: "/greater-noida",
    },
    {
      title: "Yamuna Expressway",
      description:
        "Industrial plots, premium residential projects, and investment options near the upcoming Jewar Airport.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785231930/MP-_SECTOR-18-20_1_rrfu1g.png",
      path: "/yamuna-expressway",
    },
  ];

  return (
   
<section className="relative  overflow-hidden bg-white px-4 py-16 text-white sm:px-6 lg:px-8">

  {/* =====================================================
      PREMIUM RED WAVE BACKGROUND
  ===================================================== */}

  <div className="pointer-events-none absolute left-0 top-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block h-20 w-full md:h-32"
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="redWaveGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#450000" />
          <stop offset="35%" stopColor="#b91c1c" />
          <stop offset="65%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>

      <path
        d="
          M0,0
          C120,35 240,45 360,55
          C500,65 620,75 760,90
          C900,105 1040,125 1200,155
          L1200,0
          L0,0
          Z
        "
        fill="url(#redWaveGradient)"
      />
    </svg>
  </div>

  {/* =====================================================
      PREMIUM SOFT GLOWS
  ===================================================== */}

  <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-red-500/10 blur-[100px]" />

  <div className="pointer-events-none absolute right-[-120px] top-72 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

  {/* =====================================================
      CRYSTAL GLASS ELEMENTS
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      left-[8%]
      top-[30%]
      h-20
      w-20
      rotate-45
      rounded-2xl
      border
      border-white/40
      bg-white/20
      backdrop-blur-md
      shadow-[0_10px_40px_rgba(255,255,255,0.15)]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-[48%]
      h-28
      w-28
      rotate-12
      rounded-3xl
      border
      border-white/30
      bg-white/10
      backdrop-blur-lg
      shadow-[0_15px_50px_rgba(255,255,255,0.12)]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      bottom-[12%]
      left-[45%]
      h-12
      w-12
      rotate-45
      rounded-xl
      border
      border-white/30
      bg-white/10
      backdrop-blur-md
    "
  />

  {/* =====================================================
      MAIN CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* =====================================================
        HEADING
    ===================================================== */}

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
        OUR{" "}
        <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-500 bg-clip-text text-transparent">
          LAYOUT
        </span>{" "}
        MAPS
      </h2>

      <p className="mx-auto mt-5 max-w-5xl px-2 text-base leading-8 text-gray-600 sm:text-lg">
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
            border-gray-200
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            transition-all
            duration-500
            hover:border-red-200
            hover:shadow-[0_30px_80px_rgba(220,38,38,0.18)]
          "
        >

          {/* =====================================================
              CARD HOVER GLOW
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              bg-gradient-to-br
              from-red-500/10
              via-transparent
              to-blue-500/10
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* =====================================================
              IMAGE
          ===================================================== */}

          <div className="relative overflow-hidden">

            <div
              onClick={() => navigate(card.path)}
              className="
                relative
                h-[260px]
                w-full
                cursor-pointer
                overflow-hidden
                md:h-[320px]
                lg:h-[300px]
              "
            >

              <img
                src={card.image}
                alt={card.title}
                className="
                  h-full
                  w-full
                  object-contain
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* =====================================================
                  IMAGE OVERLAY
              ===================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-white/10
                "
              />

              {/* =====================================================
                  GLASS SHINE
              ===================================================== */}

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
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-1/3
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                  blur-sm
                "
              />

              {/* =====================================================
                  LOCATION BADGE
              ===================================================== */}

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
          </div>

          {/* =====================================================
              CARD CONTENT
          ===================================================== */}

          <div className="relative z-20 p-6">

            <h3 className="text-2xl font-bold text-gray-900">
              {card.title}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              {card.description}
            </p>

            {/* =====================================================
                EXPLORE BUTTON
            ===================================================== */}

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