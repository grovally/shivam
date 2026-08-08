import {
  Phone,
  MapPin,
  Navigation,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const offices = [
  {
    id: 1,
    title: "Greater Noida Office",
    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823324/gn_alf_1_qzbrno.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823324/gn_alf_2_svo00m.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823324/gn_alf_3_o7yi4r.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823325/gn_alf_4_vpmpil.jpg",
    ],

    address:
      "2nd floor, Chhabra Properties Pvt.Ltd, SL Tower, 204, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh 201310",

    phone: "+91 6262626462",

    whatsapp: "916262626462",

    description:
      "Get expert guidance for residential, commercial and investment properties in Greater Noida.",
  },

  {
    id: 2,
    title: "Noida Office",

    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823576/noi_1_m3xroz.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823576/noi_2_cbdsc7.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823577/noi_3_paaupo.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823577/noi_4_q6vig9.jpg",
    ],

    address:
      "Office No. 1434 & 1435, TOWER-B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201304",

    phone: "+91 6200063000",

    whatsapp: "916200063000",

    description:
      "Premium apartments, commercial spaces and luxury property solutions across Noida.",
  },

  {
    id: 3,
    title: "Noida Extension Office",

    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/v1785827022/extent_1_imemth.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/v1785827023/extention_2_lckyg9.jpg",
    ],

    address:
      "Office no.- 421 Tower - 3 Techzone - 4, Golden I, Tech Zone IV, Amrapali Leisure Valley, Greater Noida, Uttar Pradesh 201318",

    phone: "+91 6200072000",

    whatsapp: "916200072000",

    description:
      "Premium apartments, commercial spaces and luxury property solutions across Noida Extension.",
  },

  {
    id: 4,
    title: "Gaur Yamuna City Office",

    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823987/gaur_yamuna_1_wifqza.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823988/gaur_yamuna_2_l9vepv.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823988/gaur_yamuna_3_xo7p2f.jpg",
    ],

    address:
      "Office Number:-32 Second floor Lord krishna Mart, Gaur Yamuna City, Greater Noida, Uttar Pradesh 203201",

    phone: "+91 6262626962",

    whatsapp: "916262626962",

    description:
      "Affordable homes, luxury apartments and investment opportunities in Gaur Yemuna City.",
  },

  {
    id: 5,
    title: "Sikandrabad Office",

    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785824655/Sikndrabad_1_unvugu.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785824655/Sikndrabad_2_thoxuv.jpg",
    ],

    address:
      "A-19 Gopalpur, Sikandrabad, Uttar Pradesh 203206",

    phone: "+91 6200067000",

    whatsapp: "916200067000",

    description:
      "Plots, farmhouses and future investment projects Sikandrabad.",
  },
];

