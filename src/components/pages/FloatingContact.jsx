import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col gap-3">

      {/* WhatsApp */}
      <a
  href="https://wa.me/916200072000"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-center sm:justify-start gap-3 rounded-full shadow-xl px-4 py-3 hover:scale-105 transition-all duration-300"
  style={{
    background: "linear-gradient(90deg, #10b981, #06b6d4)",
    color: "#fff",
  }}
>
  <FaWhatsapp className="text-2xl shrink-0" />

  <span className="hidden sm:block font-medium whitespace-nowrap">
    WhatsApp
  </span>
</a>

      {/* Call */}
      <a
        href="tel:+916262626462"
        className="group flex items-center justify-center sm:justify-start gap-3
                   rounded-full bg-red-700 text-white shadow-xl
                   px-4 py-3 hover:scale-105 transition-all duration-300"
      >
        <Phone size={22} className="shrink-0" />
        <span className="hidden sm:block font-medium whitespace-nowrap">
          Call Now
        </span>
      </a>

    </div>
  );
}