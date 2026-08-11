
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
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1786428802/Untitled_design_3_okqcwe_ck8wr3.png"
          srcSet="
            https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_000/v1786428802/Untitled_design_3_okqcwe_ck8wr3.png 300w,
            https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_768/v1786428802/Untitled_design_3_okqcwe_ck8wr3.png 768w,
            https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1786428802/Untitled_design_3_okqcwe_ck8wr3.png 1200w
          "
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 100vw,
            1200px
          "
          alt="Chhabra Properties"
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center
            sm:object-center
          "
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 " />

        {/* Bottom gradient */}
        <div
          className="
            
            
          "
        />
      </div>

      {/* =====================================================
          RED AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-32
          z-[2]
          h-64
          w-64
          rounded-full
          bg-red-600/10
          blur-[100px]
          sm:-left-40
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          z-[2]
          h-64
          w-64
          rounded-full
          bg-red-500/10
          blur-[100px]
          sm:-right-40
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[140px]
        "
      />

      {/* =====================================================
          TOP RED WAVE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-[4]
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          className="
            block
            h-12
            w-full
            sm:h-20
            md:h-28
          "
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
          FLOATING LIGHTS
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
          z-[5]
          h-2
          w-2
          rounded-full
          bg-red-500
          shadow-[0_0_15px_rgba(239,68,68,0.7)]
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
          z-[5]
          h-2
          w-2
          rounded-full
          bg-red-400
          shadow-[0_0_20px_rgba(239,68,68,0.7)]
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
          pb-6
          pt-24
          sm:px-6
          sm:pb-8
          sm:pt-32
          lg:px-8
        "
      >
        {/* =====================================================
            HERO HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-16
          "
        >
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              mb-4
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-red-500/30
              bg-red-500/10
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-red-400
              backdrop-blur-md
              sm:px-4
              sm:py-2
              sm:text-xs
              sm:tracking-[0.25em]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                animate-pulse
                rounded-full
                bg-red-500
              "
            />

            Premium Real Estate
          </motion.div>

          {/* Heading */}

          <h2
            className="
              px-1
              text-2xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Let's Find Your{" "}
            <span className="text-red-500">
              Dream Property
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              px-2
              text-xs
              leading-6
              text-white/75
              sm:mt-5
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
            grid-cols-2
            gap-x-6
            gap-y-10
            sm:grid-cols-2
            sm:gap-8
            lg:grid-cols-4
            lg:gap-10
          "
        >
          {/* ===================================================
              COMPANY
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="min-w-0"
          >
            <h3
              className="
                mb-5
                text-lg
                font-bold
                text-red-500
                sm:text-xl
              "
            >
              Company
            </h3>

            <div className="space-y-3.5 sm:space-y-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="
                    group
                    flex
                    min-w-0
                    items-center
                    justify-between
                    gap-2
                    text-xs
                    text-white/70
                    transition-colors
                    hover:text-red-400
                    sm:text-sm
                  "
                >
                  <span className="truncate">
                    {item.name}
                  </span>

                  <ArrowRight
                    size={15}
                    className="
                      hidden
                      shrink-0
                      -translate-x-2
                      opacity-0
                      transition-all
                      duration-300
                      sm:block
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ===================================================
              PROPERTY DEALS
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="min-w-0"
          >
            <h3
              className="
                mb-5
                text-lg
                font-bold
                text-red-500
                sm:text-xl
              "
            >
              Property Deals
            </h3>

            <div className="space-y-3.5 sm:space-y-4">
              {deals.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    min-w-0
                    items-start
                    gap-2
                    text-xs
                    text-white/70
                    transition-colors
                    hover:text-red-400
                    sm:text-sm
                  "
                >
                  <span className="shrink-0 text-red-500">
                    •
                  </span>

                  <span className="leading-5">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===================================================
              LOCATIONS
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="min-w-0"
          >
            <h3
              className="
                mb-5
                text-lg
                font-bold
                text-red-500
                sm:text-xl
              "
            >
              Locations
            </h3>

            <div className="space-y-3.5 sm:space-y-4">
              {locations.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    min-w-0
                    items-start
                    gap-2.5
                    text-xs
                    text-white/70
                    transition-colors
                    hover:text-red-400
                    sm:gap-3
                    sm:text-sm
                  "
                >
                  <MapPin
                    size={16}
                    className="
                      mt-0.5
                      shrink-0
                      text-red-500
                    "
                  />

                  <span className="leading-5">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===================================================
              CONTACT
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="min-w-0"
          >
            <h3
              className="
                mb-5
                text-lg
                font-bold
                text-red-500
                sm:text-xl
              "
            >
              Contact
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {/* ADDRESS */}

              <a
                href="https://maps.google.com/?q=204,+S+L+Tower,+Alpha+1+Commercial+Belt,+Greater+Noida,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  min-w-0
                  items-start
                  gap-2.5
                  text-xs
                  text-white/70
                  transition-colors
                  hover:text-red-400
                  sm:gap-3
                  sm:text-sm
                "
              >
                <MapPin
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-red-500
                    transition
                    group-hover:scale-110
                  "
                />

                <span className="break-words leading-5">
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
                  min-w-0
                  items-center
                  gap-2.5
                  text-xs
                  text-white/70
                  transition-colors
                  hover:text-red-400
                  sm:gap-3
                  sm:text-sm
                "
              >
                <Mail
                  size={18}
                  className="
                    shrink-0
                    text-red-500
                  "
                />

                <span className="break-all">
                  info@cpgroup.in
                </span>
              </a>

              {/* PHONE */}

              <a
                href="tel:+916262626462"
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  text-xs
                  text-white/70
                  transition-colors
                  hover:text-red-400
                  sm:gap-3
                  sm:text-sm
                "
              >
                <FaPhone
                  className="shrink-0 text-red-500"
                  size={16}
                />

                <span>
                  +91 62626 26462
                </span>
              </a>
            </div>

            {/* SOCIAL ICONS */}

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              {socialLinks.map(
                ({ icon: Icon, url }, index) => (
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
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/15
                      bg-black/30
                      text-white/70
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-red-500/50
                      hover:bg-red-600
                      hover:text-white
                      hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]
                      sm:h-10
                      sm:w-10
                      sm:rounded-xl
                    "
                  >
                    <Icon className="text-sm sm:text-base" />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <div
          className="
            mt-10
            border-t
            border-white/15
            pt-6
            sm:mt-14
            sm:pt-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              text-center
              md:flex-row
              md:items-center
              md:justify-between
              md:text-left
            "
          >
            {/* COPYRIGHT */}

            <p
              className="
                text-[11px]
                leading-5
                text-white/60
                sm:text-sm
              "
            >
              © 2026 Chhabra Properties.
              <br className="sm:hidden" />{" "}
              All Rights Reserved.
            </p>

            {/* POLICIES */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-2
                text-[11px]
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

            <p
              className="
                text-[11px]
                text-white/60
                sm:text-sm
              "
            >
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

