import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Users,
  Award,
  Home,
  ShieldCheck,
  Zap,
  Trophy,
  ArrowRight,
} from "lucide-react";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Happy Clients" },
  { number: "500+", label: "Properties Sold" },
  { number: "24/7", label: "Customer Support" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    text: "We give you the real picture — market prices, property status, and legal clarity — with zero sugarcoating.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "No hidden fees. No surprise charges. Every step of your property journey is completely open and clear.",
  },
  {
    icon: Zap,
    title: "Speed",
    text: "We respond quickly and move fast on opportunities, so you never miss the right property at the right price.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    text: "From site visit to registry, every touchpoint is handled with care, professionalism, and attention to detail.",
  },
];

const milestones = [
  {
    year: "01",
    title: "Year 1 — Foundation",
    text: "Chhabra Properties established in Greater Noida",
    desc: "It started with a vision to bring honest and transparent property dealing to the Greater Noida market. Began with residential plot consultancy and local property broking.",
  },
  {
    year: "02",
    title: "Early Years — Growth",
    text: "Expanded to Yamuna Expressway & YEIDA plots",
    desc: "Recognised the growing demand for YEIDA authority plots and became a dedicated property consultancy serving Greater Noida clients.",
  },
  {
    year: "03",
    title: "Mid Journey — Recognition",
    text: "Moved to Tradex Tower II, Alpha-I — Our Current Office",
    desc: "Established a full-service office at Tradex Tower II — one of Greater Noida's prominent commercial addresses — to better serve our growing client base.",
  },
  {
    year: "04",
    title: "Recent — Digital Presence",
    text: "Google Rating: 4.9/5",
    desc: "Built a strong digital presence among Greater Noida property dealers with verified reviews, an active website, and a consistent online presence.",
  },
  {
    year: "05",
    title: "Now — The Mission Continues",
    text: "Working towards being the #1 Property Dealer in Greater Noida",
    desc: "Every day we serve new clients, build new relationships, and work toward becoming the first choice for property buyers and sellers across Greater Noida NCR.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white text-black">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[280px] w-[280px] rounded-full bg-red-500/20 blur-[110px] sm:h-[400px] sm:w-[400px] sm:blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
            opacity: [0.06, 0.13, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[40%] h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[120px] sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-[200px] w-[320px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[100px] sm:h-[300px] sm:w-[500px] sm:blur-[120px]"
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">

        {/* =====================================================
            HERO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-red-600 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600 sm:h-2 sm:w-2" />
            About Chhabra Properties
          </motion.div>

          <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-black sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Your Trusted
            <span className="block text-red-600">
              Real Estate Partner
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-black/60 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            At{" "}
            <span className="font-bold text-red-600">
              Chhabra Properties
            </span>
            , we help people buy, sell and invest in real estate with
            confidence, transparency and professional guidance.
          </p>
        </motion.div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-red-100 bg-white p-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-red-300 hover:shadow-[0_15px_40px_rgba(220,38,38,0.08)] sm:rounded-3xl sm:p-6"
            >
              <div className="text-xl font-black text-red-600 sm:text-4xl">
                {stat.number}
              </div>
              <div className="mt-1.5 text-[10px] font-semibold text-black/50 sm:mt-2 sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            STORY
        ===================================================== */}

        <div className="mt-16 grid items-center gap-8 lg:mt-28 lg:grid-cols-2 lg:gap-14">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-xl sm:rounded-3xl"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
              alt="Chhabra Properties Office"
              loading="lazy"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7 }}
              className="h-[220px] w-full object-cover sm:h-[400px] lg:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-black/50 px-3 py-2 text-white backdrop-blur-xl sm:bottom-5 sm:left-5 sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[10px] uppercase tracking-widest text-red-400 sm:text-xs">
                Our Story
              </p>
              <p className="mt-0.5 text-sm font-bold sm:mt-1 sm:text-base">
                Built on Trust
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight text-black sm:mt-4 sm:text-4xl">
              Real Estate
              <span className="text-red-600"> With Purpose.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-black/60 sm:mt-6 sm:text-base sm:leading-8">
              Chhabra Properties simplifies property buying, selling and
              investing across Delhi-NCR. Our mission is to redefine the
              real estate experience through honest guidance, reliable
              expertise and complete client satisfaction.
            </p>

            <p className="mt-3 text-sm leading-6 text-black/60 sm:mt-4 sm:text-base sm:leading-8">
              Whether you are buying your first home, selling a property
              or exploring investment opportunities, our team provides
              personalised support from the first conversation to the
              final paperwork.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all duration-300 hover:bg-red-500 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)] sm:mt-7 sm:w-auto"
            >
              Talk With Our Team
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            MISSION / VISION
        ===================================================== */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-28">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide trustworthy, transparent and customer-focused real estate services that create long-term value.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become one of India's most trusted real estate companies through exceptional service and innovative solutions.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-red-100 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-red-300 hover:shadow-[0_20px_60px_rgba(220,38,38,0.08)] sm:rounded-3xl sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:h-12 sm:w-12">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-xl font-bold text-black sm:mt-5 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-black/60 sm:mt-3 sm:text-base sm:leading-7">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}

        <div className="mt-20 lg:mt-32">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-2xl font-black text-black sm:mt-4 sm:text-5xl">
              A Better Way To
              <span className="text-red-600"> Find Property</span>
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Expert Team",
                text: "Experienced professionals who understand the market and your needs.",
              },
              {
                icon: Award,
                title: "Trusted Service",
                text: "Honest advice, transparent deals and long-lasting relationships.",
              },
              {
                icon: Home,
                title: "Wide Property Choice",
                text: "Residential, commercial, industrial and investment properties.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="rounded-2xl border border-red-100 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-red-300 hover:shadow-[0_20px_50px_rgba(220,38,38,0.08)] sm:rounded-3xl sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:h-12 sm:w-12">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-black sm:mt-5 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-black/55 sm:mt-3 sm:leading-7">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CORE VALUES
        ===================================================== */}

        <div className="mt-20 lg:mt-32">

          <div className="mb-8 text-center sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              What We Stand For
            </p>

            <h2 className="mt-3 text-2xl font-black text-black sm:mt-4 sm:text-5xl">
              Our<span className="text-red-600"> Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl border border-red-100 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.035)] transition-all duration-300 hover:border-red-300 hover:shadow-[0_20px_50px_rgba(220,38,38,0.08)] sm:rounded-3xl sm:p-7"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:h-14 sm:w-14"
                  >
                    <Icon size={22} />
                  </motion.div>

                  <h3 className="mt-4 text-base font-bold text-red-600 sm:mt-6 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-black/55 sm:mt-3 sm:text-sm sm:leading-7">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            JOURNEY / TIMELINE
        ===================================================== */}

        <div className="mt-20 lg:mt-32">

          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Our Journey
            </p>

            <h2 className="mt-3 text-2xl font-black text-black sm:mt-4 sm:text-5xl">
              Milestones<span className="text-red-600"> That Shaped Us</span>
            </h2>
          </div>

          <div className="relative">

            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-500 to-transparent md:block" />

            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-transparent via-red-500/70 to-transparent md:hidden" />

            <div className="space-y-6 md:space-y-12">

              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >

                  <div className="w-full pl-9 md:w-[calc(50%-45px)] md:pl-0">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="rounded-2xl border border-red-100 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-red-300 hover:shadow-[0_20px_50px_rgba(220,38,38,0.08)] sm:rounded-3xl sm:p-7"
                    >
                      <div className="text-[11px] font-black uppercase tracking-[0.2em] text-red-600 sm:text-xs">
                        {item.year}
                      </div>

                      <h3 className="mt-2 text-lg font-bold text-black sm:mt-3 sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-xs font-semibold text-red-600 sm:mt-2 sm:text-sm">
                        {item.text}
                      </p>

                      <p className="mt-2.5 text-xs leading-5 text-black/55 sm:mt-3 sm:text-sm sm:leading-7">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 top-5 flex h-7 w-7 items-center justify-center rounded-full border border-red-500/40 bg-white shadow-[0_0_20px_rgba(239,68,68,0.25)] md:static md:mx-6 md:h-10 md:w-10 md:shrink-0"
                  >
                    <span className="h-2 w-2 rounded-full bg-red-500 sm:h-2.5 sm:w-2.5" />
                  </motion.div>

                  <div className="hidden md:block md:w-[calc(50%-45px)]" />

                </motion.div>
              ))}

            </div>
          </div>
        </div>

        {/* =====================================================
            FEATURE STRIP (image + copy)
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-6 overflow-hidden rounded-2xl border border-red-100 bg-white px-5 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:px-8 sm:py-10 md:flex-row md:items-center md:gap-12 md:px-12 md:py-14 lg:mt-32"
        >

          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1786614980/GROUP_INDIA_1_1_ntxivk.png"
              alt="Chhabra Properties premium developments"
              loading="lazy"
              className="h-56 w-full rounded-xl object-cover sm:h-80 sm:rounded-2xl md:h-[420px]"
            />
          </div>

          <div className="w-full text-center md:w-1/2 md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Premium Developments
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight text-black sm:mt-4 sm:text-3xl lg:text-4xl">
              Homes Built For
              <span className="text-red-600"> A Better Life</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/60 sm:mt-4 sm:text-base sm:leading-8">
              From elegant gated apartments to spacious villas across Noida,
              Greater Noida and the Yamuna Expressway — every project we
              recommend is vetted for legal clarity, construction quality
              and long-term investment value.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all duration-300 hover:bg-red-500 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)] sm:w-auto"
            >
              Explore Properties
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

        </motion.div>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-white p-6 text-center shadow-[0_20px_60px_rgba(220,38,38,0.06)] sm:mt-24 sm:rounded-3xl sm:p-10 lg:mt-32 lg:p-14"
        >

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-red-500/10 blur-[100px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Ready To Start?
            </p>

            <h2 className="mt-3 text-2xl font-black text-black sm:mt-4 sm:text-5xl">
              Let's Find Your
              <span className="text-red-600"> Dream Property</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/55 sm:mt-4 sm:text-base sm:leading-7">
              Tell us what you're looking for and our team will help you
              find the right property.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all duration-300 hover:bg-red-500 hover:shadow-[0_15px_40px_rgba(220,38,38,0.3)] sm:mt-7 sm:w-auto"
            >
              Contact Us
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

      </div>

    </section>
  );
}