import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {
  Home,
  BadgeDollarSign,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: <BadgeDollarSign size={42} />,
    title: "Sell Your Property",
    description:
      "Get the best value for your property with our expert guidance, strategic marketing, and a hassle-free selling process.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Home size={42} />,
    title: "Buy Real Estate",
    description:
      "Discover residential, commercial, and investment properties that perfectly match your budget and lifestyle.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <Building2 size={42} />,
    title: "Real Estate Consulting",
    description:
      "Professional guidance for buying, selling, investing, legal documentation, and market analysis.",
    color: "from-purple-500 to-pink-600",
  },
];

export default function Services() {
  const Navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-white text-black py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-500/40 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-red-400 font-semibold tracking-widest uppercase">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-black mt-4">
            Complete <span className="   text-red-600 ">  Real Estate Solutions</span>
          </h2>

          <p className="text-black/95 mt-6 max-w-3xl mx-auto text-lg">
            Whether you're buying, selling, or investing, we provide expert
            real estate services designed to help you make confident decisions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-black/20  backdrop-blur-xl p-8"
            >
              <motion.div
  whileHover={{ rotate: 360, scale: 1.15 }}
  transition={{ duration: 0.8 }}
  className={`inline-flex rounded-2xl bg-gradient-to-r ${service.color} p-5 text-white`}
>
  {service.icon}
</motion.div>

              <h3 className="text-2xl font-bold text-red-600 mt-6">
                {service.title}
              </h3>

              <p className="text-black/95 mt-4 leading-7">
                {service.description}
              </p>

              <button onClick={() =>Navigate('/contact')} className="mt-8 flex items-center gap-2 text-red-400 font-semibold group-hover:gap-4 transition-all">
                Learn More
                <ArrowRight className="text-black" size={18} />
              </button>
            </motion.div>
          ))}

        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-black/20  backdrop-blur-xl p-10"
        >
          <h2 className="text-4xl font-bold text-black mb-8 text-center">
            Why Choose <span className=" text-red-600">  Chhabra Properties?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Trusted Real Estate Experts",
              "100% Transparent Process",
              "Legal Documentation Support",
              "Best Market Price",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-red-400" />
                <span className="text-black">{item}</span>
              </div>
            ))}

          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-5xl font-bold text-black">
            Ready to Find Your Dream Property?
          </h2>

          <p className="text-black/95 mt-6 text-lg">
            Contact our experts today and let us help you buy, sell, or invest
            with confidence.
          </p>
          <Link
    to="/contact"
    className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-yellow-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)]"
  >
    Contact Us
  </Link>

         
        </motion.div>

      </div>
    </section>
  );
}