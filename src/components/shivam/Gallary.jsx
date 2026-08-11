import React from "react";

const images = [
  "https://res.cloudinary.com/bzbcmzrn/image/upload/v1785823324/gn_alf_1_qzbrno.jpg",
  "https://res.cloudinary.com/bzbcmzrn/image/upload/v1785823324/gn_alf_2_svo00m.jpg",
  "https://res.cloudinary.com/bzbcmzrn/image/upload/v1785824655/Sikndrabad_1_unvugu.jpg",
  "https://res.cloudinary.com/bzbcmzrn/image/upload/v1785823988/gaur_yamuna_3_xo7p2f.jpg"



];

export default function Gallery() {
  return (
    <section className="relative mt-10 overflow-hidden bg-transparent py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Chhabra <span className="text-red-600">Property</span>  Gallery
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-black/80 max-w-3xl mx-auto">
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
            <p className="text-lg font-semibold text-black/40">
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