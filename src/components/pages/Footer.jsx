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
      url: "https://wa.me/916200072000", 
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
      url: "tel:+916262626462",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-transparent py-16"
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-20 md:h-28"
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
  Let's Find Your{" "}
  <span className="text-red-600 ml-3">
    Dream Property
  </span>
</h2>


          

          <p className="text-white/80 max-w-2xl mx-auto mt-6 leading-8">
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
            className=" p-8 hover:border-red-400 transition"
          >

            <h3 className="text-2xl text-red-600 font-bold mb-8">
              Company
            </h3>

            <div className="space-y-5">

              {companyLinks.map((item, i) => (

                <Link
                  key={i}
                  to={item.path}
                  className="group flex items-center justify-between text-gray-300 hover:text-red-400 transition"
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

            <h3 className="text-2xl  text-red-600  font-bold mb-8">
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
            className=" p-8 hover:border-red-400 transition"
          >
            <h3 className="text-2xl text-red-600 font-bold mb-8">
              Locations
            </h3>

            <div className="space-y-5">
              {locations.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-red-400"
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
            className="p-8 hover:border-red-400 transition"
          >
            <h3 className="text-2xl text-red-600 font-bold mb-6">
              Contact
            </h3>

            

           <div className="space-y-5">

  <a
    href="https://maps.google.com/?q=204,+S+L+Tower,+Alpha+1+Commercial+Belt,+Greater+Noida,+Uttar+Pradesh"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-4 hover:text-red-400 transition"
  >
    <MapPin className="mt-1 text-red-400 flex-shrink-0" size={22} />
    <span className=" hover:text-red-400 transition">
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
    <span className="">
      info@cpgroup.in
    </span>
  </a>

  <a
    href="tel:+916262626462"
    className="flex items-center gap-4 hover:text-red-400 transition"
  >
    <FaPhone className="text-red-400 flex-shrink-0" size={20} />
    <span className="">
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