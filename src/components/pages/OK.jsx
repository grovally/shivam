import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const noidaImages = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop',
];

export default function Maps() {
  const [currentNoida, setCurrentNoida] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNoida((prev) => (prev + 1) % noidaImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-red-500/20 blur-[140px] animate-pulse" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-red-500/20 blur-[140px] animate-pulse" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(205, 3, 16, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 19, 19, 0.18) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-400/50"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Moving light line */}
        <motion.div
          className="absolute left-0 top-1/3 h-[2px] w-full bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-40"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
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
          <p className="uppercase tracking-[8px] -mt-10 text-black font-semibold">
            Premium Real Estate
          </p>

          <h1 className="-mt-4 text-5xl md:text-7xl font-black leading-tight">
            Explore
            <span className="block bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text text-transparent">
              Noida Properties
            </span>
          </h1>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-black/40 leading-8">
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
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 text-red-600 font-semibold uppercase tracking-[4px]">
              <MapPin size={18} />
              Noida
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-black leading-tight">
              Luxury Living in Noida
            </h2>

            <p className="mt-6 text-black/50 leading-8 text-lg">
              Explore 850+ verified premium projects, metro-connected sectors,
              luxury apartments, commercial towers, and high-ROI investment
              opportunities across Noida.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-black text-red-400">850+</p>
                <p className="text-sm text-gray-400">Verified Projects</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-black text-red-400">4.9★</p>
                <p className="text-sm text-gray-400">Client Rating</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-red-600 to-yellow-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                Explore Noida
              </button>

             
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl">
            {noidaImages.map((img, index) => (
              <motion.img
                key={img}
                src={img}
                alt="Noida property"
                className="absolute inset-0 h-full w-full object-cover"
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
                <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                  Featured
                </p>
                <h3 className="mt-1 text-2xl font-black">
                  Noida Luxury Residences
                </h3>
              </div>

              <div className="flex gap-2">
                {noidaImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentNoida(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentNoida === i ? 'w-8 bg-cyan-400' : 'w-2.5 bg-white/40'
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