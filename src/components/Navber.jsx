import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
     { name: "Maps", path: "/maps" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    {
      name: "Gallery",path:"/gallery"
    }
  ];
    
  
   
  

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
           <div className="h-10 w-12 sm:h-15 sm:w-18 overflow-hidden rounded-lg bg-gradient-to-br from-red-400 to-yellow-600 shadow-lg">

  <img
    src="https://media.licdn.com/dms/image/v2/C4E0BAQGKkoxuHL4HGA/company-logo_200_200/company-logo_200_200/0/1630620425192?e=2147483647&v=beta&t=HygFAQdPRJS8y-bsqs8g_a3peCjiW0g3Z02pzKnCMGE"
    alt="Chhabra Properties"
    className="
    h-full
    w-full
    object-cover
    "
  />

</div>
            <div className="hidden sm:block">
              <h2 className="text-xl font-bold tracking-wide text-red-700">
                CHHABRA
              </h2>

              <p className="-mt-1 text-xs tracking-[0.25em] text-white">
                PROPERTY
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
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
          <div className="hidden lg:flex items-center gap-4">

            <div className="flex items-center gap-2 text-white">
              <Phone size={18} className=" text-2xl text-red-400" />
              <span className=" font-bold text-sm">+91 6262626462</span>
            </div>

            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-[#DF1221] to-[#BF101C] px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white transition hover:scale-105"
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
            className="mt-6 block rounded-full bg-gradient-to-r from-[#DF1221] to-[#BF101C] py-3 text-center font-semibold text-white"
          >
            Get Quote
          </Link>

        </div>
      </div>
    </header>
  );
}