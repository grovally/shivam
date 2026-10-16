import { useNavigate, useParams } from "react-router-dom";
import { Download, MapPin, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { greaterNoida } from "../data/greaterNoidaData";
import {
  getSlugFromTitle,
  getItemSlug,
  sanitizeSlug,
  normalizeForMatch,
} from "../../utils/slugUtils";

export default function GreaterNoidaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const normalizedId = id ? decodeURIComponent(id) : "";
  const cleanId = sanitizeSlug(normalizedId);
  const matchKey = normalizeForMatch(normalizedId);
  const parsedId = Number(normalizedId);

  // =====================================================
  // FIND MAP
  // =====================================================
  const map =
    greaterNoida.find((item) => {
      if (!item) return false;
      const cleanSlug = getItemSlug(item);
      const rawSlug = sanitizeSlug(item?.slug);
      const titleSlug = getSlugFromTitle(item?.title);

      if (cleanSlug === cleanId || rawSlug === cleanId || titleSlug === cleanId) {
        return true;
      }
      if (
        matchKey &&
        (normalizeForMatch(cleanSlug) === matchKey ||
          normalizeForMatch(item?.slug) === matchKey ||
          normalizeForMatch(item?.title) === matchKey)
      ) {
        return true;
      }
      return false;
    }) ||
    (Number.isInteger(parsedId) && parsedId >= 0 && parsedId < greaterNoida.length
      ? greaterNoida[parsedId]
      : null);

  // =====================================================
  // SEO & OPEN GRAPH
  // =====================================================
  useEffect(() => {
    if (!map) return;

    const cleanTitle = (map.title || "").trim();
    const ogTitle = (map.ogTitle || "").trim();
    const pageTitle = `${cleanTitle}, Greater Noida HD Map`;
    const canonicalSlug = getItemSlug(map);
    const canonicalUrl = `https://chhabra-properties.com/greater-noida/${canonicalSlug}`;

    const rawDesc = (map.description || "")
      .replace(/<[^>]*>/g, " ")
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .replace(/\s+/g, " ")
      .trim();

    const description =
      rawDesc.length >= 20
        ? rawDesc.slice(0, 200).trim()
        : `Download the latest ${cleanTitle} map with complete location, planning and connectivity details from Chhabra Properties.`;

    const image =
      (map?.image || "").trim() ||
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890737/DELTA-II_ajsre2.png";

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = attr.split("=");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
      return el;
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      return el;
    };

    document.title = pageTitle;

    setLink("canonical", canonicalUrl);
    setMeta('meta[name="description"]', "name=description", description);
    setMeta('meta[property="og:title"]', "property=og:title", ogTitle);
    setMeta('meta[property="og:description"]', "property=og:description", description);
    setMeta('meta[property="og:image"]', "property=og:image", image);
    setMeta('meta[property="og:image:alt"]', "property=og:image:alt", `${cleanTitle} - Greater Noida Map`);
    setMeta('meta[property="og:url"]', "property=og:url", canonicalUrl);
    setMeta('meta[property="og:type"]', "property=og:type", "article");
    setMeta('meta[name="twitter:title"]', "name=twitter:title", ogTitle);
    setMeta('meta[name="twitter:description"]', "name=twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name=twitter:image", image);
    setMeta('meta[name="twitter:image:alt"]', "name=twitter:image:alt", `${cleanTitle} - Greater Noida Map`);

    return () => {
      const defaultTitle = "Chhabra Properties | Property Dealer in Noida & Greater Noida";
      const defaultDesc =
        "Chhabra Properties is a trusted property dealer and real estate consultant in Noida, Greater Noida and Yamuna Expressway. Explore residential flats, commercial properties, villas and plots with expert guidance.";
      const defaultImg =
        "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890737/DELTA-II_ajsre2.png";
      const defaultUrl = "https://chhabra-properties.com/";

      document.title = defaultTitle;

      const restore = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute("content", value);
      };

      setLink("canonical", defaultUrl);
      restore('meta[name="description"]', defaultDesc);
      restore('meta[property="og:title"]', defaultTitle);
      restore('meta[property="og:description"]', defaultDesc);
      restore('meta[property="og:image"]', defaultImg);
      restore('meta[property="og:image:alt"]', "Chhabra Properties - Real Estate");
      restore('meta[property="og:url"]', defaultUrl);
      restore('meta[property="og:type"]', "website");
      restore('meta[name="twitter:title"]', defaultTitle);
      restore('meta[name="twitter:description"]', defaultDesc);
      restore('meta[name="twitter:image"]', defaultImg);
      restore('meta[name="twitter:image:alt"]', "Chhabra Properties - Real Estate");
    };
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

        {/* Location Map */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <MapPin className="text-red-600" size={28} />
                Location Map
              </h2>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                Explore the exact live location and surrounding road network of {map.title} on Google Maps.
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${map.title}, Greater Noida, Uttar Pradesh`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:border-red-500 hover:text-red-600 hover:bg-red-50/40 transition"
            >
              <ExternalLink size={15} />
              Open in Google Maps
            </a>
          </div>

          <div className="relative w-full rounded-2xl border border-gray-200 overflow-hidden bg-gray-100 shadow-md">
            <iframe
              title={`${map.title} Location Map`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${map.title}, Greater Noida, Uttar Pradesh`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-[380px] sm:h-[450px] lg:h-[480px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

    </div>
  );
}