export default function Location() {
  const [currentIndexes, setCurrentIndexes] = useState(() =>
    offices.reduce(
      (acc, office) => ({
        ...acc,
        [office.id]: 0,
      }),
      {}
    )
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexes((prev) => {
        const next = { ...prev };

        offices.forEach((office) => {
          const length = office.images?.length || 1;

          next[office.id] =
            ((prev[office.id] || 0) + 1) % length;
        });

        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft red ambient glow */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -50, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-200/30
          blur-[140px]
        "
      />

      {/* Soft orange glow */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-200/30
          blur-[150px]
        "
      />

      {/* =========================================================
          FLOATING CRYSTAL 1
      ========================================================= */}

      <motion.div
        animate={{
          y: [0, -35, 0],
          rotate: [12, 18, 12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[8%]
          hidden
          h-40
          w-40
          rotate-12
          rounded-[35px]
          border
          border-white/80
          bg-gradient-to-br
          from-white/90
          via-red-50/50
          to-red-100/30
          shadow-[0_20px_80px_rgba(220,38,38,0.12)]
          backdrop-blur-xl
          md:block
        "
      >
        <div className="
          absolute
          inset-0
          rounded-[35px]
          bg-gradient-to-br
          from-white/80
          via-transparent
          to-red-100/40
        " />

        <div className="
          absolute
          left-5
          top-4
          h-20
          w-8
          rotate-12
          rounded-full
          bg-white/80
          blur-xl
        " />
      </motion.div>

      {/* =========================================================
          FLOATING CRYSTAL 2
      ========================================================= */}

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [-15, -8, -15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[28%]
          hidden
          h-52
          w-52
          -rotate-12
          rounded-[45px]
          border
          border-white/90
          bg-gradient-to-tr
          from-red-50/60
          via-white/80
          to-orange-50/50
          shadow-[0_20px_100px_rgba(239,68,68,0.14)]
          backdrop-blur-xl
          lg:block
        "
      >
        <div className="
          absolute
          inset-0
          rounded-[45px]
          bg-gradient-to-br
          from-white/80
          via-transparent
          to-red-100/30
        " />

        <div className="
          absolute
          right-8
          top-5
          h-24
          w-10
          -rotate-12
          rounded-full
          bg-white
          opacity-70
          blur-xl
        " />
      </motion.div>

      {/* =========================================================
          SMALL FLOATING CRYSTALS
      ========================================================= */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          right-[18%]
          top-[10%]
          h-10
          w-10
          rotate-45
          rounded-xl
          border
          border-red-200/70
          bg-white/70
          shadow-[0_0_30px_rgba(239,68,68,0.15)]
          backdrop-blur-md
        "
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[12%]
          h-12
          w-12
          rotate-45
          rounded-xl
          border
          border-orange-200/70
          bg-white/60
          shadow-[0_0_40px_rgba(249,115,22,0.12)]
          backdrop-blur-md
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-20 text-center"
        >

          <motion.span
            whileHover={{
              scale: 1.05,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-200
              bg-white/70
              px-5
              py-2.5
              text-sm
              font-semibold
              tracking-wide
              text-red-600
              shadow-lg
              shadow-red-100/50
              backdrop-blur-xl
            "
          >
            <MapPin size={17} />

            OUR BRANCH OFFICES
          </motion.span>

          <h1
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
            Visit{" "}
            <span className="
              bg-gradient-to-r
              from-red-600
              via-red-500
              to-orange-500
              bg-clip-text
              text-transparent
            ">
              Chhabra
            </span>{" "}
            Properties
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-gray-500
              sm:text-lg
            "
          >
            Connect with our property experts across multiple
            locations. Find your nearest office and get complete
            assistance.
          </p>

        </motion.div>

        {/* =========================================================
            OFFICES
        ========================================================= */}

        <div className="space-y-24">

          {offices.map((office, index) => (

            <motion.div
              key={office.id}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
              }}
              className={`
                grid
                items-center
                gap-10
                lg:grid-cols-2
                ${index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
                }
              `}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="group relative">

                {/* Outer crystal glow */}

                <div
                  className="
                    absolute
                    -inset-4
                    rounded-[45px]
                    bg-gradient-to-r
                    from-red-400/20
                    via-orange-300/10
                    to-red-400/20
                    opacity-0
                    blur-2xl
                    transition
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Image Card */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[38px]
                    border
                    border-white/80
                    bg-white/60
                    p-2
                    shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                  "
                >

                  <div className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                  ">

                    <motion.img
                      key={
                        office.images?.[
                          currentIndexes[office.id] ?? 0
                        ]
                      }
                      initial={{
                        opacity: 0,
                        scale: 1.08,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      src={
                        office.images?.[
                          currentIndexes[office.id] ?? 0
                        ]
                      }
                      alt={office.title}
                      className="
                        h-[330px]
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                        sm:h-[390px]
                        md:h-[450px]
                      "
                    />

                    {/* Image gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/55
                        via-transparent
                        to-white/10
                      "
                    />

                    {/* Crystal shine */}

                    <motion.div
                      animate={{
                        x: ["-120%", "120%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        w-24
                        rotate-12
                        bg-white/20
                        blur-xl
                      "
                    />

                    {/* Image label */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-full
                        border
                        border-white/30
                        bg-black/30
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                        backdrop-blur-xl
                      "
                    >
                      Chhabra Properties
                    </div>

                    {/* Image dots */}

                    <div
                      className="
                        absolute
                        bottom-6
                        right-5
                        flex
                        gap-1.5
                      "
                    >

                      {office.images.map((_, imageIndex) => (

                        <span
                          key={imageIndex}
                          className={`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-500
                            ${
                              imageIndex ===
                              (currentIndexes[office.id] ?? 0)
                                ? "w-6 bg-white"
                                : "w-1.5 bg-white/50"
                            }
                          `}
                        />

                      ))}

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  TEXT
              ================================================= */}

              <div>

                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-red-100
                    bg-red-50/80
                    px-4
                    py-2
                    text-xs
                    font-bold
                    tracking-[0.18em]
                    text-red-600
                  "
                >
                  PROPERTY CONSULTATION
                </span>

                <h2
                  className="
                    mt-5
                    text-3xl
                    font-black
                    tracking-tight
                    text-gray-900
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {office.title}
                </h2>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-base
                    leading-8
                    text-gray-500
                    sm:text-lg
                  "
                >
                  {office.description}
                </p>

                {/* DETAILS */}

                <div className="mt-8 space-y-4">

                  {/* ADDRESS */}

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-gray-100
                      bg-white/70
                      p-4
                      shadow-lg
                      shadow-gray-200/40
                      backdrop-blur-xl
                      transition
                    "
                  >

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-red-50/50
                        to-transparent
                        opacity-0
                        transition
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative flex gap-4">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-red-500
                          to-red-600
                          shadow-lg
                          shadow-red-200
                        "
                      >
                        <MapPin
                          size={21}
                          className="text-white"
                        />
                      </div>

                      <div>

                        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                          Office Address
                        </p>

                        <h4 className="mt-1 text-sm font-semibold leading-6 text-gray-800 sm:text-base">
                          {office.address}
                        </h4>

                      </div>

                    </div>

                  </motion.div>

                  {/* PHONE */}

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-gray-100
                      bg-white/70
                      p-4
                      shadow-lg
                      shadow-gray-200/40
                      backdrop-blur-xl
                      transition
                    "
                  >

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-green-50/60
                        to-transparent
                        opacity-0
                        transition
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative flex items-center gap-4">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-green-500
                          to-emerald-600
                          shadow-lg
                          shadow-green-200
                        "
                      >
                        <Phone
                          size={21}
                          className="text-white"
                        />
                      </div>

                      <div>

                        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                          Contact Number
                        </p>

                        <h4 className="mt-1 font-bold text-gray-800">
                          {office.phone}
                        </h4>

                      </div>

                    </div>

                  </motion.div>

                </div>

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                ">

                  {/* CALL */}

                  <motion.a
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    href={`tel:${office.phone}`}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-red-600
                      to-red-500
                      px-6
                      py-3.5
                      font-bold
                      text-white
                      shadow-lg
                      shadow-red-200
                      transition
                      hover:shadow-red-300
                    "
                  >
                    <Phone size={18} />

                    Call Now
                  </motion.a>

                  {/* WHATSAPP */}

                  <motion.a
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    href={`https://wa.me/${office.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#25D366]
                      px-6
                      py-3.5
                      font-bold
                      text-white
                      shadow-lg
                      shadow-green-200
                      transition
                      hover:bg-[#20bd5a]
                    "
                  >
                    <MessageCircle size={19} />

                    WhatsApp
                  </motion.a>

                  {/* MAP */}

                  

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}