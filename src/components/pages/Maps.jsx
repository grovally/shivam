import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "noida",
    title: "Noida",
    path: "/noida",
    description:
      `Chhabra Properties supplies an extensive Noida Map that illustrates an expanding and exciting city. The extensive map provides an understanding of the diversity of Noida's land use, while identifying the key commercial, residential, and industrial sectors of considerable interest to our customers who are seeking property options and are interested to learn more about Noida's complex city structure. Whether your search takes you to established sectors or emerging sectors, our Noida Map will quickly help you navigate the active real estate market in Noida. Increase your opportunities to secure advantageous locations with Chhabra Properties.`,
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890796/SURAJPUR-SITE-IV_y9axjx.png",
  },
  {
    id: "greater-noida",
    title: "Greater Noida",
    path: "/greater-noida",
    description:
      `At Chhabra Properties, we provide a detailed map of Greater Noida to help you navigate this growing city. Our sector-wise layouts provide clear views of clear views of residential, commercial and industrial zones, making it easier to find the best property. Whether you are looking for new developments or established communities, our map guides you through Greater Noida real estate. Find important locations and unlock the full potential of Greater Noida with Chhabra Properties.`,
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890725/ALPHA-I_jytlco.png",
  },
  {
    id: "yamuna-expressway",
    title: "Yamuna Expressway",
    path: "/yamuna-expressway",
    description:
      `Chhabra Properties offers an in-depth map of the Yamuna Expressway Industrial Development Authority (YEIDA) to help you navigate this rapidly developing business area. Our maps show the area structure, highlighting commercial, residential, and industrial districts that will help you explore property opportunities. Whether you’re looking for new developments or established areas, our map can guide you through the YEIDA real estate landscape. Increase your investment opportunities by discovering promising locations with Chhabra Properties.`,
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785231930/MP-_SECTOR-18-20_1_rrfu1g.png",
  },
];

export default function Maps() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-20">

      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft red glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-red-500/10
            blur-[120px]
          "
        />

        {/* Orange glow */}
        <div
          className="
            absolute
            -right-40
            top-40
            h-96
            w-96
            rounded-full
            bg-orange-500/10
            blur-[120px]
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-red-500/5
            blur-[150px]
          "
        />

        {/* Floating Crystal 1 */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[5%]
            top-[15%]
            h-24
            w-24
            rotate-45
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        />

        {/* Floating Crystal 2 */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[5%]
            top-[35%]
            h-32
            w-32
            rotate-45
            rounded-[35px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        />

        {/* Small Crystal 1 */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[20%]
            left-[15%]
            h-12
            w-12
            rotate-45
            rounded-xl
            border
            border-red-500/10
            bg-red-500/5
          "
        />

        {/* Small Crystal 2 */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[15%]
            right-[15%]
            h-16
            w-16
            rotate-45
            rounded-2xl
            border
            border-orange-500/10
            bg-orange-500/5
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
              border-red-500/20
              bg-white/10
              px-5
              py-2.5
              text-red-500
              shadow-lg
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
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Explore Premium{" "}
            <span className="text-red-600">
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
              text-white/60
              sm:text-lg
            "
          >
            Browse detailed sector maps across Noida,
            Greater Noida and Yamuna Expressway.
          </p>

          {/* =================================================
              3 LOCATION BUTTONS
          ================================================= */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            {locations.map((item) => (

              <motion.button
                key={item.id}
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
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-red-500
                  hover:bg-red-600
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-red-500/20
                "
              >

                <MapPin
                  size={16}
                  className="
                    text-red-500
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

        {/* =================================================
            LOCATION IMAGES
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
            >

              {/* Image Container */}

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
                  
                  
                  
                 
                  sm:min-h-[380px]
                  md:min-h-[500px]
                "
              >

                {/* Background Glow */}

                <div
                  className="
                    absolute
                    inset-10
                    rounded-[40px]
                    bg-red-500/5
                    blur-[80px]
                  "
                />

                {/* Image */}

                <motion.img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  initial={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    z-10
                    max-h-[290px]
                    max-w-[94%]
                    object-contain
                    transition-transform
                    duration-700
                    sm:max-h-[380px]
                    md:max-h-[500px]
                    lg:max-w-[92%]
                  "
                />

                {/* Hover Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    bg-gradient-to-t
                    from-white/5
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover/image:opacity-100
                  "
                />

                {/* Location Badge */}

                
                  

              </div>

              {/* =================================================
                  ONLY DESCRIPTION BELOW IMAGE
              ================================================= */}

              <p
                className="
                  mx-auto
                  mt-5
                  rounded-full
                  
                  max-w-3xl
                  text-center
                  text-base
                  leading-7
                  text-white/60
                  sm:text-sm
                "
              >
                {item.description}
              </p>
              <div className="mt-6 flex justify-center">
  <motion.button
    whileHover={{
      scale: 1.05,
      y: -2,
    }}
    whileTap={{
      scale: 0.96,
    }}
    onClick={() => navigate(item.path)}
    className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-red-600
      px-7
      py-3
      text-sm
      font-semibold
      text-white
      shadow-lg
      shadow-red-600/30
      transition-all
      duration-300
      hover:bg-red-700
      hover:shadow-xl
      hover:shadow-red-600/40
    "
  >
    Explore
  </motion.button>
</div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}