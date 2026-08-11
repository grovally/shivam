
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
      url: "https://youtube.com/@chhabrapropertiesofficial",
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
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          OPTIMIZED BACKGROUND IMAGE
      ===================================================== */}

     
<div className="absolute inset-0 z-0 overflow-hidden">
  <picture>

    {/* MOBILE */}
    <source
      media="(max-width: 640px)"
      srcSet="
        https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto:eco,w_300/v1786431926/Untitled_design_4_mqtk9s_1_jz36u4.png
      "
    />

    {/* TABLET */}
    <source
      media="(max-width: 1024px)"
      srcSet="
        https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto:eco,w_640/v1786428802/Untitled_design_3_okqcwe_ck8wr3.png
      "
    />

    {/* LAPTOP + DESKTOP */}
    <source
      srcSet="
        https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto:eco,w_1600/v1786428802/Untitled_design_3_okqcwe_ck8wr3.png
      "
    />

    {/* FALLBACK */}
    <img
      src="https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto:eco,w_30/v1786431926/Untitled_design_4_mqtk9s_1_jz36u4.png"
      alt="Chhabra Properties"

      loading="lazy"
      decoding="async"
      fetchPriority="low"
      className="
        h-full
        w-full
        object-cover
        object-[center_35%]
        sm:object-center
      "
    />

  </picture>
</div>


      {/* =====================================================
          LIGHT OVERLAY
          NO BLACK 30% OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          
        "
      />

      {/* =====================================================
          LIGHT RED AMBIENT GLOW
      ===================================================== */}

     

    

      {/* =====================================================
          TOP RED WAVE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-[3]
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          className="block h-16 w-full sm:h-20 md:h-28"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="footerRedWave"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#450000" />
              <stop offset="35%" stopColor="#b91c1c" />
              <stop offset="65%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#7f1d1d" />
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
            fill="url(#footerRedWave)"
          />
        </svg>
      </div>

      {/* =====================================================
          FLOATING RED LIGHTS
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[35%]
          z-[4]
          h-2
          w-2
          rounded-full
          bg-red-500
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[25%]
          z-[4]
          h-3
          w-3
          rounded-full
          bg-red-400
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          pb-8
          pt-28
          sm:px-6
          sm:pt-32
          lg:px-8
        "
      >
        {/* =====================================================
            HERO HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-500/30
              bg-red-500/10
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-red-400
              sm:text-xs
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            Premium Real Estate
          </motion.div>

          <h2
            className="
              whitespace-nowrap
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Let's Find Your{" "}
            <span className="text-red-500">
              Dream Property
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              px-2
              text-sm
              leading-7
              text-white/80
              sm:text-base
              sm:leading-8
            "
          >
            Chhabra Properties offers premium residential,
            commercial and industrial properties across
            Noida, Greater Noida and Yamuna Expressway.
          </p>
        </motion.div>

        {/* =====================================================
            CONTENT GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {/* COMPANY */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-7"
          >
            <h3 className="mb-6 text-xl font-bold text-red-500">
              Company
            </h3>

            <div className="space-y-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    text-sm
                    text-white/70
                    transition
                    hover:text-red-400
                  "
                >
                  <span>{item.name}</span>

                  <ArrowRight
                    size={16}
                    className="
                      -translate-x-2
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* PROPERTY DEALS */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6"
          >
            <h3 className="mb-6 text-xl font-bold text-red-500">
              Property Deals
            </h3>

            <div className="space-y-4">
              {deals.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-sm
                    text-white/70
                    transition
                    hover:text-red-400
                  "
                >
                  <span className="text-red-500">•</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LOCATIONS */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6"
          >
            <h3 className="mb-6 text-xl font-bold text-red-500">
              Locations
            </h3>

            <div className="space-y-4">
              {locations.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    text-sm
                    text-white/70
                    transition
                    hover:text-red-400
                  "
                >
                  <MapPin
                    size={17}
                    className="shrink-0 text-red-500"
                  />

                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 sm:p-7"
          >
            <h3 className="mb-6 text-xl font-bold text-red-500">
              Contact
            </h3>

            <div className="space-y-5">
              {/* ADDRESS */}

              <a
                href="https://maps.google.com/?q=204,+S+L+Tower,+Alpha+1+Commercial+Belt,+Greater+Noida,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/70
                  transition
                  hover:text-red-400
                "
              >
                <MapPin
                  size={20}
                  className="
                    mt-0.5
                    shrink-0
                    text-red-500
                  "
                />

                <span>
                  204, S L Tower, Alpha-I Commercial Belt,
                  <br />
                  Greater Noida, Uttar Pradesh
                </span>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:info@cpgroup.in"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-white/70
                  transition
                  hover:text-red-400
                "
              >
                <Mail
                  size={20}
                  className="shrink-0 text-red-500"
                />

                <span>info@cpgroup.in</span>
              </a>

              {/* PHONE */}

              <a
                href="tel:+916262626462"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-white/70
                  transition
                  hover:text-red-400
                "
              >
                <FaPhone
                  className="shrink-0 text-red-500"
                  size={18}
                />

                <span>+91 62626 26462</span>
              </a>
            </div>

            {/* SOCIAL ICONS */}

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target={
                    url.startsWith("tel:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    url.startsWith("tel:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/15
                    text-white/70
                    transition-all
                    duration-300
                    hover:border-red-500/50
                    hover:text-white
                  "
                >
                  <Icon className="text-base" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <div className="mt-12 border-t border-white/15 pt-7 sm:mt-16">
          <div
            className="
              flex
              flex-col
              gap-6
              text-center
              md:flex-row
              md:items-center
              md:justify-between
              md:text-left
            "
          >
            {/* COPYRIGHT */}

            <p className="text-xs text-white/60 sm:text-sm">
              © 2026 Chhabra Properties.
              <br className="sm:hidden" /> All Rights Reserved.
            </p>

            {/* POLICIES */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                text-xs
                text-white/60
                sm:gap-6
                sm:text-sm
              "
            >
              <Link
                to="/privacy"
                className="transition hover:text-red-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-red-400"
              >
                Terms
              </Link>

              <Link
                to="/refund"
                className="transition hover:text-red-400"
              >
                Refund Policy
              </Link>
            </div>

            {/* DESIGNED BY */}

            <p className="text-xs text-white/60 sm:text-sm">
              Designed by{" "}
              <a
                href="https://grovally.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-semibold
                  text-red-500
                  transition
                  hover:text-red-400
                "
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

