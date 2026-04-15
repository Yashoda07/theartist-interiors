import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const icons = [
  { icon: Phone, label: "Call Now", href: "tel:+919999999999", bg: "bg-accent" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919999999999", bg: "bg-green-600" },
  { icon: Mail, label: "Send Mail", href: "mailto:theartistinteriors@gmail.com", bg: "bg-accent" },
];

const FloatingContactIcons = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
    {icons.map((item, i) => (
      <motion.a
        key={i}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        whileHover={{ x: -4, scale: 1.05 }}
        className={`${item.bg} text-white p-3 rounded-l-lg shadow-lg flex flex-col items-center gap-1 transition-all duration-300 hover:shadow-xl`}
        aria-label={item.label}
      >
        <item.icon className="w-5 h-5" />
        <span className="text-[10px] font-medium leading-tight">{item.label}</span>
      </motion.a>
    ))}
  </div>
);

export default FloatingContactIcons;
