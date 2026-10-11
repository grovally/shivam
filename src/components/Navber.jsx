
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Maps", path: "/maps" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    {name:'Blog',path:"/blog"}
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* Main Navbar */}
      <div className="mx-auto mt-3 max-w-7xl px-3 sm:px-5 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            relative
            rounded-2xl
            border
            border-white/10
            bg-black/90
            px-3
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl
            sm:rounded-3xl
            sm:px-5
          "
        >
          <div className="flex h-[64px] items-center justify-between sm:h-[76px]">
            
            {/* ================= LOGO ================= */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-2.5"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.2 }}
                className="
                  relative
                  h-10
                  w-10
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-lg
                  shadow-red-500/10
                  sm:h-12
                  sm:w-12
                "
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQGKkoxuHL4HGA/company-logo_200_200/company-logo_200_200/0/1630620425192?e=2147483647&v=beta&t=HygFAQdPRJS8y-bsqs8g_a3peCjiW0g3Z02pzKnCMGE"
                  alt="Chhabra Properties"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <div className="hidden xs:block sm:block">
                <h2 className="text-base font-black tracking-wide text-red-500 sm:text-xl">
                  CHHABRA
                </h2>

                <p className="-mt-1 text-[8px] font-medium tracking-[0.22em] text-white/80 sm:text-[10px]">
                  PROPERTIES
                </p>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((item) => {
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      relative
                      rounded-xl
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-red-500/10 text-red-500"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    {item.name}

                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-[2px]
                          w-5
                          -translate-x-1/2
                          rounded-full
                          bg-red-500
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ================= DESKTOP RIGHT ================= */}
            <div className="hidden items-center gap-4 lg:flex">
              
              {/* Phone */}
              <a
                href="tel:+916262626462"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  px-2
                  py-2
                  transition
                  hover:bg-white/5
                "
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10">
                  <Phone
                    size={17}
                    className="text-red-500 transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>

                <span className="text-sm font-bold text-white">
                  +91 6262626462
                </span>
              </a>

              {/* CTA */}
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-red-600
                  to-red-700
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-red-600/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-red-600/30
                "
              >
                Get Quote

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-white
                transition
                hover:bg-red-500/10
                hover:text-red-500
                lg:hidden
              "
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={23} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={23} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden lg:hidden"
              >
                <div className="border-t border-white/10 py-3">
                  
                  {/* Mobile Links */}
                  <div className="space-y-1">
                    {links.map((item, index) => {
                      const active = isActive(item.path);

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                          }}
                        >
                          <Link
                            to={item.path}
                            onClick={closeMenu}
                            className={`
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              px-4
                              py-3.5
                              text-sm
                              font-semibold
                              transition-all
                              duration-300
                              ${
                                active
                                  ? "bg-red-500/10 text-red-500"
                                  : "text-white/80 hover:bg-white/5 hover:text-white"
                              }
                            `}
                          >
                            <span>{item.name}</span>

                            {active && (
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile Phone */}
                  <a
                    href="tel:+916262626462"
                    onClick={closeMenu}
                    className="
                      mt-3
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-3.5
                    "
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10">
                      <Phone size={17} className="text-red-500" />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">
                        Call Us
                      </p>

                      <p className="text-sm font-bold text-white">
                        +91 6262626462
                      </p>
                    </div>
                  </a>

                  {/* Mobile CTA */}
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="
                      mt-3
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-red-600
                      to-red-700
                      px-5
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-red-600/20
                    "
                  >
                    Get Quote
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}

