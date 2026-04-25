import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const icons = [
  { icon: Phone, label: "Call", href: "tel:+919999999999", iconColor: "text-accent" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919999999999", iconColor: "text-[hsl(142,55%,38%)]" },
  { icon: Mail, label: "Email", href: "mailto:theartistinteriors@gmail.com", iconColor: "text-accent" },
];

const FloatingContactIcons = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
    {icons.map((item, i) => (
      <motion.a
        key={i}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        whileHover={{ x: -4, scale: 1.05 }}
        className="bg-[hsl(35,30%,92%)]/90 backdrop-blur-md text-foreground p-1.5 sm:p-2 md:p-2.5 rounded-l-lg shadow-md flex flex-col items-center gap-0.5 transition-all duration-300 hover:shadow-xl hover:bg-[hsl(35,30%,95%)] border border-foreground/10"
        aria-label={item.label}
      >
        <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] ${item.iconColor}`} />
        <span className="text-[8px] md:text-[9px] font-medium leading-tight hidden sm:block text-foreground/80 uppercase tracking-wide">{item.label}</span>
      </motion.a>
    ))}
  </div>
);

export default FloatingContactIcons;
