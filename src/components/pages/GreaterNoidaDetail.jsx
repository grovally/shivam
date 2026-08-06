import { useNavigate, useParams } from "react-router-dom";
import { Download } from "lucide-react";
import { useEffect } from "react";
import { greaterNoida } from "../data/greaterNoidaData";

const getSlugFromTitle = (title) =>
  (title || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function GreaterNoidaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const normalizedId = id ? decodeURIComponent(id) : "";
  const parsedId = Number(normalizedId);

  const map =
    Number.isInteger(parsedId) && parsedId >= 0 && parsedId < greaterNoida.length
      ? greaterNoida[parsedId]
      : greaterNoida.find((item) => {
          const itemSlug = item?.slug || getSlugFromTitle(item?.title);
          return itemSlug === normalizedId;
        });

  useEffect(() => {
    if (!map) return;

    document.title = `${map.title} | Chhabra Properties`;

    const description =
      map.description ||
      `Download the latest ${map.title} map with complete location, planning and connectivity details.`;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, [map]);

  const downloadImage = async () => {
    try {
      const response = await fetch(map.image);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${map.title}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  if (!map) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-3xl font-bold">
        Map Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10 bg-white text-black pt-20">

      {/* IMAGE */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <img
          src={map.image}
          alt={map.title}
          title={map.title}
          loading="lazy"
          className="w-full max-w-6xl h-auto max-h-[75vh] object-contain rounded-2xl"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-black transition"
          >
            ← Back
          </button>

          <button
            onClick={downloadImage}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
          >
            <Download size={18} />
            Download Map
          </button>

        </div>

        {/* Title */}
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {map.title}
        </h1>

        {/* Badge */}
        <div className="mt-5">
          <span className="inline-flex rounded-full bg-red-600 px-5 py-2 text-sm sm:text-base font-medium text-white">
            📍 Greater Noida
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg leading-8 text-gray-700 whitespace-pre-line">
          {map.description ||
            `Explore detailed map information of ${map.title}.

This location map provides complete sector planning, connectivity details and area overview.`}
        </p>

        {/* Map Details */}
        <div className="mt-12">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Map Details
          </h2>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">

            <ul className="space-y-4 text-base sm:text-lg text-gray-800">

              <li>
                ✅ <span className="font-semibold">Location :</span> Greater Noida
              </li>

              <li>
                ✅ <span className="font-semibold">Authority :</span> Greater Noida Industrial Development Authority (GNIDA)
              </li>

              <li>
                ✅ <span className="font-semibold">Category :</span> Residential / Commercial Map
              </li>

              <li>
                ✅ <span className="font-semibold">Status :</span> Updated Planning Map
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}