import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Download } from "lucide-react";
import { noidaData } from "../data/noidaData";
import {
  removeSpacesWithHyphen,
  getSlugFromTitle,
  getItemSlug,
} from "../../utils/slugUtils";

// =====================================================
// CLOUDINARY IMAGE OPTIMIZER
// =====================================================
const optimizeCloudinaryImage = (url, width = 1200) => {
  if (!url) return "";

  const cleanUrl = url.trim();

  // Cloudinary image nahi hai
  if (!cleanUrl.includes("res.cloudinary.com")) {
    return cleanUrl;
  }

  const uploadPath = "/image/upload/";

  if (!cleanUrl.includes(uploadPath)) {
    return cleanUrl;
  }

  const [beforeUpload, afterUpload] = cleanUrl.split(uploadPath);

  if (!afterUpload) {
    return cleanUrl;
  }

  const parts = afterUpload.split("/");

  // Existing Cloudinary transformations remove karo
  const firstPart = parts[0];

  const looksLikeTransformation =
    firstPart.includes("f_auto") ||
    firstPart.includes("q_auto") ||
    firstPart.includes("w_") ||
    firstPart.includes("c_") ||
    firstPart.includes("fit") ||
    firstPart.includes("auto");

  if (looksLikeTransformation) {
    parts.shift();
  }

  const publicPath = parts.join("/");

  return `${beforeUpload}${uploadPath}f_auto,q_auto:good,w_${width}/${publicPath}`;
};

