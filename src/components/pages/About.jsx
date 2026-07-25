import { motion } from "framer-motion";
import {Link} from "react-router-dom"

import {
  Building2,
  Target,
  Eye,
  Users,
  Award,
  Home,
} from "lucide-react";


export default function About() {
     

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "500+", label: "Properties Sold" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="relative overflow-hidden bg-white text-black">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-600/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-400 uppercase tracking-[4px] font-semibold">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl  text-red-500 font-bold mt-5">
            Your Trusted <span className="block  bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text text-transparent ">Real Estate Partner
              </span> 
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-black/45 text-lg leading-8">
            At <span className="text-black font-semibold">Chhabra Properties</span>,
            we help people buy, sell, and invest in real estate with confidence,
            transparency, and professional guidance.
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900"
              alt="Office"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            

            <p className="text-black/95  leading-8">
              Chhabra Properties simplifies property buying, 
              
              selling, and investing with transparent
               and trusted services across Delhi-NCR.
               Our mission is to redefine the real estate
                experience in Delhi-NCR by delivering honest
                 guidance, reliable expertise, and a commitment
                  to complete client satisfaction. With a skilled
                   team that understands the local market deeply,
                    we bring clarity and confidence to every property
                     transaction. For us, real estate is not just about
                      deals—it’s about trust, relationships, and helping
                       our clients make the right decisions for their future
                       Whether you’re buying your first home, selling a property, 
                       or exploring investment opportunities, our services are designed
                        to match your unique needs. We take pride in our transparency,
                         integrity, and personalized support at every step. From the first 
                         conversation to the final paperwork, Chhabra Properties ensures a
                          smooth, stress-free, and genuinely helpful real-estate experience.
            </p>
          </motion.div>

        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2  gap-8 mt-24">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-200">
  <Target className="mb-5 text-red-500" size={42} />
  <h3 className="text-2xl font-bold text-gray-900">
    Our Mission
  </h3>
  <p className="mt-4 leading-7 text-gray-600">
    To provide trustworthy, transparent, and customer-focused real estate
    services that create long-term value.
  </p>
</div>

        
        
           
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-200">
   <Eye className="text-red-400 mb-5" size={42} />
  <h3 className="text-2xl font-bold text-gray-900">
    Our Vision
  </h3>
  <p className="mt-4 leading-7 text-gray-600">
    To become one of India's most trusted real estate companies by
              delivering exceptional service and innovative solutions.
  </p>
</div>

        </div>

        {/* Stats */}
        
        {/* Why Choose Us */}
        <div className="mt-24">

          
          <div className="grid md:grid-cols-3  gap-8">

            <div className="rounded-3xl bg-white/5  rounded-3xl shadow-2xl border border-white/10 p-8">
              <Users className="text-red-400 mb-5" size={40} />
              <h3 className="text-2xl font-bold">Expert Team</h3>
              <p className="text-black/90 mt-4">
                Experienced professionals who understand the market and your needs.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-8">
              <Award className="text-red-400 mb-5" size={40} />
              <h3 className="text-2xl font-bold">Trusted Service</h3>
              <p className="text-black/90 mt-4">
                Honest advice, transparent deals, and long-lasting client relationships.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-8">
              <Home className="text-red-400 mb-5" size={40} />
              <h3 className="text-2xl font-bold">Wide Property Choice</h3>
              <p className="text-gray-400 mt-4">
                Residential, commercial, industrial, and investment properties.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
       <div className="mt-24 rounded-[32px] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-8 py-20 text-center shadow-2xl">

  <h2 className="text-5xl font-bold text-white">
    Let's Find Your Perfect Property
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-red-100">
    Whether you're buying, selling, or investing, our experts are here to
    guide you every step of the way.
  </p>

  <Link
    to="/contact"
    className="mt-10 inline-flex items-center rounded-full bg-white px-10 py-4 font-semibold text-red-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
  >
    Contact Us →
  </Link>

</div>

      </div>
    </section>
  );
}