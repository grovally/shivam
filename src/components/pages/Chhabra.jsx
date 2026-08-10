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
    <section className="relative py-20">
      {/* Section Heading */}
      <div className="max-w-2xl mx-auto mb-12 text-center">
  <div className="flex items-center justify-center gap-3 mb-4">
    <span className="h-px w-10 bg-red-500" />

    <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
      Our Process
    </span>

    <span className="h-px w-10 bg-red-500" />
  </div>

  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
    From Search to
    <span className="text-red-500"> Possession</span>
  </h2>

  <p className="mt-4 text-white/50 leading-7">
    A simple, transparent and personalised process designed
    to make your property journey completely stress-free.
  </p>
</div>

      {/* Steps */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-[58px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative"
              >
                {/* Card */}
                <div
                  className="
                    relative h-full overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-7
                    transition-all duration-500
                    translate-y-2
                    border-red-500/40
                    bg-white/[0.07]
                    shadow-[0_20px_60px_rgba(239,68,68,0.12)]
                  "
                >
                  {/* Red Glow */}
                  <div
                    className="
                      absolute -right-16 -top-16
                      h-32 w-32 rounded-full
                      bg-red-600/10 blur-3xl
                      transition-all duration-500
                      group-hover:bg-red-600/20
                      group-hover:scale-150
                    "
                  />

                  {/* Top */}
                  <div className="relative flex items-center justify-between mb-8">
                    <div>
                      <span className="text-xs font-semibold tracking-[0.25em] text-white/40">
                        STEP
                      </span>

                      <div className="mt-1 text-4xl font-black tracking-tight text-red-500">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl
                        border border-red-500/20
                        bg-red-500/10
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                        group-hover:bg-red-500
                      "
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="
                          text-red-500
                          transition-colors duration-500
                          group-hover:text-white
                        "
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {step.desc}
                    </p>
                  </div>

                  {/* Next Step */}
                  <div
                    className="
                      relative mt-7 flex items-center gap-2
                      text-xs font-semibold uppercase tracking-wider
                      text-white/30
                      transition-all duration-300
                      group-hover:text-red-400
                    "
                  >
                    <span>Next Step</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  {/* Bottom Animated Border */}
                  <div
                    className="
                      absolute bottom-0 left-0 h-[2px] w-0
                      bg-red-500
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}