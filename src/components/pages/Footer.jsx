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
    { name: "Greater Noida", path: "/greater-noida" },
    { name: "Noida", path: "/noida" },
    { name: "Yamuna Expressway", path: "/yamuna-expressway" },
  ];

  const socialLinks = [
    { icon: FaWhatsapp, url: "https://wa.me/916200072000" },
    { icon: FaFacebookF, url: "https://www.facebook.com/chhabrapropertiesofficial/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" },
    { icon: FaInstagram, url: "https://www.instagram.com/chhabrapropertiesofficial/" },
    { icon: FaYoutube, url: "https://youtube.com/@chhabrapropertiesofficial" },
    { icon: FaPhone, url: "tel:+916262626462" },
  ];

  const phoneNumbers = [
    { label: "Noida", number: "+91 62000 63000", href: "tel:+916200063000" },
    { label: "Noida Extension", number: "+91 62000 72000", href: "tel:+916200072000" },
    { label: "Gaur City", number: "+91 62626 26962", href: "tel:+916262626962" },
    { label: "Sikandrabad", number: "+91 62000 67000", href: "tel:+916200067000" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND IMAGE */}
      

      <div className="pointer-events-none absolute inset-0 z-[1]" />

      {/* TOP RED WAVE */}
      <div className="pointer-events-none absolute left-0 top-0 z-[3] w-full overflow-hidden leading-none">
        <svg
          className="block h-16 w-full sm:h-20 md:h-28"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerRedWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#450000" />
              <stop offset="35%" stopColor="#b91c1c" />
              <stop offset="65%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C120,35 240,45 360,55 C500,65 620,75 760,90 C900,105 1040,125 1200,155 L1200,0 L0,0 Z"
            fill="url(#footerRedWave)"
          />
        </svg>
      </div>

      {/* FLOATING RED LIGHTS */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[8%] top-[35%] z-[4] h-2 w-2 rounded-full bg-red-500"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[12%] top-[25%] z-[4] h-3 w-3 rounded-full bg-red-400"
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        {/* HERO HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-red-400 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            Premium Real Estate
          </motion.div>

          <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
  Let's Find Your{" "}
  <span className="text-red-500">Dream Property</span>
</h2>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            Chhabra Properties offers premium residential, commercial and
            industrial properties across Noida, Greater Noida and Yamuna
            Expressway.
          </p>
        </motion.div>

        {/* CONTENT GRID — mobile: 2 cols | desktop (lg+): 5 cols */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-3 sm:p-7"
          >
            <h3 className="mb-4 text-base font-bold text-red-500 sm:mb-6 sm:text-xl">
              Company
            </h3>
            <div className="space-y-2.5 sm:space-y-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center justify-between text-xs text-white/70 transition hover:text-red-400 sm:text-sm"
                >
                  <span>{item.name}</span>
                  <ArrowRight
                    size={16}
                    className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hidden sm:block"
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
            className="p-3 sm:p-6"
          >
            <h3 className="mb-4 text-base font-bold text-red-500 sm:mb-6 sm:text-xl">
              Property Deals
            </h3>
            <div className="space-y-2.5 sm:space-y-4">
              {deals.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="flex cursor-pointer items-center gap-2 text-xs text-white/70 transition hover:text-red-400 sm:text-sm"
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
            className="p-3 sm:p-6"
          >
            <h3 className="mb-4 text-base font-bold text-red-500 sm:mb-6 sm:text-xl">
              Locations
            </h3>
            <div className="space-y-2.5 sm:space-y-4">
              {locations.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center gap-2 text-xs text-white/70 transition hover:text-red-400 sm:gap-3 sm:text-sm"
                >
                  <MapPin size={15} className="shrink-0 text-red-500 sm:size-[17px]" />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CONTACT / HEAD OFFICE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-2 p-3 sm:col-span-1 sm:p-7"
          >
            <h3 className="mb-5 text-base font-bold text-red-500 sm:mb-6 sm:text-xl">
              Head office
            </h3>

            <div className="space-y-5">
              <a
                href="https://maps.google.com/?q=204,+S+L+Tower,+Alpha+1+Commercial+Belt,+Greater+Noida,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm leading-6 text-white/70 transition hover:text-red-400"
              >
                <MapPin size={20} className="mt-0.5 shrink-0 text-red-500" />
                <span>
                  204, S L Tower, Alpha-I Commercial Belt,
                  <br />
                  Greater Noida, Uttar Pradesh
                </span>
              </a>

              <a
                href="mailto:info@cpgroup.in"
                className="group flex items-center gap-3 text-sm text-white/70 transition hover:text-red-400"
              >
                <Mail size={20} className="shrink-0 text-red-500" />
                <span>info@cpgroup.in</span>
              </a>

              <a
                href="tel:+916262626462"
                className="group flex items-center gap-3 text-sm text-white/70 transition hover:text-red-400"
              >
                <FaPhone size={17} className="shrink-0 text-red-500" />
                <span className="flex flex-col leading-tight">
                  <strong className="text-white">ALPHA-I</strong>
                  <span className="text-white/70 group-hover:text-red-400">
                    +91 62626 26462
                  </span>
                </span>
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-7 border-t border-white/10 pt-5">
              <h4 className="mb-4 text-sm font-semibold text-white">Follow Us</h4>
              <div className="flex flex-wrap gap-1">
                {socialLinks.map(({ icon: Icon, url }, index) => {
                  const iconColor =
                    url.includes("wa.me")
                      ? "text-white hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10"
                      : url.includes("facebook")
                      ? "text-white hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10"
                      : url.includes("instagram")
                      ? "text-white hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10"
                      : url.includes("youtube")
                      ? "text-white hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10"
                      : "text-white hover:text-[#22C55E] hover:border-[#22C55E]/50 hover:bg-[#22C55E]/10";

                  return (
                    <motion.a
                      key={index}
                      href={url}
                      target={url.startsWith("tel:") ? undefined : "_blank"}
                      rel={url.startsWith("tel:") ? undefined : "noopener noreferrer"}
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex h-6 w-6 gap-2 items-center justify-center rounded-xl border border-white/15 bg-white/10 ${iconColor} transition-all duration-300`}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* OFFICE BRANCH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 p-3 sm:col-span-1 sm:p-6"
          >
            <h3 className="mb-4 text-base font-bold text-red-500 sm:mb-6 sm:text-xl">
              Offices Branch
            </h3>

            <div className="flex flex-col gap-3">
              {phoneNumbers.map(({ label, number, href }) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center gap-3 text-sm text-white/70 transition hover:text-red-400"
                >
                  <FaPhone size={17} className="shrink-0 text-red-500" />
                  <span className="flex flex-col leading-tight">
                    <strong className="text-white">{label}</strong>
                    <span className="text-white/70 group-hover:text-red-400">
                      {number}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="mt-12 border-t border-white/15 pt-7 sm:mt-16">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-xs text-white sm:text-sm">
              © 2026 Chhabra Properties.
              <br className="sm:hidden" /> All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white sm:gap-6 sm:text-sm">
              <Link to="/privacy" className="transition text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition text-white">
                Terms
              </Link>
              <Link to="/refund" className="transition text-white">
                Refund Policy
              </Link>
            </div>

            <p className="text-sm text-white sm:text-sm">
              Powered by{" "}
              <a
                href="https://grovally.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-red-800 transition hover:text-cyan-400"
              >
                Grovally Business Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
