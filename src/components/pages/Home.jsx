import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const noidaImages = [
  "https://images.openai.com/static-rsc-4/OQ7GxqD__PCZjjlEb_1lLj3DtZP2X5OEfpUPirJ9fHAK3pvUGpyOwxlD8gdMujhgGf1Qs7C5uHrEYPE830gSuy9YX-u3yQ9q9U7gIDouTWSqhSEScLD1YLt3BJR98nbfqIj7y5RJ9h534CqLa_WRl-NHxSCniV0BZ0lb_7o20JbfUSsCS6gG9p1SwIJ65kxu?purpose=fullsize",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=80",
];

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % noidaImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-16 h-[60vh] sm:h-[72vh] lg:mt-20 lg:h-[calc(100vh-80px)] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={noidaImages[current]}
          alt="Property"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      <div className="absolute inset-0 z-10 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold tracking-wide text-white sm:px-4 sm:py-2 sm:text-sm">
              Premium Real Estate
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Find Your Dream
              <br />
              Home in <span className="text-red-500">Chhabra</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-100 sm:text-lg">
              Luxury Apartments • Villas • Commercial Spaces • Investment
              Opportunities across Noida, Greater Noida & Yamuna Expressway.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/maps")}
                className="btn btn-primary btn-mobile-full ui-transition"
              >
                Explore Properties
                <ArrowRight size={18} />
              </button>

              <a
                href="tel:6262626462"
                className="btn btn-primary btn-mobile-full ui-transition"
              >
                <Phone size={18} />
                Book Consultation
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-2 sm:justify-start">
              {noidaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full transition-all duration-300 ${
                    current === index
                      ? "h-2.5 w-8 bg-red-500"
                      : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}