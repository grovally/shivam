import { useNavigate, useParams } from "react-router-dom";

 import { Download } from "lucide-react";
import Noida from "./Noida";
import { noidaData } from "../data/noidaData";

export default function NoidaDetail() {
  const downloadImage = async () => {
  const response = await fetch(map.image);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${map.title}.jpg`; // File name
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  window.URL.revokeObjectURL(url);
};
  const { id } = useParams();
  const navigate = useNavigate();

  const map = noidaData[Number(id)];

  if (!map) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-3xl font-bold">
        Map Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-white text-black">

      {/* Image */}
      <div className="flex justify-center p-6">
        <img
          src={map.image}
          alt={map.title}
          loading="lazy"
          className="w-full max-w-6xl h-[70vh] object-contain rounded-3xl "
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-3 rounded-xl"
        >
          ← Back
        </button>
         
        

<button
  onClick={downloadImage}
  className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700 transition"
>
  <Download size={18} />
  Download Map
</button>
        <h1 className="text-5xl font-bold">
          {map.title}
        </h1>

        <div className="mt-5">
          <span className="bg-red-600 text-white px-5 py-2 rounded-full">
            📍 Greater Noida
          </span>
        </div>

        <p className="mt-10 text-gray-700 leading-8 whitespace-pre-line">
          {map.description ||
            `Explore detailed map information of ${map.title}.

This location map provides complete sector planning, connectivity details and area overview.`}
        </p>

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            Map Details
          </h2>

          <ul className="space-y-4 text-black text-lg">

            <li>✅ Location : Greater Noida</li>

            <li>✅ Authority : Greater Noida Industrial Development Authority</li>

            <li>✅ Category : Residential / Commercial</li>

            <li>✅ Updated Planning Map</li>

          </ul>

        </div>

      </div>

    </div>
  );
}