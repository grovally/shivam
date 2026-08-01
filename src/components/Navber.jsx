import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Maps", path: "/maps" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
           <div className="
h-12
w-12
overflow-hidden
rounded-xl
bg-gradient-to-br
from-red-400
to-yellow-600
shadow-lg
">

  <img
    src="https://chhabra-properties.com/wp-content/uploads/2024/08/WhatsApp-Image-2025-12-15-at-11.35.11-AM-2-e1765779585870.jpeg"
    alt="Chhabra Properties"
    className="
    h-full
    w-full
    object-cover
    "
  />

</div>
            <div>
              <h2 className="text-xl font-bold tracking-wide text-white">
                CHHABRA
              </h2>

              <p className="-mt-1 text-xs tracking-[0.25em] text-red-600">
                PROPERTY
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-white font-medium transition duration-300 hover:text-red-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">

            <div className="flex items-center gap-2 text-white">
              <Phone size={18} className="text-red-400" />
              <span>+91  6262626462</span>
            </div>

            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-red-600 to-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 px-6 py-5">

          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 text-white transition hover:text-red-400"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-gradient-to-r from-red-600 to-yellow-400 py-3 text-center font-semibold text-black"
          >
            Get Quote
          </Link>

        </div>
      </div>
    </header>
  );
}