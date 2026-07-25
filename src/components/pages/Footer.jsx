import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPhone,
} from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-[#05070d] via-black to-[#05070d] text-white pt-20 pb-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -80, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["Maps", "/maps"],
                ["Services", "/services"],
                ["Properties", "/properties"],
                ["Contact Us", "/contact"],
                ["About Us", "/about"],
              ].map(([name, path], i) => (
                <li key={i}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition"
                  >
                    <span className="h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-5"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Deals */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Deals
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                "Residential House",
                "Residential Land",
                "Villas",
                "Apartments",
                "Industrial Warehouse",
                "Industrial Land",
              ].map((item, i) => (
                <motion.li
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={i}
                  className="cursor-pointer hover:text-red-400"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Maps */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Locations
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                "Greater Noida",
                "Noida",
                "Delhi",
                "Mumbai",
              ].map((city, i) => (
                <motion.li
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={i}
                  className="cursor-pointer hover:text-red-400"
                >
                  {city}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Contact
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Find your dream property with Chhabra Properties.
            </p>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-cyan-500/20 p-3">
                  <MapPin className="text-cyan-400" size={20} />
                </div>

                <p className="text-sm text-gray-400 leading-6">
                  204, S L Tower, Alpha-I Commercial Belt,
                  Greater Noida,
                  Uttar Pradesh - 201308
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-cyan-500/20 p-3">
                  <Mail className="text-cyan-400" size={20} />
                </div>

                <p className="text-gray-400  leading-6">
                  info@chhabra-properties.com
                </p>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              {[
                FaWhatsapp,
                FaFacebookF,
                FaInstagram,
                FaXTwitter,
                FaPhone,
              ].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    y: -6,
                  }}
                  whileTap={{ scale: .9 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="h-12 w-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center cursor-pointer hover:border-cyan-400"
                >
                  <Icon className="text-lg text-white" />
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cyan-500 text-sm">
            © 2026 Chhabra Properties. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
  Designed with ❤️ by{" "}
  <a
    href="https://grovally.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-600  transition duration-300"
  >
    Grovally.com
  </a>
</p>
        </motion.div>

      </div>
    </motion.footer>
  );
}