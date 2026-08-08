import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

const locations = [
  {
    id: "noida",
    title: "Noida",
    path: "/noida",
    description:
      "Explore premium residential and commercial properties across Noida's fastest-growing sectors with excellent connectivity and modern infrastructure.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890796/SURAJPUR-SITE-IV_y9axjx.png",
  },

  {
    id: "greater-noida",
    title: "Greater Noida",
    path: "/greater-noida",
    description:
      "Discover spacious townships, luxury apartments, villas and investment opportunities in Greater Noida.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg",
  },

  {
    id: "yamuna-expressway",
    title: "Yamuna Expressway",
    path: "/yamuna-expressway",
    description:
      "Invest near Jewar Airport, Film City and upcoming industrial hubs with high growth potential.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806936/SECTOR-20_POCKET-A_k6rxaz.jpg",
  },
];

export default function Maps() {
  const navigate = useNavigate();

  return (
    <section className="relative mt-10 overflow-hidden bg-white py-20 text-gray-900">

      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft red glow */}
        <motion.div
          animate={{
            x: [0, 100, -60, 0],
            y: [0, -50, 70, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-red-200/30
            blur-[130px]
          "
        />

        {/* Orange glow */}
        <motion.div
          animate={{
            x: [0, -80, 70, 0],
            y: [0, 70, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-200/30
            blur-[140px]
          "
        />

        {/* Center glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-100/30
            blur-[150px]
          "
        />

        {/* =================================================
            FLOATING CRYSTAL 1
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -35, 0],
            rotate: [20, 28, 20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[5%]
            top-[8%]
            h-52
            w-36
            rotate-20
            rounded-[45px]
            border
            border-white/80
            bg-gradient-to-br
            from-white/80
            via-white/30
            to-red-100/20
            shadow-[inset_15px_15px_40px_rgba(255,255,255,0.8),0_20px_80px_rgba(220,38,38,0.08)]
            backdrop-blur-md
          "
        >
          <div className="absolute inset-0 rounded-[45px] bg-gradient-to-br from-white/70 via-transparent to-transparent" />

          <motion.div
            animate={{
              x: ["-120%", "180%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0
              w-12
              rotate-12
              bg-white/50
              blur-xl
            "
          />
        </motion.div>


        {/* =================================================
            FLOATING CRYSTAL 2
        ================================================= */}

        <motion.div
          animate={{
            y: [0, 45, 0],
            rotate: [-15, -8, -15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[4%]
            top-[28%]
            h-64
            w-44
            rotate-[-15deg]
            rounded-[55px]
            border
            border-white/80
            bg-gradient-to-tr
            from-orange-100/40
            via-white/50
            to-transparent
            shadow-[inset_-15px_15px_45px_rgba(255,255,255,0.8),0_20px_90px_rgba(249,115,22,0.08)]
            backdrop-blur-md
          "
        >
          <motion.div
            animate={{
              x: ["-120%", "180%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0
              w-14
              rotate-12
              bg-white/50
              blur-xl
            "
          />
        </motion.div>


        {/* =================================================
            SMALL CRYSTALS
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [10, 25, 10],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[15%]
            left-[12%]
            h-24
            w-16
            rounded-3xl
            border
            border-white/80
            bg-white/40
            shadow-[inset_5px_5px_20px_rgba(255,255,255,0.8)]
            backdrop-blur-md
          "
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [-10, 5, -10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[8%]
            right-[18%]
            h-20
            w-14
            rounded-2xl
            border
            border-white/80
            bg-red-50/40
            backdrop-blur-md
          "
        />

        {/* Fine grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16 text-center"
        >

          {/* Badge */}

          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-100
              bg-white/70
              px-5
              py-2.5
              text-red-600
              shadow-lg
              shadow-red-100/30
              backdrop-blur-xl
            "
          >
            <MapPin size={18} />

            <span className="font-semibold">
              Our Locations
            </span>

            
          </motion.div>


          {/* Heading */}

          <h2
            className="
              mt-7
              text-4xl
              font-black
              tracking-tight
              text-gray-900
              sm:text-5xl
              md:text-6xl
            "
          >
            Explore Premium{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Property Maps
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-gray-600
              sm:text-lg
            "
          >
            Browse detailed sector maps across Noida,
            Greater Noida and Yamuna Expressway.
          </p>

        </motion.div>


        {/* =================================================
            LOCATION CARDS
        ================================================= */}

        <div className="space-y-16">

          {locations.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              className="group"
            >

              {/* Outer card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[35px]
                  border
                  border-white/80
                  bg-white/65
                  shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                  backdrop-blur-2xl
                  transition-all
                  duration-700
                  hover:-translate-y-2
                  hover:shadow-[0_35px_100px_rgba(220,38,38,0.15)]
                "
              >

                {/* Card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/80
                    via-transparent
                    to-red-50/40
                    opacity-70
                  "
                />


                {/* Moving glass shine */}

                <motion.div
                  animate={{
                    x: ["-120%", "180%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    z-20
                    w-32
                    rotate-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/50
                    to-transparent
                    blur-xl
                  "
                />


                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  onClick={() => navigate(item.path)}
                  className="
                    group/image
                    relative
                    flex
                    min-h-[260px]
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    overflow-hidden
                    bg-gradient-to-br
                    from-gray-50
                    via-white
                    to-red-50/30
                    sm:min-h-[380px]
                    md:min-h-[500px]
                  "
                >

                  {/* Image background glow */}

                  <div
                    className="
                      absolute
                      inset-10
                      rounded-[40px]
                      bg-red-200/20
                      blur-[80px]
                    "
                  />


                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    initial={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.035,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      z-10
                      max-h-[260px]
                      max-w-[94%]
                      object-contain
                      drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]
                      sm:max-h-[380px]
                      md:max-h-[500px]
                      lg:max-w-[92%]
                    "
                  />


                  {/* Image bottom gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      z-20
                      h-32
                      bg-gradient-to-t
                      from-white/70
                      to-transparent
                    "
                  />


                  {/* Location floating badge */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                      absolute
                      left-5
                      top-5
                      z-30
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/80
                      bg-white/75
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-gray-800
                      shadow-lg
                      backdrop-blur-xl
                      sm:left-7
                      sm:top-7
                    "
                  >
                    <MapPin
                      size={16}
                      className="text-red-600"
                    />

                    {item.title}
                  </motion.div>

                </div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative z-30 p-7 sm:p-9 md:p-10">

                  <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

                    <div className="max-w-3xl">

                      {/* Small label */}

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-red-100
                          bg-red-50
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-red-600
                        "
                      >
                        <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />

                        {item.title}
                      </div>


                      {/* Title */}

                      <h3
                        className="
                          mt-5
                          text-3xl
                          font-black
                          tracking-tight
                          text-gray-900
                          sm:text-4xl
                        "
                      >
                        {item.title}{" "}
                        <span className="text-red-600">
                          Sector Maps
                        </span>
                      </h3>


                      {/* Description */}

                      <p
                        className="
                          mt-5
                          text-base
                          leading-8
                          text-gray-600
                          sm:text-lg
                        "
                      >
                        {item.description}
                      </p>

                    </div>


                    {/* Button */}

                    <div className="shrink-0">

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        onClick={() => navigate(item.path)}
                        className="
                          group/button
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          bg-gradient-to-r
                          from-[#DF1221]
                          to-[#f04444]
                          px-7
                          py-3.5
                          font-semibold
                          text-white
                          shadow-lg
                          shadow-red-500/20
                          transition-all
                          duration-300
                          hover:shadow-xl
                          hover:shadow-red-500/30
                        "
                      >

                        Explore Maps

                        <motion.span
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight size={18} />
                        </motion.span>

                      </motion.button>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}