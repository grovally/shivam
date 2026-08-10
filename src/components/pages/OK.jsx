import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Navigate, useNavigate, useNavigation } from 'react-router';

const noidaImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop',
];

export default function Maps() {
  const [currentNoida, setCurrentNoida] = useState(0);
  const navigate= useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNoida((prev) => (prev + 1) % noidaImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-10 overflow-hidden bg-transparent py-16 px-4 sm:px-6 lg:px-8 text-white">
 
      {/* Animated Background */}
           <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-20 md:h-32"
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
      
      
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] md:tracking-[8px] -mt-6 md:-mt-10 text-white font-semibold text-xs md:text-base">
  Premium Real Estate
</p>
          
          <h1 className=" text-5xl md:text-7xl font-bold text-white leading-tight">
            Explore
            <span className=" text-red-600">
              Noida Properties
            </span>
          </h1>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-white/80 leading-8">
            Verified premium residential and commercial projects with excellent
            connectivity, top developers, and high investment potential.
          </p>
        </motion.div>

        {/* Noida Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 lg:grid-cols-2 items-center mb-14"
        >
          {/* Text */}
          <div className="rounded-3xl border border-red-200 bg-white/20  backdrop-blur-xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 text-white font-semibold uppercase tracking-[4px]">
              <MapPin className='text-red-600' size={18} />
              Noida
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-red-600 leading-tight">
              Luxury Living in Noida
            </h2>

            <p className="mt-6 text-white/80 leading-8 text-lg">
              Explore 850+ verified premium projects, metro-connected sectors,
              luxury apartments, commercial towers, and high-ROI investment
              opportunities across Noida.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-red-100 bg-white/5 p-4">
                <p className="text-3xl font-black text-red-400">850+</p>
                <p className="text-sm text-white">Verified Projects</p>
              </div>

              <div className="rounded-2xl border border-red-100 bg-white/5 p-4">
                <p className="text-3xl font-black text-red-400">4.9★</p>
                <p className="text-sm text-white">Client Rating</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => navigate("/maps")} className="rounded-xl bg-gradient-to-r from-[#DF1221] to-[#BF101C] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                Explore Noida
              </button>

             
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-red-200 bg-white/20 shadow-2xl">
            {noidaImages.map((img, index) => (
              <motion.img
                key={img}
                src={img}
                alt="Noida property"
              className="absolute inset-0 h-full w-full object-cover object-center"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{
                  opacity: currentNoida === index ? 1 : 0,
                  scale: currentNoida === index ? 1 : 1.08,
                }}
                transition={{ duration: 0.9 }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[3px] text-red-300">
                  Featured
                </p>
                <h3 className="mt-1 text-2xl font-white">
                  Noida Luxury Residences
                </h3>
              </div>

              <div className="flex gap-2">
                {noidaImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentNoida(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentNoida === i ? 'w-8 bg-red-400' : 'w-2.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      

        {/* Divider for Part 2 */}
       
      </div>
    </section>
  );
}