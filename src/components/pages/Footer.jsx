import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
} from "react-icons/fa6";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "Maps", path: "/maps" },
    { name: "Services", path: "/services" },
   
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const deals = [
    "Residential House",
    "Residential Land",
    "Luxury Villas",
    "Apartments",
    "Industrial Warehouse",
    "Industrial Land",
  ];

  const locations = [
    "Greater Noida",
    "Noida",
    "Yamuna Expressway",
   
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      url: "https://wa.me/91 6200072000",
    },
    {
      icon: FaFacebookF,
      url: "https://facebook.com",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/chhabrapropertiesofficial/",
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/@chhabrapropertiesofficial?si=10NcQlbbLOAtna_b",
    },
    {
      icon: FaPhone,
      url: "tel:+91 6262626462",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-[#061321] text-white"
    >
      {/* Top Gradient Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 via-red-500 to-blue-500 animate-pulse" />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -70, 80, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 100, 0],
            y: [0, 80, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Find Your
            <span className="block bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent mt-2">
              Dream Property
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Chhabra Properties offers premium residential,
            commercial and industrial properties across
            Noida, Greater Noida and Yamuna Expressway.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .1 }}
            whileHover={{ y: -10 }}
            className=" p-8 hover:border-cyan-400 transition"
          >

            <h3 className="text-2xl font-bold mb-8">
              Company
            </h3>

            <div className="space-y-5">

              {companyLinks.map((item, i) => (

                <Link
                  key={i}
                  to={item.path}
                  className="group flex items-center justify-between text-gray-300 hover:text-cyan-400 transition"
                >

                  <span>{item.name}</span>

                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition"
                  />

                </Link>

              ))}

            </div>

          </motion.div>

          {/* Deals */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            whileHover={{ y: -10 }}
            className=" p-8 hover:border-red-400 transition"
          >

            <h3 className="text-2xl font-bold mb-8">
              Property Deals
            </h3>

            <div className="space-y-5">

              {deals.map((item, i) => (

                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="text-gray-300 cursor-pointer hover:text-red-400"
                >
                  • {item}
                </motion.div>

              ))}

            </div>

          </motion.div>
                    {/* Locations */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10 }}
            className=" p-8 hover:border-green-400 transition"
          >
            <h3 className="text-2xl font-bold mb-8">
              Locations
            </h3>

            <div className="space-y-5">
              {locations.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-green-400"
                >
                  <MapPin size={18} />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="p-8 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            

           <div className="space-y-5">

  <a
    href="https://maps.google.com/?q=204,+S+L+Tower,+Alpha+1+Commercial+Belt,+Greater+Noida,+Uttar+Pradesh"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-4 hover:text-cyan-400 transition"
  >
    <MapPin className="mt-1 text-red-400 flex-shrink-0" size={22} />
    <span className="text-gray-300 hover:text-red-400 transition">
      204, S L Tower, Alpha-I Commercial Belt,
      <br />
      Greater Noida, Uttar Pradesh
    </span>
  </a>

  <a
    href="mailto:info@cpgroup.in"
    className="flex items-center gap-4 hover:text-cyan-400 transition"
  >
    <Mail className="text-red-400 flex-shrink-0" size={22} />
    <span className="text-gray-300">
      info@cpgroup.in
    </span>
  </a>

  <a
    href="tel:+916262626462"
    className="flex items-center gap-4 hover:text-cyan-400 transition"
  >
    <FaPhone className="text-red-400 flex-shrink-0" size={20} />
    <span className="text-gray-300">
      +91 62626 26462
    </span>
  </a>

</div>

            {/* Newsletter */}

            <div className="mt-8">

              <h4 className="font-semibold mb-4">
                Subscribe Newsletter
              </h4>

              

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              {socialLinks.map(({ icon: Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 12,
                    y: -6,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="h-8 w-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#DF1221] transition"
                >
                  <Icon className="text-white text-lg" />
                </motion.a>
              ))}

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="mt-20 border-t border-white/10 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-gray-400 text-center md:text-left">
              © 2026 Chhabra Properties. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm">

              <Link
                to="/privacy"
                className="hover:text-cyan-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-cyan-400 transition"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/refund"
                className="hover:text-cyan-400 transition"
              >
                Refund Policy
              </Link>

            </div>

            <p className="text-gray-500 text-sm">
              Designed by{" "}
              <a
                href="https://grovally.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-red-400 transition"
              >
                Grovally
              </a>
            </p>

          </div>

        </div>

      </div>
    </motion.footer>
  );
}