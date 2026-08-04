import React from "react";

const images = [
  "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR-_155_y0fowy.jpg",
  "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890796/SURAJPUR-SITE-IV_y9axjx.png",
  "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806917/SECTOR-_24A_gmxtfu.jpg",
  // "https://your-image-4.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Chhabra Property Gallery
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our premium collection of apartments, villas, commercial
            spaces, and investment properties.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                loading="lazy"
                className="h-40 w-full object-cover transition duration-500  sm:h-52 lg:h-64"
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {images.length === 0 && (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white py-20 text-center">
            <p className="text-lg font-semibold text-gray-700">
              Gallery images will appear here.
            </p>

            <p className="mt-2 text-gray-500">
              Upload your property photos by adding image URLs to the
              <code className="mx-1 rounded bg-gray-100 px-2 py-1">images</code>
              array.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}