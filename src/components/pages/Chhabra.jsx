
import {
  UserRound,
  MapPin,
  FileCheck,
  KeyRound,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Chhabra() {
  const steps = [
    {
      number: "01",
      title: "Share Requirements",
      desc: "Tell us your budget, preferred location and property type.",
      icon: UserRound,
    },
    {
      number: "02",
      title: "Free Site Visit",
      desc: "We arrange personalised visits to carefully shortlisted properties.",
      icon: MapPin,
    },
    {
      number: "03",
      title: "Documentation",
      desc: "Our team verifies documents and assists you with the complete paperwork.",
      icon: FileCheck,
    },
    {
      number: "04",
      title: "Possession",
      desc: "From registry and mutation to final handover, we stay with you.",
      icon: KeyRound,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24 px-4 sm:px-6 lg:px-8">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main red glow */}
        <div
          className="
            absolute
            -top-40
            left-[10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-red-100/40
            blur-[150px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            right-[5%]
            w-[550px]
            h-[550px]
            rounded-full
            bg-gray-200/50
            blur-[150px]
          "
        />

        {/* Crystal 1 */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [35, 40, 35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[12%]
            right-[5%]
            w-36
            h-36
            rotate-[35deg]
            rounded-[35px]
            border
            border-white
            bg-gradient-to-br
            from-white
            via-white/40
            to-red-50/30
            shadow-[0_30px_80px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
          "
        />

        {/* Crystal 2 */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [-20, -15, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[10%]
            left-[4%]
            w-24
            h-24
            rounded-[25px]
            border
            border-white
            bg-white/70
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-red-100
              shadow-sm
              mb-5
            "
          >

            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-red-600
              "
            >
              Simple Process
            </span>

          </motion.div>


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              text-gray-900
            "
          >
            Your Property
            <span className="block text-red-600">
              Journey
            </span>
          </motion.h2>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="
              mt-5
              text-gray-500
              text-sm
              sm:text-base
              leading-7
            "
          >
            A simple, transparent and personalised process
            designed to make your property experience effortless.
          </motion.p>

        </div>


        {/* =====================================================
            DESKTOP TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Center line */}

          <div
            className="
              hidden
              lg:block
              absolute
              left-1/2
              top-10
              bottom-10
              w-px
              bg-gradient-to-b
              from-transparent
              via-red-200
              to-transparent
              -translate-x-1/2
            "
          />

          {/* Animated center glow */}

          <motion.div
            animate={{
              top: ["5%", "90%", "5%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              hidden
              lg:block
              absolute
              left-1/2
              w-1
              h-20
              rounded-full
              bg-red-500
              blur-sm
              -translate-x-1/2
              z-20
            "
          />


          <div className="space-y-10 lg:space-y-0">

            {steps.map((item, index) => {

              const Icon = item.icon;

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className="
                    relative
                    lg:grid
                    lg:grid-cols-2
                    lg:min-h-[230px]
                    items-center
                  "
                >

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className={`
                      ${
                        isLeft
                          ? "lg:pr-20"
                          : "lg:col-start-2 lg:pl-20"
                      }
                    `}
                  >

                    <motion.div
                      whileHover={{
                        y: -8,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[30px]
                        bg-white/80
                        backdrop-blur-2xl
                        border
                        border-white
                        shadow-[0_20px_70px_rgba(0,0,0,0.07)]
                        hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-500
                      "
                    >

                      {/* Glass gradient */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-white
                          via-white/60
                          to-red-50/30
                          opacity-80
                        "
                      />


                      {/* Card content */}

                      <div className="relative z-10 p-7 sm:p-8">

                        <div className="flex items-start justify-between gap-5">

                          {/* Number */}

                          <div>

                            <span
                              className="
                                text-xs
                                font-bold
                                tracking-[0.3em]
                                text-red-500
                              "
                            >
                              STEP {item.number}
                            </span>

                            <h3
                              className="
                                mt-3
                                text-xl
                                sm:text-2xl
                                font-bold
                                text-gray-900
                                group-hover:text-red-600
                                transition-colors
                              "
                            >
                              {item.title}
                            </h3>

                          </div>


                          {/* Icon */}

                          <div
                            className="
                              shrink-0
                              w-14
                              h-14
                              rounded-2xl
                              bg-gray-50
                              border
                              border-gray-100
                              flex
                              items-center
                              justify-center
                              group-hover:bg-red-600
                              group-hover:border-red-600
                              transition-all
                              duration-500
                            "
                          >

                            <Icon
                              size={25}
                              strokeWidth={1.8}
                              className="
                                text-red-600
                                group-hover:text-white
                                transition-colors
                              "
                            />

                          </div>

                        </div>


                        <p
                          className="
                            mt-5
                            max-w-md
                            text-sm
                            leading-6
                            text-gray-500
                          "
                        >
                          {item.desc}
                        </p>


                        {/* Bottom action */}

                        <div
                          className="
                            mt-6
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            text-gray-400
                            group-hover:text-red-600
                            transition-colors
                          "
                        >

                          <span>
                            Next Step
                          </span>

                          <ArrowRight
                            size={15}
                            className="
                              group-hover:translate-x-1
                              transition-transform
                            "
                          />

                        </div>

                      </div>


                      {/* Shine */}

                      <div
                        className="
                          absolute
                          top-0
                          -left-[120%]
                          w-[60%]
                          h-full
                          skew-x-[-20deg]
                          bg-gradient-to-r
                          from-transparent
                          via-white/70
                          to-transparent
                          group-hover:left-[150%]
                          transition-all
                          duration-[1200ms]
                          pointer-events-none
                        "
                      />

                    </motion.div>

                  </div>


                  {/* =================================================
                      CENTER CRYSTAL NUMBER
                  ================================================= */}

                  <div
                    className="
                      hidden
                      lg:flex
                      absolute
                      left-1/2
                      -translate-x-1/2
                      items-center
                      justify-center
                      z-30
                    "
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: 45,
                      }}
                      className="
                        relative
                        w-20
                        h-20
                        rotate-45
                        rounded-[22px]
                        bg-white/90
                        border
                        border-red-100
                        shadow-[0_15px_50px_rgba(220,38,38,0.15)]
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                      "
                    >

                      <div className="-rotate-45 text-center">

                        <span
                          className="
                            text-xl
                            font-black
                            text-red-600
                          "
                        >
                          {item.number}
                        </span>

                      </div>

                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-16
            text-center
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              border
              border-gray-200
              px-5
              py-3
              shadow-sm
            "
          >

            <span
              className="
                w-8
                h-8
                rounded-full
                bg-red-600
                flex
                items-center
                justify-center
                text-white
                text-xs
                font-bold
              "
            >
              ✓
            </span>

            <span className="text-sm text-gray-600">
              We stay with you at every step.
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

