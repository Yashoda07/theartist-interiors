import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Box, HardHat, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Interior Designing",
    tagline: "Spaces tailored to your life",
    accent: "from-[hsl(38,60%,55%)] to-[hsl(28,45%,45%)]",
    points: [
      "End-to-end design solutions tailored to lifestyle",
      "Space planning, concept & material selection",
      "Balance of functionality & aesthetics",
      "Residential specialization, personalized approach",
    ],
  },
  {
    icon: Box,
    title: "3D Visualization",
    tagline: "See it before it's built",
    accent: "from-[hsl(28,45%,45%)] to-[hsl(20,40%,42%)]",
    points: [
      "High-quality photorealistic renders",
      "Visualize spaces before execution",
      "Remote services available globally",
      "Fast turnaround, unlimited customization",
    ],
  },
  {
    icon: HardHat,
    title: "Site Execution",
    tagline: "Mumbai-based delivery",
    accent: "from-[hsl(25,55%,45%)] to-[hsl(20,40%,42%)]",
    points: [
      "Complete project management start to finish",
      "Coordination with contractors & vendors",
      "Quality control and timely delivery",
      "Transparent communication throughout",
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative section-padding section-spacing overflow-hidden"
    >
      {/* Backdrop accents */}
      <div className="pointer-events-none absolute top-20 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[hsl(38,60%,55%)]/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Services</p>
          <div className="gold-line mb-6" />
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="text-display-lg text-foreground">
              What We <span className="italic text-accent">Offer</span>
            </h2>
            <p className="text-base text-foreground/70 max-w-md flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-accent mt-1 shrink-0" />
              From concept to completion — comprehensive services crafted with precision and passion.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOpen = active === i;
            return (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.button
                  onClick={() => setActive(isOpen ? null : i)}
                  whileTap={{ scale: 0.985 }}
                  className={`relative w-full text-left border rounded-2xl overflow-hidden group transition-all duration-500 ${
                    isOpen
                      ? "shadow-2xl border-accent/50 bg-[hsl(35,30%,96%)]"
                      : "shadow-sm bg-card border-border md:hover:-translate-y-2 md:hover:shadow-xl md:hover:border-accent/40"
                  }`}
                  aria-expanded={isOpen}
                >
                  {/* Gradient header band */}
                  <div className={`h-2 bg-gradient-to-r ${s.accent}`} />

                  {/* Subtle warm tint on active */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-[0.03] pointer-events-none`}
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative p-7 md:p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-md transition-transform duration-500 ${
                          isOpen ? "rotate-6 scale-110" : "group-hover:rotate-3 group-hover:scale-105"
                        }`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-accent"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-accent mb-4">
                      {s.tagline}
                    </p>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="open"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2.5 pt-2 pb-4">
                            {s.points.map((p, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.06 }}
                                className="text-base text-foreground/85 flex items-start gap-2.5 leading-relaxed"
                              >
                                <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.accent} shrink-0`} />
                                {p}
                              </motion.li>
                            ))}
                          </ul>
                          <Link
                            to="/portfolio"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-accent hover:text-foreground transition-colors"
                          >
                            See it in our work →
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.p
                          key="closed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-base text-foreground/75 leading-relaxed"
                        >
                          {s.points[0]}.{" "}
                          <span className="text-accent font-medium">Tap to explore →</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-flex px-10 py-4 bg-foreground text-background text-label hover:bg-accent transition-all duration-300 hover-lift active:scale-95"
          >
            Let's Design Your Home!
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
