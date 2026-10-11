import React, { useEffect } from "react";

// =====================================================
// INSTAGRAM REELS
// =====================================================
const shivam = [
  {
    image:
      "https://www.instagram.com/reel/DbnLojmp7In/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==",
  },
  {
    image:
      "https://www.instagram.com/reel/DbK4xdxJsKt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==",
  },
  {
    image:
      "https://www.instagram.com/reel/DbkZd5CJrz3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==",
  },
];

// =====================================================
// LOAD INSTAGRAM EMBED SCRIPT
// =====================================================
function loadInstagramEmbedScript(callback) {
  const existing = document.getElementById("instagram-embed-script");

  if (existing) {
    if (window.instgrm) {
      callback();
    } else {
      existing.addEventListener("load", callback);
    }
    return;
  }

  const script = document.createElement("script");
  script.id = "instagram-embed-script";
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = callback;

  document.body.appendChild(script);
}


function ReelEmbed({ url }) {
  useEffect(() => {
    loadInstagramEmbedScript(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    });
  }, [url]);

  return (
    <div className="flex w-full justify-center overflow-hidden">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: "10px",
          margin: "0 auto",
          width: "50%",
          maxWidth: "320px",
          minWidth: "220px",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this Reel on Instagram
        </a>
      </blockquote>
    </div>
  );
}


export default function Reels() {
  return (
    <section
      className="
        relative
        mt-3
        w-full
        overflow-hidden
        bg-transparent
        px-3
        py-8
        sm:px-6
        sm:py-10
        lg:px-8
      "
    >
      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* HEADING */}
        <h2
          className="
            text-center
            text-xl
            font-bold
            leading-tight
            tracking-tight
            text-black
            sm:text-2xl
            md:text-3xl
          "
        >
          Latest <span className="text-red-600">Instagram</span> Reels
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-2
            max-w-xl
            px-3
            text-center
            text-xs
            leading-6
            text-gray-600
            sm:text-sm
          "
        >
          Watch our latest updates directly from Instagram.
        </p>

        {/* REELS GRID */}
        <div
          className="
            mt-6
            grid
            grid-cols-1
            place-items-center
            gap-5
            sm:mt-8
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {shivam.map((reel, index) => (
            <div
              key={index}
              className="
                group
                w-full
                max-w-[320px]
                sm:max-w-[320px]
                overflow-hidden
                rounded-xl
                border
                border-gray-200/70
                bg-white
                text-center
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div className="flex w-full justify-center p-1.5">
                <ReelEmbed url={reel.image} />
              </div>
            </div>
          ))}
        </div>

        {/* MORE REELS BUTTON */}
        <div className="mt-6 flex justify-center px-2 sm:mt-8">
          <a
          
            href="https://www.instagram.com/chhabrapropertiesofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              max-w-xs
              items-center
              justify-center
              rounded-lg
              bg-gradient-to-r
              from-pink-600
              via-red-500
              to-orange-500
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              shadow-pink-500/20
              transition-all
              duration-300
              hover:scale-[1.02]
              sm:w-auto
              sm:max-w-none
              sm:px-5
              sm:hover:scale-105
            "
          >
            More Reels on Instagram
          </a>
          
        </div>
      </div>
    </section>
  );
}