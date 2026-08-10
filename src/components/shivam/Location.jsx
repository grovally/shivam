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
    <section className="relative mt-10 overflow-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft red ambient glow */}
      

      {/* Soft orange glow */}
      

      {/* =========================================================
          FLOATING CRYSTAL 1
      ========================================================= */}

     

      {/* =========================================================
          FLOATING CRYSTAL 2
      ========================================================= */}

     

      {/* =========================================================
          SMALL FLOATING CRYSTALS
      ========================================================= */}

      

     

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
              text-white
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
              text-white/75
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
                    via--300/1red0
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
                        
                      "
                    />

                    {/* Image label */}

                   

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
                                : "w-1.5 bg-white/5"
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
                    text-red-600
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
                    text-white/80
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

                        <p className="text-xs font-medium uppercase tracking-wider text-red-400">
                          Office Address
                        </p>

                        <h4 className="mt-1 text-sm font-semibold leading-6 text-red-800 sm:text-base">
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
                        from-red-500
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
                      shadow-red-200
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
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-20 md:h-32"
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

    </section>
  );
}