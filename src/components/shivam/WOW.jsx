
import React, { useEffect, useState } from "react";


const shivam = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQEvBdQ27KwROA/company-logo_200_200/company-logo_200_200/0/1631300638292?e=2147483647&v=beta&t=w67Fwk0oNJLFaZnCZJZ32fVEUKsa81zPRkxctgy_KoA",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/ATS_Infrastructure.svg",
  },

  {
    image:
      "https://www.asite.com/hubfs/resources/images/newsroom/Resized/M3M.jpg",
  },

  {
    image:
      "https://yt3.googleusercontent.com/Fa1WcgP6NSyZRExROzL6JXG2z766ZMpIgCAw3wtqO9dOgoE8ZWTyah8svV7ra4XAdhPudtDs=s900-c-k-c0x00ffffff-no-rj",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBi-yDvPkg0Zan6EQ_Is-9-MU58wihulJ7ivktrJOmppal8S0LeVqLCJc&s=1024",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/Gaursons_India.svg",
  },

  {
    image:
      "https://mma.prnewswire.com/media/1308693/GPL_Logo.jpg?p=facebook",
  },
];


export default function WOW() {

  const [startIndex, setStartIndex] = useState(0);


  /* =========================================
     AUTO SLIDER
  ========================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setStartIndex(
        (prev) =>
          (prev + 1) % shivam.length
      );

    }, 3000);


    return () => clearInterval(interval);

  }, []);


  /* =========================================
     VISIBLE PARTNERS
  ========================================= */

  const visiblePartners = [
    ...shivam.slice(startIndex),
    ...shivam.slice(0, startIndex),
  ].slice(0, 5);


  return (

    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        bg-transparent
      "
    >


      {/* =========================================
          BACKGROUND RED GLOW
      ========================================= */}

      <div
        className="
          absolute
          top-[-120px]
          left-[10%]

          w-[450px]
          h-[450px]

          rounded-full

          bg-red-600/10

          blur-[150px]

          pointer-events-none
        "
      />


      <div
        className="
          absolute
          bottom-[-150px]
          right-[5%]

          w-[500px]
          h-[500px]

          rounded-full

          bg-white/5

          blur-[160px]

          pointer-events-none
        "
      />
           <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-20 md:h-32"
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
        <stop offset="0%" stopColor="#450000" />
        <stop offset="35%" stopColor="#b91c1c" />
        <stop offset="65%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#991b1b" />
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
          CRYSTAL 1
      ========================================= */}

      


      {/* =========================================
          CRYSTAL 2
      ========================================= */}



      {/* =========================================
          CRYSTAL 3
      ========================================= */}



      {/* SMALL CRYSTALS */}

      <div className="partner-mini partner-mini-one" />

      <div className="partner-mini partner-mini-two" />



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
        "
      >


        {/* =========================================
            HEADING
        ========================================= */}

        <div className="text-center mb-12">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              font-semibold
              text-red-500
              mb-3
            "
          >
            Our Trusted Network
          </p>


          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Working With The{" "}

            <span className="text-red-500">
              Top Development
            </span>{" "}

            Real Estate Companies
          </h2>


          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-white/60
              text-sm
              sm:text-base
              leading-7
            "
          >
            We collaborate with leading developers and
            development authorities to bring trusted real
            estate opportunities.
          </p>

        </div>



        {/* =========================================
            PARTNER LOGOS
        ========================================= */}

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-5
            items-center
          "
        >

          {visiblePartners.map(
            (partner, index) => (

              <div
                key={`${startIndex}-${index}`}

                className="
                  group
                  relative

                  h-36

                  rounded-2xl

                  bg-white/[0.04]

                  backdrop-blur-xl

                  border
                  border-red-200/20

                 

                  border-red-400/60

                  shadow-[0_0_30px_rgba(239,68,68,0.12)]

                  flex
                  items-center
                  justify-center

                  p-6

                  overflow-hidden

                  transition-all
                  duration-500
                "
              >


                {/* =================================
                    GLASS SHINE
                ================================= */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-white/[0.08]
                    via-transparent
                    to-red-500/[0.03]

                    pointer-events-none
                  "
                />


                {/* =================================
                    RED TOP LINE
                ================================= */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-red-500
                    to-transparent

                    opacity-0

                    group-hover:opacity-100

                    transition
                    duration-500
                  "
                />


                {/* =================================
                    LOGO
                ================================= */}

                <img
                  src={partner.image}

                  alt={`Development partner ${index + 1}`}

                  loading="lazy"

                  className="
                    relative
                    z-10

                    max-w-full
                    max-h-32

                    w-auto
                    h-auto

                    object-contain

                    grayscale

                    opacity-60

                    grayscale-0

                    opacity-100

                    scale-105

                    transition-all
                    duration-500
                  "
                />

              </div>

            )
          )}

        </div>



        {/* =========================================
            SLIDER INDICATOR
        ========================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            mt-10
          "
        >

          {shivam.map(
            (_, index) => (

              <span
                key={index}

                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    index === startIndex
                      ? "w-8 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                      : "w-2 bg-white/20"
                  }
                `}
              />

            )
          )}

        </div>


      </div>
           <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-20 md:h-32"
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
        <stop offset="0%" stopColor="#450000" />
        <stop offset="35%" stopColor="#b91c1c" />
        <stop offset="65%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#991b1b" />
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

    </section>
  );
}

