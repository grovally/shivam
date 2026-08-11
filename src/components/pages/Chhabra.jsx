import {
  UserRound,
  MapPin,
  FileCheck,
  KeyRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Requirements",
    desc: "Tell us your budget, preferred location and property type.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Free Site Visit",
    desc: "We arrange personalised visits to carefully shortlisted properties.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Documentation",
    desc: "Our team verifies documents and assists you with the complete paperwork.",
    icon: FileCheck,
  },
  {
    number: "04",
    title: "Possession",
    desc: "From registry and mutation to final handover, we stay with you.",
    icon: KeyRound,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 md:py-20">
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
      
      
      {/* ================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-red-600/10
          blur-[100px]
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          right-[-100px]
          h-72
          w-72
          rounded-full
          bg-red-500/5
          blur-[100px]
        "
      />

      {/* ================================
          MAIN CONTAINER
      ================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* ================================
            SECTION HEADING
        ================================= */}

        <div
          className="
            mx-auto
            mb-10
            max-w-2xl
            text-center
            sm:mb-12
            md:mb-14
          "
        >
          <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3">
            
            
            <span className="h-px w-7 bg-red-500 sm:w-10" />
            

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-500
                sm:text-xs
                sm:tracking-[0.25em]
              "
            >
              Our Process
            </span>

            <span className="h-px w-7 bg-red-500 sm:w-10" />

          </div>

          <h2
            className="
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-black
              sm:text-4xl
              md:text-5xl
            "
          >
            From Search to{" "}
            <span className="text-red-500">
              Possession
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              px-2
              text-sm
              leading-6
              text-black/65
              sm:text-base
              sm:leading-7
            "
          >
            A simple, transparent and personalised process designed
            to make your property journey completely stress-free.
          </p>
        </div>

        {/* ================================
            STEPS
        ================================= */}

        <div className="relative">

          {/* Desktop Connecting Line */}

          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-[62px]
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-red-500/40
              to-transparent
              lg:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-4
              lg:gap-6
            "
          >

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                  "
                >

                  {/* ================================
                      CARD
                  ================================= */}

                  <div
                    className="
                      relative
                      h-full
                      min-h-[270px]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-red-500/30
                      bg-white/[0.05]
                      p-5
                      shadow-[0_15px_45px_rgba(239,68,68,0.08)]
                      backdrop-blur-xl
                      transition-all
                      duration-500

                      hover:-translate-y-2
                      hover:border-red-500/60
                      hover:bg-white/[0.07]
                      hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)]

                      sm:rounded-3xl
                      sm:p-6
                      md:p-7
                    "
                  >

                    {/* ================================
                        RED GLOW
                    ================================= */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-32
                        w-32
                        rounded-full
                        bg-red-600/10
                        blur-3xl
                        transition-all
                        duration-500
                        group-hover:scale-150
                        group-hover:bg-red-600/20
                      "
                    />

                    {/* ================================
                        TOP AREA
                    ================================= */}

                    <div
                      className="
                        relative
                        mb-6
                        flex
                        items-center
                        justify-between
                        sm:mb-8
                      "
                    >

                      {/* Step Number */}

                      <div>
                        <span
                          className="
                            text-[10px]
                            font-semibold
                            tracking-[0.2em]
                            text-black/80
                            sm:text-xs
                            sm:tracking-[0.25em]
                          "
                        >
                          STEP
                        </span>

                        <div
                          className="
                            mt-1
                            text-3xl
                            font-black
                            tracking-tight
                            text-red-500
                            sm:text-4xl
                          "
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-red-500/20
                          bg-red-500/10
                          transition-all
                          duration-500

                          group-hover:scale-110
                          group-hover:rotate-3
                          group-hover:bg-red-500

                          sm:h-14
                          sm:w-14
                          sm:rounded-2xl
                        "
                      >
                        <Icon
                          size={22}
                          strokeWidth={1.8}
                          className="
                            text-red-500
                            transition-colors
                            duration-500
                            group-hover:text-black
                            sm:h-6
                            sm:w-6
                          "
                        />
                      </div>

                    </div>

                    {/* ================================
                        CONTENT
                    ================================= */}

                    <div className="relative">

                      <h3
                        className="
                          text-lg
                          font-bold
                          leading-snug
                          text-black
                          sm:text-xl
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-6
                          text-black/80
                          sm:leading-7
                        "
                      >
                        {step.desc}
                      </p>

                    </div>

                    {/* ================================
                        NEXT STEP
                    ================================= */}

                    {index !== steps.length - 1 && (
                      <div
                        className="
                          relative
                          mt-6
                          flex
                          items-center
                          gap-2
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wider
                          text-black/65
                          transition-all
                          duration-300
                          group-hover:text-red-400
                          sm:mt-7
                          sm:text-xs
                        "
                      >
                        <span>Next Step</span>

                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </div>
                    )}

                    {/* Last Step */}

                    {index === steps.length - 1 && (
                      <div
                        className="
                          relative
                          mt-6
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wider
                          text-red-600/70
                          sm:mt-7
                          sm:text-xs
                        "
                      >
                        Final Step
                      </div>
                    )}

                    {/* ================================
                        BOTTOM BORDER
                    ================================= */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-red-500
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}