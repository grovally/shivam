import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const locations = [
  {
    id: "noida",
    title: "Noida",
    path: "/noida",
    description:
      "Explore premium residential and commercial properties across Noida's fastest-growing sectors with excellent connectivity and modern infrastructure.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890796/SURAJPUR-SITE-IV_y9axjx.png",
  },

  {
    id: "greater-noida",
    title: "Greater Noida",
    path: "/greater-noida",
    description:
      "Discover spacious townships, luxury apartments, villas and investment opportunities in Greater Noida.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg",
  },

  {
    id: "yamuna-expressway",
    title: "Yamuna Expressway",
    path: "/yamuna-expressway",
    description:
      "Invest near Jewar Airport, Film City and upcoming industrial hubs with high growth potential.",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806936/SECTOR-20_POCKET-A_k6rxaz.jpg",
  },
];

export default function Maps() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* Background */}
      <div className="absolute -left-20 top-32 h-72 w-72  bg-red-200 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72  bg-orange-200 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-red-600 font-semibold">

            <MapPin size={18} />
            Our Locations

          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-gray-900">

            Explore Premium
            <span className="text-red-500"> Property Maps</span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

            Browse detailed sector maps across Noida,
            Greater Noida and Yamuna Expressway.

          </p>

        </motion.div>
                {locations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            className="mb-20"
          >
            <div className="overflow-hidden rounded-[32px] bg-white   transition-all duration-500">

              {/* IMAGE */}

              <div
  onClick={() => navigate(item.path)}
  className="group cursor-pointer overflow-hidden flex justify-center bg-white"
>
  <img
    src={item.image}
    alt={item.title}
    className="
      max-w-full
      h-[220px]
      md:h-[420px]
      lg:h-[520px]
      object-contain
      transition-transform
      duration-700
      
    "
  />
</div>


              {/* CONTENT */}

              <div className="p-8 md:p-10">

                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">

                  <MapPin size={16} />

                  {item.title}

                </span>

                <h3 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">

                  {item.title} Sector Maps

                </h3>

                <p className="mt-5 max-w-3xl text-gray-600 leading-8">

                  {item.description}

                </p>

                <button
                  onClick={() => navigate(item.path)}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#DF1221]
                    px-7
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#BF101C]
                  "
                >
                  Explore Maps

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}