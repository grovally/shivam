import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  Handshake,
  MapPinned,
  Wallet,
  Headphones,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    desc: "Every property is legally verified to ensure complete transparency and secure investment.",
  },
  {
    icon: Building2,
    title: "Trusted Developers",
    desc: "We partner with India's leading real estate developers to deliver premium projects.",
  },
  {
    icon: Wallet,
    title: "Best Investment",
    desc: "Get access to high ROI residential and commercial investment opportunities.",
  },
  {
    icon: MapPinned,
    title: "Prime Locations",
    desc: "Premium properties in Noida, Greater Noida and Yamuna Expressway.",
  },
  {
    icon: Handshake,
    title: "End-to-End Assistance",
    desc: "From site visit to documentation and registration, we assist you at every step.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Deals",
    desc: "No hidden charges. Honest pricing with complete documentation support.",
  },
  {
    icon: Users,
    title: "Expert Consultants",
    desc: "Experienced advisors help you choose the right property according to your budget.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Friendly customer support before and after your property purchase.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[160px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(189, 68, 94, 0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-black px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-red-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-black md:text-6xl">
            Your Trusted
            <span className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
              {" "}Real Estate Partner
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/95">
            We make buying and investing in real estate simple, transparent,
            and rewarding. From verified properties to trusted developers,
            our experts guide you at every step.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-black bg-white p-8 backdrop-blur-xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-red-600 to-yellow-400" />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-black-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="relative mt-6 text-2xl font-bold text-black">
                  {item.title}
                </h3>

                <p className="relative mt-4 leading-7 text-black-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Stats */}

        <div className="mt-24 grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-4">

          {[
            ["1000+", "Happy Clients"],
            ["500+", "Verified Properties"],
            ["50+", "Trusted Developers"],
            ["10+", "Years Experience"],
          ].map(([number, text], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl font-extrabold text-red-500">
                {number}
              </h3>

              <p className="mt-2 text-black-400">
                {text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}