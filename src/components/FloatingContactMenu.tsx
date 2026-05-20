import { Phone, Headphones, MessageCircle } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryDialog";

const PHONE = "+910000000000";
const WHATSAPP = "910000000000";

export function FloatingContactMenu() {
  const { open } = useEnquiry();

  const buttons = [
    {
      label: "Call us",
      icon: Phone,
      onClick: () => (window.location.href = `tel:${PHONE}`),
      className:
        "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground ring-white/20",
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      onClick: () =>
        window.open(`https://wa.me/${WHATSAPP}`, "_blank", "noopener,noreferrer"),
      className:
        "bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white ring-white/30",
    },
    {
      label: "Customer Support",
      icon: Headphones,
      onClick: () => open(),
      className:
        "bg-gradient-to-br from-brand to-brand/80 text-brand-foreground ring-white/30",
    },
  ];

  return (
    <div className="fixed right-3 sm:right-4 top-[38%] z-50 -translate-y-1/2 flex flex-col gap-3 fade-in-up">
      {buttons.map(({ label, icon: Icon, onClick, className }, i) => (
        <button
          key={label}
          onClick={onClick}
          aria-label={label}
          style={{ animationDelay: `${i * 80}ms` }}
          className={`group relative h-11 w-11 sm:h-12 sm:w-12 rounded-full ring-1 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.45)] hover:shadow-[0_14px_32px_-8px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:scale-95 flex items-center justify-center fade-in-up ${className}`}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-70" />
          <Icon className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-lg">
            {label}
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-current opacity-0 group-hover:opacity-30 animate-ping" />
        </button>
      ))}
    </div>
  );
}
