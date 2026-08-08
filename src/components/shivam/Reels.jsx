import React from "react";

export default function Reels() {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">

      {/* =====================================================
          CRYSTAL BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Soft background glow */}
        <div className="
          absolute
          top-[10%]
          left-[10%]
          w-[350px]
          h-[350px]
          rounded-full
          bg-gray-200/40
          blur-[120px]
        " />

        <div className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[400px]
          h-[400px]
          rounded-full
          bg-red-100/40
          blur-[130px]
        " />


        {/* =================================================
            CRYSTAL 1
        ================================================= */}
        <div className="reel-crystal reel-crystal-one">

          <div className="reel-crystal-face reel-face-left" />
          <div className="reel-crystal-face reel-face-right" />
          <div className="reel-crystal-face reel-face-bottom" />

          <div className="reel-crystal-shine" />

        </div>


        {/* =================================================
            CRYSTAL 2
        ================================================= */}
        <div className="reel-crystal reel-crystal-two">

          <div className="reel-crystal-face reel-face-left" />
          <div className="reel-crystal-face reel-face-right" />
          <div className="reel-crystal-face reel-face-bottom" />

          <div className="reel-crystal-shine" />

        </div>


        {/* =================================================
            CRYSTAL 3
        ================================================= */}
        <div className="reel-crystal reel-crystal-three">

          <div className="reel-crystal-face reel-face-left" />
          <div className="reel-crystal-face reel-face-right" />
          <div className="reel-crystal-face reel-face-bottom" />

          <div className="reel-crystal-shine" />

        </div>


        {/* Small crystals */}
        <div className="reel-mini-crystal reel-mini-one" />
        <div className="reel-mini-crystal reel-mini-two" />
        <div className="reel-mini-crystal reel-mini-three" />

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="
          text-4xl
          sm:text-5xl
          font-bold
          text-center
          mb-3
          text-gray-900
        ">
          Latest{" "}
          <span className="text-red-600">
            Instagram
          </span>{" "}
          Reels
        </h2>


        <p className="
          text-gray-600
          text-center
          mb-10
        ">
          Watch our latest updates directly from Instagram.
        </p>


        {/* =================================================
            REELS GRID
        ================================================= */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {/* Reel Card */}
          <div className="
            group
            rounded-2xl
            overflow-hidden
            bg-white/80
            backdrop-blur-xl
            border
            border-gray-200/70
            shadow-xl
            hover:shadow-2xl
            transition-all
            duration-500
          ">

            {/* Instagram Reel */}
            


            {/* Card Content */}
            <div className="p-5">

              <h3 className="
                font-semibold
                text-lg
                text-gray-900
              ">
                Latest Reel
              </h3>


              <p className="
                text-sm
                text-gray-500
                mt-1
              ">
                Follow us for latest property updates.
              </p>


              <a
                href="https://www.instagram.com/chhabrapropertiesofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  mt-4
                  px-5
                  py-2.5
                  bg-gradient-to-r
                  from-pink-600
                  via-red-500
                  to-orange-500
                  text-white
                  rounded-lg
                  font-medium
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-pink-500/20
                "
              >
                Watch on Instagram
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}