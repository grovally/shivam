
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import {
  Home,
  BadgeDollarSign,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";


const services = [
  {
    icon: <Home size={28} />,
    title: "Sell Your Property",
    description:
      "Get the best value for your property with our expert guidance, strategic marketing, and a hassle-free selling process.",
    color: "from-green-500 to-emerald-600",
  },

  {
    icon: <Building2 size={28} />,
    title: "Buy Real Estate",
    description:
      "Discover residential, commercial, and investment properties that perfectly match your budget and lifestyle.",
    color: "from-cyan-500 to-blue-600",
  },

  {
    icon: <BadgeDollarSign size={28} />,
    title: "Real Estate Consulting",
    description:
      "Professional guidance for buying, selling, investing, legal documentation, and market analysis.",
    color: "from-purple-500 to-pink-600",
  },
];


export default function Services() {

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">

      {/* =====================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />


      {/* =====================================
          MAIN CONTAINER
      ====================================== */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* =====================================
            HEADING
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <p className="text-red-400 font-semibold tracking-widest uppercase">
            Our Services
          </p>


          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">

            Complete{" "}

            <span className="text-red-500">
              Real Estate Solutions
            </span>

          </h2>


          <p className="text-black/70 mt-6 max-w-3xl mx-auto text-lg leading-8">

            Whether you're buying, selling, or investing, we provide expert
            real estate services designed to help you make confident decisions.

          </p>

        </motion.div>



        {/* =====================================
            SERVICE CARDS
        ====================================== */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 70,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              whileHover={{
                y: -10,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              className="
                group
                rounded-3xl
                border
                border-red-200/40
                bg-black/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:border-red-400
                hover:shadow-[0_0_35px_rgba(239,68,68,0.15)]
              "
            >


              {/* ICON */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}

                transition={{
                  duration: 0.8,
                }}

                className={`
                  inline-flex
                  rounded-2xl
                  bg-gradient-to-r
                  ${service.color}
                  p-5
                  text-black
                  shadow-lg
                `}
              >

                {service.icon}

              </motion.div>



              {/* TITLE */}

              <h3 className="
                text-2xl
                font-bold
                text-red-500
                mt-6
              ">

                {service.title}

              </h3>



              {/* DESCRIPTION */}

              <p className="
                text-black/70
                mt-4
                leading-7
              ">

                {service.description}

              </p>



              {/* LEARN MORE */}

              <button
                onClick={() => navigate("/contact")}

                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-red-400
                  font-semibold
                  group-hover:gap-4
                  transition-all
                "
              >

                Learn More

                <ArrowRight
                  className="text-red-400"
                  size={18}
                />

              </button>

            </motion.div>

          ))}

        </div>



        {/* =====================================
            WHY CHOOSE US
        ====================================== */}

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
            duration: 0.7,
          }}

          className="
            mt-24
            rounded-3xl
            border
            border-red-200/40
            
            backdrop-blur-xl
            p-10
            hover:border-red-400/60
            transition-all
          "
        >

          <h2 className="
            text-3xl
            md:text-4xl
            font-bold
            text-black
            mb-8
            text-center
          ">

            Why Choose{" "}

            <span className="text-red-500">
              Chhabra Properties?
            </span>

          </h2>



          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          ">

            {[
              "Trusted Real Estate Experts",
              "100% Transparent Process",
              "Legal Documentation Support",
              "Best Market Price",
            ].map((item, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.1,
                }}

                className="
                  flex
                  items-center
                  gap-3
                  text-black/80
                "
              >

                <CheckCircle
                  className="text-red-400 shrink-0"
                  size={20}
                />

                <span>
                  {item}
                </span>

              </motion.div>

            ))}

          </div>

        </motion.div>



        {/* =====================================
            CTA
        ====================================== */}

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
            duration: 0.7,
          }}

          className="mt-24 text-center"
        >

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-black
          ">

            Ready to Find Your{" "}

            <span className="text-red-500">
              Dream Property?
            </span>

          </h2>



          <p className="
            text-black/70
            mt-6
            text-lg
            max-w-2xl
            mx-auto
            leading-8
          ">

            Contact our experts today and let us help you buy, sell,
            or invest with confidence.

          </p>



          <Link
            to="/contact"

            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#DF1221]
              to-[#BF101C]
              px-8
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]
            "
          >

            Contact Us

          </Link>

        </motion.div>

      </div>

    </section>
  );
}

