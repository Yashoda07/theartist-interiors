import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home", type: "hash" },
  { label: "About", href: "#about", type: "hash" },
  { label: "Experience", href: "#experience", type: "hash" },
  { label: "Services", href: "#services", type: "hash" },
  { label: "Portfolio", href: "/portfolio", type: "link" },
  { label: "Skills", href: "#skills", type: "hash" },
  { label: "Testimonials", href: "#testimonials", type: "hash" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.type === "hash" && location.pathname !== "/") {
      window.location.href = "/" + item.href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="The Artist Interiors"
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex px-6 py-2.5 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-[0.12em] hover:bg-accent/90 transition-all duration-300"
          >
            Book Consultation
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-foreground"
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
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-foreground"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            {navItems.map((item, i) =>
              item.type === "link" ? (
                <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-display-md text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => { setMobileOpen(false); handleNavClick(item); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-display-md text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              )
            )}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navItems.length * 0.05 }}>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-display-md text-accent hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
