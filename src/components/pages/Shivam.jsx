import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Shivam() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Noida",
      description:
        "Premium residential apartments, commercial spaces, villas, and investment opportunities across Noida.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890801/Untitled_design_24_sitvau.png",
      path: "/noida",
    },
    {
      title: "Greater Noida",
      description:
        "Discover modern townships, luxury homes, commercial projects, and high-growth investment locations.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890795/SURAJPUR-SITE-C_RESIDENTIAL_owf47t.png",
      path: "/greater-noida",
    },
    {
      title: "Yamuna Expressway",
      description:
        "Industrial plots, premium residential projects, and investment options near the upcoming Jewar Airport.",
      image:
        "https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890794/SURAJPUR-SITE-C_INDUSTRIAL._yb3ljr.png",
      path: "/yamuna-expressway",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Explore <span className="text-red-500"> Property</span> Locations
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose your preferred location to explore premium residential,
            commercial and investment properties.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => navigate(card.path)}
              >
               <div className="bg-gray-100 flex items-center justify-center rounded-t-3xl overflow-hidden">
  <img
    src={card.image}
    alt={card.title}
    className="w-full h-auto object-contain group-hover:scale-105 transition duration-500"
  />
</div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="text-red-500" size={16} />
                  {card.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl text-red-500 font-bold">
                  {card.title}
                </h3>

                <p className="text-black/95 mt-3 leading-7">
                  {card.description}
                </p>

                <button
                  onClick={() => navigate(card.path)}
                  className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-red-700 transition"
                >
                  Explore Properties →
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}