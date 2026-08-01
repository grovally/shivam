import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/916200072000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Phone */}
      <a
        href="tel:+916262626462"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-110"
      >
        <Phone size={26} />
      </a>
    </div>
  );
}