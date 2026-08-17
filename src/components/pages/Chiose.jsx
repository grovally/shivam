
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
    <section className="relative overflow-hidden bg-transparent py-24">
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
      

      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      


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
              text-black
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
              text-black/80
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
                    to-red-600
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
                    via-red-500/50
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
                    text-black
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
                      text-black
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
                    text-black/80
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
                    text-black
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
            border-red-200
           
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
                    font-bold
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
                    text-black
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
              border-red-200
              
              px-5
              py-3
              shadow-sm
            "
          >

            <ShieldCheck
              size={18}
              className="text-red-600"
            />

            <span className="text-sm text-black">
              Trusted guidance from property search to possession
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

