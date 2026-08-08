
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  Handshake,
  MapPinned,
  Wallet,
  Headphones,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    desc: "Every property is legally verified to ensure complete transparency and secure investment.",
  },
  {
    icon: Building2,
    title: "Trusted Developers",
    desc: "We partner with India's leading real estate developers to deliver premium projects.",
  },
  {
    icon: Wallet,
    title: "Best Investment",
    desc: "Get access to high ROI residential and commercial investment opportunities.",
  },
  {
    icon: MapPinned,
    title: "Prime Locations",
    desc: "Premium properties in Noida, Greater Noida and Yamuna Expressway.",
  },
  {
    icon: Handshake,
    title: "End-to-End Assistance",
    desc: "From site visit to documentation and registration, we assist you at every step.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Deals",
    desc: "No hidden charges. Honest pricing with complete documentation support.",
  },
  {
    icon: Users,
    title: "Expert Consultants",
    desc: "Experienced advisors help you choose the right property according to your budget.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Friendly customer support before and after your property purchase.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Red ambient glow */}
        <div
          className="
            absolute
            -top-40
            left-[-100px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-red-100/50
            blur-[150px]
          "
        />

        {/* Gray ambient glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            right-[-100px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-gray-100
            blur-[160px]
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-red-50/50
            blur-[140px]
          "
        />


        {/* =================================================
            FLOATING CRYSTALS
        ================================================= */}

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [20, 35, 20],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[15%]
            right-[4%]
            w-36
            h-36
            rotate-45
            rounded-[35px]
            border
            border-white
            bg-gradient-to-br
            from-white
            via-gray-100/60
            to-red-50/40
            shadow-[0_25px_80px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
          "
        />


        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [-15, -25, -15],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[18%]
            left-[3%]
            w-28
            h-28
            rounded-[30px]
            border
            border-gray-100
            bg-white/70
            shadow-[0_20px_60px_rgba(0,0,0,0.07)]
            backdrop-blur-xl
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center max-w-3xl mx-auto"
        >

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-100
              bg-white
              px-5
              py-2.5
              shadow-sm
            "
          >

            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-red-600
              "
            >
              Why Choose Us
            </span>

          </div>


          {/* Heading */}

          <h2
            className="
              mt-7
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              text-gray-900
            "
          >
            Your Trusted

            <span className="block text-red-600">
              Real Estate Partner
            </span>
          </h2>


          <p
            className="
              mt-6
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              text-gray-500
            "
          >
            We make buying and investing in real estate simple,
            transparent and rewarding. From verified properties
            to trusted developers, our experts guide you at
            every step.
          </p>

        </motion.div>


        {/* =====================================================
            FEATURE GRID
        ===================================================== */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -12,
                }}
                className="
                  group
                  relative
                  min-h-[290px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-gray-200
                  bg-white/80
                  p-7
                  backdrop-blur-xl
                  shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                  hover:border-red-200
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-500
                "
              >

                {/* =================================================
                    CARD GLASS
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white
                    via-transparent
                    to-red-50/40
                    opacity-70
                  "
                />


                {/* =================================================
                    TOP SHINE
                ================================================= */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-red-400
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />


                {/* =================================================
                    NUMBER
                ================================================= */}

                <span
                  className="
                    absolute
                    top-6
                    right-7
                    text-xs
                    font-bold
                    tracking-widest
                    text-gray-200
                    group-hover:text-red-200
                    transition-colors
                  "
                >
                  0{index + 1}
                </span>


                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-red-100
                    bg-gradient-to-br
                    from-red-600
                    to-red-500
                    shadow-lg
                    shadow-red-500/20
                    group-hover:scale-110
                    group-hover:rotate-3
                    transition-all
                    duration-500
                  "
                >

                  <Icon
                    className="
                      h-7
                      w-7
                      text-white
                    "
                    strokeWidth={1.8}
                  />

                </div>


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    relative
                    z-10
                    mt-7
                    text-xl
                    font-bold
                    text-gray-900
                    group-hover:text-red-600
                    transition-colors
                  "
                >
                  {item.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    relative
                    z-10
                    mt-4
                    text-sm
                    leading-6
                    text-gray-500
                  "
                >
                  {item.desc}
                </p>


                {/* =================================================
                    BOTTOM GLOW
                ================================================= */}

                <div
                  className="
                    absolute
                    -bottom-16
                    -right-16
                    h-36
                    w-36
                    rounded-full
                    bg-red-100
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />


                {/* =================================================
                    MOVING GLASS SHINE
                ================================================= */}

                <div
                  className="
                    absolute
                    top-0
                    -left-[120%]
                    h-full
                    w-[50%]
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
            );
          })}

        </div>


        {/* =====================================================
            STATS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[35px]
            border
            border-gray-200
            bg-white/70
            backdrop-blur-2xl
            shadow-[0_20px_70px_rgba(0,0,0,0.07)]
          "
        >

          {/* Red glass line */}

          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-1
              bg-gradient-to-r
              from-transparent
              via-red-600
              to-transparent
            "
          />


          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
            "
          >

            {[
              ["1000+", "Happy Clients"],
              ["500+", "Verified Properties"],
              ["50+", "Trusted Developers"],
              ["10+", "Years Experience"],
            ].map(([number, text], index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                className="
                  relative
                  p-8
                  sm:p-10
                  text-center
                  border-b
                  md:border-b-0
                  border-gray-100
                  last:border-0
                "
              >

                <h3
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    text-red-600
                  "
                >
                  {number}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    font-medium
                    text-gray-500
                  "
                >
                  {text}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>


        {/* =====================================================
            TRUST MESSAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            flex
            justify-center
            mt-10
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-gray-200
              bg-white
              px-5
              py-3
              shadow-sm
            "
          >

            <ShieldCheck
              size={18}
              className="text-red-600"
            />

            <span className="text-sm text-gray-500">
              Trusted guidance from property search to possession
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