// =====================================================
// COMPONENT
// =====================================================
export default function YamunaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const normalizedId = id ? decodeURIComponent(id) : "";

  const parsedId = Number(normalizedId);

  // =====================================================
  // FIND MAP
  // =====================================================
  const map =
    Number.isInteger(parsedId) &&
    parsedId >= 0 &&
    parsedId < noidaData.length
      ? noidaData[parsedId]
      : noidaData.find((item) => {
          if (!item) return false;
          const rawSlug = item?.slug || getSlugFromTitle(item?.title);
          const formattedSlug = removeSpacesWithHyphen(rawSlug);
          return (
            formattedSlug.toLowerCase() === normalizedId.toLowerCase() ||
            rawSlug.toLowerCase() === normalizedId.toLowerCase() ||
            getSlugFromTitle(item?.title) === normalizedId.toLowerCase()
          );
        });

  // =====================================================
  // OPTIMIZED IMAGE
  // =====================================================
  const optimizedImage = optimizeCloudinaryImage(
    map?.image,
    1200
  );

  // =====================================================
  // SEO — update ALL OG + Twitter tags per map
  // =====================================================
  useEffect(() => {
    if (!map) return;

    const pageTitle = `${map.title} | Chhabra Properties`;
    const pageUrl   = window.location.href;
    const description =
      map.description ||
      `Download the latest ${map.title} map with complete location, planning and connectivity details.`;
    const image = map?.image || "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890737/DELTA-II_ajsre2.png";

    // Helper: get-or-create a <meta> tag
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

    // Page title
    document.title = pageTitle;

    // Basic description
    setMeta('meta[name="description"]', "name=description", description);

    // Open Graph
    setMeta('meta[property="og:title"]',       "property=og:title",       pageTitle);
    setMeta('meta[property="og:description"]', "property=og:description", description);
    setMeta('meta[property="og:image"]',       "property=og:image",       image);
    setMeta('meta[property="og:image:alt"]',   "property=og:image:alt",   `${map.title} - Noida Map`);
    setMeta('meta[property="og:url"]',         "property=og:url",         pageUrl);
    setMeta('meta[property="og:type"]',        "property=og:type",        "article");

    // Twitter / X
    setMeta('meta[name="twitter:title"]',       "name=twitter:title",       pageTitle);
    setMeta('meta[name="twitter:description"]', "name=twitter:description", description);
    setMeta('meta[name="twitter:image"]',       "name=twitter:image",       image);
    setMeta('meta[name="twitter:image:alt"]',   "name=twitter:image:alt",   `${map.title} - Noida Map`);

    return () => {
      // Restore defaults on unmount
      const defaultTitle = "Chhabra Properties | Property Dealer in Noida & Greater Noida";
      const defaultDesc  = "Chhabra Properties is a trusted property dealer and real estate consultant in Noida, Greater Noida and Yamuna Expressway.";
      const defaultImg   = "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890737/DELTA-II_ajsre2.png";
      const defaultUrl   = "https://chhabra-properties.com/";

      document.title = defaultTitle;

      const restore = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute("content", value);
      };

      restore('meta[name="description"]',          defaultDesc);
      restore('meta[property="og:title"]',          defaultTitle);
      restore('meta[property="og:description"]',    defaultDesc);
      restore('meta[property="og:image"]',          defaultImg);
      restore('meta[property="og:image:alt"]',      "Chhabra Properties - Real Estate");
      restore('meta[property="og:url"]',            defaultUrl);
      restore('meta[property="og:type"]',           "website");
      restore('meta[name="twitter:title"]',         defaultTitle);
      restore('meta[name="twitter:description"]',   defaultDesc);
      restore('meta[name="twitter:image"]',         defaultImg);
      restore('meta[name="twitter:image:alt"]',     "Chhabra Properties - Real Estate");
    };
  }, [map]);

  // =====================================================
  // DOWNLOAD IMAGE
  // =====================================================
  const downloadImage = async () => {
    if (!optimizedImage) return;

    try {
      const response = await fetch(optimizedImage);

      if (!response.ok) {
        throw new Error("Image download failed");
      }

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

      // Fallback
      window.open(
        optimizedImage,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  // =====================================================
  // MAP NOT FOUND
  // =====================================================
  if (!map) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-3xl font-bold">
        Map Not Found
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================
  return (
    <div className="min-h-screen mt-10 bg-white text-black pt-20">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="flex justify-center px-4 sm:px-6 lg:px-8">

        {optimizedImage ? (
          <img
            src={optimizedImage}
            alt={`${map.title} noida Expressway Map`}
            title={map.title}
            
            
            loading="lazy"
            decoding="async"
          
            className="
              w-full
              max-w-6xl
              h-auto
              max-h-[75vh]
              object-contain
              rounded-2xl
            "
            onError={(e) => {
              console.warn(
                "Image failed to load:",
                optimizedImage
              );

              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div
            className="
              w-full
              max-w-6xl
              h-[50vh]
              flex
              items-center
              justify-center
              bg-gray-100
              rounded-2xl
              text-gray-400
            "
          >
            Image unavailable
          </div>
        )}

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* =====================================================
            BUTTONS
        ===================================================== */}

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">

          {/* BACK */}
          <button
            onClick={() => navigate(-1)}
            className="
              w-full
              sm:w-auto
              rounded-xl
              bg-gray-900
              px-6
              py-3
              text-white
              font-semibold
              hover:bg-black
              transition
            "
          >
            ← Back
          </button>

          {/* DOWNLOAD */}
          <button
            onClick={downloadImage}
            className="
              w-full
              sm:w-auto
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-600
              px-6
              py-3
              text-white
              font-semibold
              hover:bg-red-700
              transition
            "
          >
            <Download size={18} />

            Download Map
          </button>

        </div>

        {/* =====================================================
            TITLE
        ===================================================== */}

        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold">
          {map.title}
        </h1>

        {/* =====================================================
            BADGE
        ===================================================== */}

        <div className="mt-5">
          <span
            className="
              inline-flex
              rounded-full
              bg-red-600
              px-5
              py-2
              text-white
            "
          >
            📍  Noida
          </span>
        </div>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <p
          className="
            mt-4
            whitespace-pre-line
            text-lg
            leading-8
            text-gray-700
          "
        >
          {map.description}

          {"\n\n"}

          {`Explore detailed map information of ${map.title}. This location map provides complete sector planning, connectivity details and area overview.`}
        </p>

        {/* =====================================================
            DETAILS
        ===================================================== */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold">
            Map Details
          </h2>

          <div
            className="
              mt-6
              rounded-2xl
              border
              bg-gray-50
              p-6
            "
          >

            <ul className="space-y-4 text-lg">

              <li>
                ✅{" "}
                <span className="font-semibold">
                  Location :
                </span>{" "}
                Noida
              </li>

              <li>
                ✅{" "}
                <span className="font-semibold">
                  Authority :
                </span>{" "}
                YEIDA
              </li>

              <li>
                ✅{" "}
                <span className="font-semibold">
                  Category :
                </span>{" "}
                Residential / Commercial Map
              </li>

              <li>
                ✅ Updated Planning Map
              </li>

            </ul>

          </div>

        </div>

      </div>
    </div>
  );
}