
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";

const locations = [
  {
    id: "noida",
    title: "Noida",
    path: "/noida",
    description:
      "Chhabra Properties supplies an extensive Noida Map that illustrates an expanding and exciting city. The extensive map provides an understanding of the diversity of Noida's land use, while identifying the key commercial, residential, and industrial sectors of considerable interest to our customers who are seeking property options and are interested to learn more about Noida's complex city structure. Whether your search takes you to established sectors or emerging sectors, our Noida Map will quickly help you navigate the active real estate market in Noida. Increase your opportunities to secure advantageous locations with Chhabra Properties.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890507/SECTOR_-_49_eohwnd.png",
  },
  {
    id: "greater-noida",
    title: "Greater Noida",
    path: "/greater-noida",
    description:
      "At Chhabra Properties, we provide a detailed map of Greater Noida to help you navigate this growing city. Our sector-wise layouts provide clear views of residential, commercial and industrial zones, making it easier to find the best property. Whether you are looking for new developments or established communities, our map guides you through Greater Noida real estate. Find important locations and unlock the full potential of Greater Noida with Chhabra Properties.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890725/ALPHA-I_jytlco.png",
  },
  {
    id: "yamuna-expressway",
    title: "Yamuna Expressway",
    path: "/yamuna-expressway",
    description:
      "Chhabra Properties offers an in-depth map of the Yamuna Expressway Industrial Development Authority (YEIDA) to help you navigate this rapidly developing business area. Our maps show the area structure, highlighting commercial, residential, and industrial districts that will help you explore property opportunities. Whether you’re looking for new developments or established areas, our map can guide you through the YEIDA real estate landscape. Increase your investment opportunities by discovering promising locations with Chhabra Properties.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785231930/MP-_SECTOR-18-20_1_rrfu1g.png",
  },
];

export default function Maps() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-0
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rounded-full
            bg-red-500
            blur-[120px]
            sm:h-[450px]
            sm:w-[450px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-1/3
            h-[350px]
            w-[350px]
            rounded-full
            bg-red-500/[0.04]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-red-500/[0.04]
            blur-[100px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >

          {/* Badge */}

          <motion.div
            animate={{ y: [0, -4, 0] }}
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
              border-red-500/20
              bg-red-500/[0.06]
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-red-600
              sm:px-5
              sm:py-2.5
              sm:text-sm
            "
          >
            <MapPin size={16} />
            Our Locations
          </motion.div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-black
              sm:mt-7
              sm:text-5xl
              md:text-6xl
            "
          >
            Explore Premium
            <span className="block text-red-600">
              Property Maps
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-black/60
              sm:mt-6
              sm:text-base
              sm:leading-8
            "
          >
            Browse detailed sector maps across Noida,
            Greater Noida and Yamuna Expressway.
          </p>

          {/* =====================================================
              LOCATION PILLS
          ===================================================== */}

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">

            {locations.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => navigate(item.path)}
                className="
                  group
                  inline-flex
                  min-h-[44px]
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-black/10
                  bg-white
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-black
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-red-500
                  hover:bg-red-600
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]
                  sm:px-5
                  sm:text-sm
                "
              >
                <MapPin
                  size={15}
                  className="
                    text-red-600
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                />

                {item.title}
              </motion.button>
            ))}

          </div>
        </motion.div>

        {/* =====================================================
            LOCATION SECTIONS
        ===================================================== */}

        <div className="space-y-14 sm:space-y-20 lg:space-y-28">

          {locations.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className="group"
            >

              {/* =================================================
                  LOCATION TITLE
              ================================================= */}

              <div className="mb-5 flex items-center justify-between px-1 sm:mb-6">

                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-600">
                    <MapPin size={17} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                      Location 0{index + 1}
                    </p>

                    <h3 className="text-xl font-black text-black sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                </div>

               

              </div>

              {/* =================================================
                  IMAGE CARD
              ================================================= */}

              <motion.div
                onClick={() => navigate(item.path)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.995 }}
                className="
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  transition-shadow
                  duration-500
                  hover:shadow-[0_25px_70px_rgba(220,38,38,0.14)]
                  sm:rounded-3xl
                "
              >

                {/* Image wrapper */}

                <div
                  className="
                    relative
                    flex
                    min-h-[230px]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-white
                    p-3
                    sm:min-h-[350px]
                    sm:p-6
                    md:min-h-[470px]
                    lg:min-h-[550px]
                  "
                >

                  {/* Red glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-2/3
                      w-2/3
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-red-500/[0.05]
                      blur-[70px]
                    "
                  />

                  {/* Image */}

                  <motion.img
                    src={item.image}
                    alt={`${item.title} property map`}
                    loading="lazy"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.035 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      z-10
                      max-h-[230px]
                      w-full
                      object-contain
                      sm:max-h-[350px]
                      md:max-h-[470px]
                      lg:max-h-[540px]
                    "
                  />

                  {/* Hover overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      bg-gradient-to-t
                      from-black/10
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Explore floating button */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05 }}
                    className="
                      absolute
                      bottom-4
                      right-4
                      z-30
                      flex
                      h-11
                      items-center
                      gap-2
                      rounded-full
                      bg-red-600
                      px-4
                      text-xs
                      font-bold
                      text-white
                      opacity-0
                      shadow-xl
                      shadow-red-600/30
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      sm:bottom-6
                      sm:right-6
                      sm:h-12
                      sm:px-5
                      sm:text-sm
                    "
                  >
                    Explore
                    <ArrowUpRight size={16} />
                  </motion.div>

                </div>
              </motion.div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div className="mx-auto mt-5 max-w-4xl sm:mt-7">

                <p
                  className="
                    text-center
                    text-sm
                    leading-7
                    text-black/60
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {item.description}
                </p>

              </div>

              {/* =================================================
                  MOBILE/DESKTOP CTA
              ================================================= */}

              <div className="mt-5 flex justify-center sm:mt-6">

                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={() => navigate(item.path)}
                  className="
                    inline-flex
                    min-h-[46px]
                    items-center
                    gap-2
                    rounded-full
                    bg-red-600
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(220,38,38,0.2)]
                    transition-all
                    duration-300
                    hover:bg-red-700
                    hover:shadow-[0_15px_40px_rgba(220,38,38,0.3)]
                    sm:px-7
                  "
                >
                  Explore {item.title}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300"
                  />
                </motion.button>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

