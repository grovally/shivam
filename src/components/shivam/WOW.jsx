import React, { useEffect, useState } from "react";

const wow = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo7tqp7lJPn0sGFWqpWoxUO0fNr-DrlyHj8DdN9dGXOdFzgreevIvIv8&s=1024",
  },
  {
    image:
      "https://etimg.etb2bimg.com/thumb/msid-84397838,width-1200,resizemode-4/.jpg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxn9zCWVJ_GxLQa9SLE2CgL3vHJYx_CW0GrTc-8d22JLLjOvx5_7Owgu5&s=1024",
  },
];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % shivam.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visiblePartners = [
    ...shivam.slice(startIndex),
    ...shivam.slice(0, startIndex),
  ].slice(0, 5);

  return (
   <section className="relative overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">

  {/* =====================================================
      PREMIUM WHITE GLASS CRYSTAL BACKGROUND
  ===================================================== */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* Soft light */}
    <div className="
      absolute
      top-[-100px]
      left-[15%]
      w-[450px]
      h-[450px]
      rounded-full
      bg-red-100/30
      blur-[140px]
    " />

    <div className="
      absolute
      bottom-[-120px]
      right-[10%]
      w-[500px]
      h-[500px]
      rounded-full
      bg-gray-100/80
      blur-[150px]
    " />


    {/* ================= CRYSTAL 1 ================= */}
    <div className="partner-crystal partner-crystal-one">

      <div className="partner-crystal-left" />

      <div className="partner-crystal-right" />

      <div className="partner-crystal-bottom" />

      <div className="partner-crystal-shine" />

    </div>


    {/* ================= CRYSTAL 2 ================= */}
    <div className="partner-crystal partner-crystal-two">

      <div className="partner-crystal-left" />

      <div className="partner-crystal-right" />

      <div className="partner-crystal-bottom" />

      <div className="partner-crystal-shine" />

    </div>


    {/* ================= CRYSTAL 3 ================= */}
    <div className="partner-crystal partner-crystal-three">

      <div className="partner-crystal-left" />

      <div className="partner-crystal-right" />

      <div className="partner-crystal-bottom" />

      <div className="partner-crystal-shine" />

    </div>


    {/* Small crystals */}
    <div className="partner-mini partner-mini-one" />

    <div className="partner-mini partner-mini-two" />

  </div>


  {/* =====================================================
      CONTENT
  ===================================================== */}
  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">

      <p className="
        text-sm
        uppercase
        tracking-[0.3em]
        font-semibold
        text-red-600
        mb-3
      ">
        Our Trusted Network
      </p>

      <h2 className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-bold
        text-gray-900
      ">
        Working With The{" "}
        <span className="text-red-600">
          Top Development
        </span>{" "}
        Real Estate Companies
      </h2>

      <p className="
        mt-4
        max-w-2xl
        mx-auto
        text-gray-500
        text-sm
        sm:text-base
      ">
        We collaborate with leading developers and development
        authorities to bring trusted real estate opportunities.
      </p>

    </div>


    {/* =====================================================
        PARTNER LOGOS
    ===================================================== */}
    <div className="
      grid
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-5
      gap-5
      items-center
    ">

      {visiblePartners.map((partner, index) => (

        <div
          key={`${startIndex}-${index}`}
          className="
            group
            relative
            h-36
            rounded-2xl
            bg-white/80
            backdrop-blur-xl
            border
            border-gray-200/70
            shadow-lg
            hover:shadow-xl
            hover:border-red-200
            flex
            items-center
            justify-center
            p-6
            overflow-hidden
            transition-all
            duration-500
          "
        >

          {/* Glass shine */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/70
            via-transparent
            to-gray-100/20
            pointer-events-none
          " />

          {/* Top red shine */}
          <div className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-red-400
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
          " />

          <img
            src={partner.image}
            alt={`Development partner ${index + 1}`}
            loading="lazy"
            className="
              relative
              z-10
              max-w-full
              max-h-24
              w-auto
              h-auto
              object-contain
              grayscale
              opacity-70
              group-hover:grayscale-0
              group-hover:opacity-100
              group-hover:scale-105
              transition-all
              duration-500
            "
          />

        </div>

      ))}

    </div>


    {/* =====================================================
        SLIDER INDICATOR
    ===================================================== */}
    <div className="
      flex
      items-center
      justify-center
      gap-3
      mt-10
    ">

      {shivam.map((_, index) => (

        <span
          key={index}
          className={`
            h-2
            rounded-full
            transition-all
            duration-500
            ${
              index === startIndex
                ? "w-8 bg-red-600"
                : "w-2 bg-gray-300"
            }
          `}
        />

      ))}

    </div>

  </div>
  

</section>
  );
}