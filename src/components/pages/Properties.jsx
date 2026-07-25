import { motion } from "framer-motion";
import {
  BedDouble,
  Bath,
  MapPin,
  Square,
  ArrowRight,
} from "lucide-react";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
    title: "Luxury Villa",
    location: "Greater Noida",
    price: "₹2.5 Cr",
    beds: 4,
    baths: 4,
    area: "3500 Sq.ft",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
    title: "Modern Apartment",
    location: "Noida",
    price: "₹85 Lac",
    beds: 3,
    baths: 2,
    area: "1650 Sq.ft",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
    title: "Premium House",
    location: "Delhi",
    price: "₹1.45 Cr",
    beds: 5,
    baths: 4,
    area: "2800 Sq.ft",
  },
];

export default function Properties() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] py-24">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Properties
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Find Your Dream Property
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Explore premium residential, commercial, villas, apartments,
            industrial properties, and investment opportunities.
          </p>
        </motion.div>

        {/* Search */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 grid md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Location"
            className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white outline-none"
          />

          <select className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Commercial</option>
          </select>

          <select className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white">
            <option>Budget</option>
            <option>₹50L - ₹1Cr</option>
            <option>₹1Cr - ₹2Cr</option>
            <option>₹2Cr+</option>
          </select>

          <button className="rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition">
            Search
          </button>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {properties.map((property) => (
            <motion.div
              key={property.id}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {property.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 mt-3">
                  <MapPin size={18} />
                  {property.location}
                </div>

                <h4 className="text-cyan-400 text-3xl font-bold mt-5">
                  {property.price}
                </h4>

                <div className="flex justify-between mt-6 text-gray-300">

                  <div className="flex items-center gap-2">
                    <BedDouble size={18} />
                    {property.beds}
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    {property.baths}
                  </div>

                  <div className="flex items-center gap-2">
                    <Square size={18} />
                    {property.area}
                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-400 transition flex justify-center items-center gap-2">
                  View Details
                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Why Choose */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          <h2 className="text-4xl text-white font-bold text-center">
            Why Choose Our Properties?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div className="text-center">
              <h3 className="text-cyan-400 text-2xl font-bold">
                Prime Locations
              </h3>
              <p className="text-gray-400 mt-3">
                Carefully selected locations with high investment potential.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-cyan-400 text-2xl font-bold">
                Verified Listings
              </h3>
              <p className="text-gray-400 mt-3">
                Every property is verified for legal and ownership documents.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-cyan-400 text-2xl font-bold">
                Best Prices
              </h3>
              <p className="text-gray-400 mt-3">
                Competitive prices with complete transparency.
              </p>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-24">

          <h2 className="text-5xl font-bold text-white">
            Ready to Buy Your Dream Property?
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Contact our experts today and discover the perfect property for your family or investment.
          </p>

          <button className="mt-8 rounded-xl bg-red-500 px-8 py-4 text-white font-semibold hover:bg-cyan-400 transition">
            Contact Now
          </button>

        </div>

      </div>
    </section>
  );
}