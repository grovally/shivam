import React from "react";
import { useNavigate } from "react-router-dom";

export default function Shivam() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Noida",
      description:
        "Premium residential apartments, commercial spaces, villas, and investment opportunities across Noida.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/c_fill,g_auto,w_800,h_600/v1785231975/SECTOR-20_POCKET-_E_zweeql.png",
      path: "/noida",
    },
    {
      title: "Greater Noida",
      description:
        "Discover modern townships, luxury homes, commercial projects, and high-growth investment locations.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/c_fill,g_auto,w_800,h_600/v1784890794/SURAJPUR-SITE-C_INDUSTRIAL._yb3ljr.png",
      path: "/greater-noida",
    },
    {
      title: "Yamuna Expressway",
      description:
        "Industrial plots, premium residential projects, and investment options near the upcoming Jewar Airport.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/c_fill,g_auto,w_800,h_600/v1784806908/SECTOR-_21_becukh.jpg",
      path: "/yamuna-expressway",
    },
  ];

  return (
    <section className="bg-gray-50 py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Explore <span className="text-red-600">Property</span> Locations
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-7">
            Choose your preferred location to explore premium residential,
            commercial and investment properties.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div
                onClick={() => navigate(card.path)}
                className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer rounded-t-3xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 flex-1 text-sm sm:text-base">
                  {card.description}
                </p>

                <button
                  onClick={() => navigate(card.path)}
                  className="mt-6 w-full sm:w-fit rounded-xl bg-[#DF1221] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#BF101C] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#DF1221]/20"
                >
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}