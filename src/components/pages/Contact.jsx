import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  
  return (
    <section className="relative top-10 min-h-screen overflow-hidden bg-white text-black flex items-center justify-center px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-500/20 yellow-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
      >
        {/* Left */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-5xl  font-bold text-red-600  ">
            Let's Talk
          </h2>

          <p className="mt-5 text-black/95 font-bold">
            Have a question or  properties ? Fill out the form and our team will
            contact you shortly.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-red-500/20 p-3">
                <Phone className="text-red-400" />
              </div>
              <span className="text-black/95 font-bold">+91 6262626462</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-red-500/20 p-3">
                <Mail className="text-red-400" />
              </div>
              <span className="text-black/95 font-bold">
                Info@cpgroup.in
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-red-500/20 p-3">
                <MapPin className="text-red-400" />
              </div>
              <span className="text-black/95 hover:text-red-600 font-bold">
                204, S L TOWER, Alpha-I Commercial Belt, Block E, Alpha I, Greater Noida, Uttar Pradesh 201308
              </span>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="p-10 bg-white/5">

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-black/10 bg-red/10 px-5 py-4 text-black placeholder-gray-400 outline-none focus:border-red-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-black/10 bg-red/10 px-5 py-4 text-black placeholder-gray-400 outline-none focus:border-red-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-black/10 bg-red/10 px-5 py-4 text-black placeholder-gray-400 outline-none focus:border-red-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-black/10 bg-red/10 px-5 py-4 text-black placeholder-gray-400 outline-none focus:border-red-400"
            />
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-xl border border-black/10 bg-red/10 px-5 py-4 text-black placeholder-gray-400 outline-none focus:border-red-400"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-xl bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              <Send size={18} />
              Send Message
            </motion.button>

          </form>

        </div>
      </motion.div>
    </section>
  );
}