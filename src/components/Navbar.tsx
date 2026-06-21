import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

type NavItem = { label: string; href: string; type: "hash" | "route" };

const navItems: NavItem[] = [
  { label: "Home", href: "#home", type: "hash" },
  { label: "About", href: "#about", type: "hash" },
  { label: "Experience", href: "#experience", type: "hash" },
  { label: "Skills & Services", href: "#skills", type: "hash" },
  { label: "Portfolio", href: "/portfolio", type: "route" },
  { label: "Testimonials", href: "#testimonials", type: "hash" },
  { label: "Contact", href: "#contact-footer", type: "hash" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item: NavItem) => {
    if (item.type === "route") {
      navigate(item.href);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const id = item.href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/" + item.href);
      return;
    }
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = item.href;
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/85 backdrop-blur-sm"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-14 md:h-20 gap-4">
          <a href="/" onClick={handleLogoClick} className="flex items-center cursor-pointer shrink-0" aria-label="The Artist Interiors — back to top">
            <img src={logo} alt="The Artist Interiors — Mumbai interior design studio logo" className="h-10 md:h-16 w-auto" />
          </a>

          <div className="hidden xl:flex items-center gap-5 whitespace-nowrap">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="xl:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[110] bg-background flex flex-col items-center justify-center gap-7 overflow-y-auto py-20"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-foreground"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                onClick={() => { setMobileOpen(false); setTimeout(() => handleNav(item), 60); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-display-md text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
