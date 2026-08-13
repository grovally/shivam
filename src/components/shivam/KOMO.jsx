import React, { useEffect, useState } from "react";

const authorities = [
    {
    name: "Greater Noida Authority",
    shortName: "Greater Noida Authority",
    description:
      "Greater Noida ke planned urban development, infrastructure aur real estate growth ko manage karne wali authority.",
    image:
      "https://www.constructionworld.in/assets/uploads/s_d2da1e5e2d0414ad71f40700f0b63f68.jpg",
  },
  {
    name: "Noida Authority",
    shortName: "Noida Authority",
    description:
      "Noida ke residential, commercial aur infrastructure development ko plan aur regulate karne wali authority.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.oJFmja7w1g-v0bD0SL1W_gHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Yamuna Expressway Industrial Development Authority",
    shortName: "YEIDA",
    description:
      "Yamuna Expressway region ke planned development aur infrastructure ke liye responsible development authority.",
    image:
      "https://images.indianexpress.com/2023/06/YEIDA.jpg",
  },

  

  
];

export default function WOW() {
  const [startIndex, setStartIndex] = useState(0);

  /* =========================================
     AUTO SLIDER
 

  /* =========================================
     VISIBLE AUTHORITIES
  ========================================= */
  const visibleAuthorities = [
    ...authorities.slice(startIndex),
    ...authorities.slice(0, startIndex),
  ].slice(0, 3);

  return (
    <section
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
        
      "
    >
      {/* =========================================
          BACKGROUND RED GLOW
      ========================================= */}
     

     

      {/* =========================================
          TOP RED WAVE
      ========================================= */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          overflow-hidden
          leading-none
          pointer-events-none
        "
      >
        <svg
          className="
            relative
            block
            w-full
            h-16
            sm:h-20
            md:h-28
          "
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="redWaveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#450000"
              />

              <stop
                offset="35%"
                stopColor="#b91c1c"
              />

              <stop
                offset="65%"
                stopColor="#ef4444"
              />

              <stop
                offset="100%"
                stopColor="#991b1b"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M0,0
              C120,35 240,45 360,55
              C500,65 620,75 760,90
              C900,105 1040,125 1200,155
              L1200,0
              L0,0
              Z
            "
            fill="url(#redWaveGradient)"
          />
        </svg>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-10
          sm:pt-12
        "
      >

        {/* =========================================
            HEADING
        ========================================= */}
        <div className="text-center mb-10 sm:mb-12">

          <p
            className="
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.3em]
              font-semibold
              text-red-500
              mb-3
            "
          >
            Development Authorities
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
              text-black
            "
          >
            Trusted{" "}
            <span className="text-red-500">
              Development
            </span>{" "}
            Authorities
          </h2>

          <p
            className="
              mt-4
              mx-auto
              max-w-3xl
              text-black/60
              text-sm
              sm:text-base
              leading-6
              sm:leading-7
              px-2
            "
          >
            Explore properties and real estate
            opportunities across leading development
            authorities in Noida, Greater Noida and
            Yamuna Expressway.
          </p>

        </div>

        {/* =========================================
            AUTHORITY CARDS
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-7
          "
        >

          {visibleAuthorities.map(
            (authority, index) => (

              <div
                key={`${authority.shortName}-${startIndex}-${index}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  sm:rounded-3xl
                  bg-white
                  border
                  border-red-100
                  shadow-lg
                  shadow-black/5
                  hover:shadow-2xl
                  hover:shadow-red-500/10
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* =================================
                    IMAGE
                ================================= */}
                <div
                  className="
                    relative
                    w-full
                    h-52
                    sm:h-52
                    md:h-56
                    overflow-hidden
                    bg-gray-100
                  "
                >

                  <img
                    src={authority.image}
                    alt={authority.name}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                   
                  />

                  {/* Image Overlay */}
                  

                  {/* Authority Badge */}
                  

                </div>

                {/* =================================
                    CONTENT
                ================================= */}
                

                {/* =================================
                    RED BOTTOM LINE
                ================================= */}
              

              </div>

            )
          )}

        </div>

        {/* =========================================
            SLIDER INDICATOR
        ========================================= */}
       

      </div>
    </section>
  );
}