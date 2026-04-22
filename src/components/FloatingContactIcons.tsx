import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const icons = [
  { icon: Phone, label: "Call", href: "tel:+919999999999", bg: "bg-accent/90" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919999999999", bg: "bg-[hsl(142,55%,45%)]/90" },
  { icon: Mail, label: "Email", href: "mailto:theartistinteriors@gmail.com", bg: "bg-accent/90" },
];

const FloatingContactIcons = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-3">
    {icons.map((item, i) => (
      <motion.a
        key={i}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        whileHover={{ x: -4, scale: 1.05 }}
        className={`${item.bg} backdrop-blur-sm text-white p-2 md:p-3 rounded-l-lg shadow-md flex flex-col items-center gap-0.5 md:gap-1 transition-all duration-300 hover:shadow-xl border border-white/20`}
        aria-label={item.label}
      >
        <item.icon className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-[8px] md:text-[10px] font-medium leading-tight hidden sm:block">{item.label}</span>
      </motion.a>
    ))}
  </div>
);

export default FloatingContactIcons;
