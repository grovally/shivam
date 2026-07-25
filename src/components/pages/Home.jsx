
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const noidaImages = [
  'https://images.openai.com/static-rsc-4/OQ7GxqD__PCZjjlEb_1lLj3DtZP2X5OEfpUPirJ9fHAK3pvUGpyOwxlD8gdMujhgGf1Qs7C5uHrEYPE830gSuy9YX-u3yQ9q9U7gIDouTWSqhSEScLD1YLt3BJR98nbfqIj7y5RJ9h534CqLa_WRl-NHxSCniV0BZ0lb_7o20JbfUSsCS6gG9p1SwIJ65kxu?purpose=fullsize',
  

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
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-20 h-[calc(100vh-80px)] overflow-hidden">

      {/* Image Slider */}
      {noidaImages.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Property ${index + 1}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1 : 1.08,
          }}
          transition={{ duration: 0.8 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 pb-12">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
              Premium Real Estate
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
              Find Your Dream Home in Chhabra
            </h1>

            <p className="mt-5 text-lg text-gray-200">
              Luxury Apartments • Villas • Commercial Spaces • Investment
              Opportunities
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/maps")}
                className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Explore Properties
                <ArrowRight size={20} />
              </button>

              <a
                href="tel:6262626462"
                className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
              >
                <Phone size={18} />
                Book Consultation
              </a>
            </div>

            {/* Slider Dots */}
            <div className="mt-10 flex gap-3">
              {noidaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all ${
                    current === index
                      ? "w-10 bg-red-500"
                      : "w-3 bg-white/50 hover:bg-white"
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