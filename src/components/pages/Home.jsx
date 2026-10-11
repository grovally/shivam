
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const noidaImages = [
  "https://images.openai.com/static-rsc-4/OQ7GxqD__PCZjjlEb_1lLj3DtZP2X5OEfpUPirJ9fHAK3pvUGpyOwxlD8gdMujhgGf1Qs7C5uHrEYPE830gSuy9YX-u3yQ9q9U7gIDouTWSqhSEScLD1YLt3BJR98nbfqIj7y5RJ9h534CqLa_WRl-NHxSCniV0BZ0lb_7o20JbfUSsCS6gG9p1SwIJ65kxu?purpose=fullsize",

  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",

  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",

  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",

  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",

  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=80",
];

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % noidaImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        min-h-[100dvh]
        w-full
        overflow-hidden
      "
    >
      {/* =====================================================
          FULL SCREEN IMAGE BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={noidaImages[current]}
            alt="Premium Property"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 5,
                ease: "linear",
              },
            }}
          />
        </AnimatePresence>
      </div>

      {/* =====================================================
          IMAGE DARKNESS
          Very subtle for text readability
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/15
          to-black/20
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 flex min-h-[100dvh] items-end">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            pb-8
            pt-28
            sm:px-6
            sm:pb-12
            sm:pt-32
            lg:px-8
            lg:pb-16
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            {/* =================================================
                BADGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-red-400/40
                bg-black/30
                px-3
                py-1.5
                text-xs
                font-semibold
                tracking-wide
                text-white
                backdrop-blur-md
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-red-500
                  shadow-[0_0_12px_rgba(239,68,68,0.9)]
                "
              />

              Premium Real Estate
            </motion.div>

            {/* =================================================
                HEADING
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="
                max-w-3xl
                text-[2.2rem]
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Find Your Dream

              <span className="block">
                Home in{" "}
                <span className="text-red-500">
                  Chhabra Properties
                </span>
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-white
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
                sm:mt-5
                sm:text-base
                sm:leading-7
                lg:text-lg
              "
            >
              Luxury Apartments • Villas • Commercial Spaces •
              Investment Opportunities across Noida, Greater
              Noida & Yamuna Expressway.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-3
                sm:mt-8
                sm:w-auto
                sm:flex-row
              "
            >
              {/* EXPLORE */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => navigate("/maps")}
                className="
                  group
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(220,38,38,0.35)]
                  transition-all
                  duration-300
                  hover:bg-red-500
                  hover:shadow-[0_15px_40px_rgba(220,38,38,0.5)]
                  sm:w-auto
                "
              >
                Explore Properties

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              {/* CONSULTATION */}

              <motion.a
                href="tel:+916262626462"
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/40
                  bg-black/30
                  px-7
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-red-400
                  hover:bg-red-600
                  sm:w-auto
                "
              >
                <Phone
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />

                Book Consultation
              </motion.a>
            </motion.div>

            {/* =================================================
                LOCATION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.65,
                duration: 0.6,
              }}
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-2
                text-xs
                font-medium
                text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                sm:text-sm
              "
            >
              <MapPin
                size={16}
                className="shrink-0 text-red-500"
              />

              <span>
                Noida • Greater Noida • Yamuna Expressway
              </span>
            </motion.div>

            {/* =================================================
                SLIDER INDICATORS
            ================================================= */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-2
              "
            >
              {noidaImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  animate={{
                    width: current === index ? 36 : 7,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    relative
                    h-1.5
                    overflow-hidden
                    rounded-full
                    bg-white/40
                  "
                >
                  {current === index && (
                    <motion.span
                      layoutId="activeHeroSlider"
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-red-500
                        shadow-[0_0_10px_rgba(239,68,68,0.8)]
                      "
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

