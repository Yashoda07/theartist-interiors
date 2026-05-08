import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Box, LayoutGrid, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Interior Designing",
    tagline: "Spaces tailored to your life",
    accent: "from-[hsl(38,60%,55%)] to-[hsl(28,45%,45%)]",
    category: "Living Room",
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
    category: "3D Renders",
    points: [
      "High-quality photorealistic renders",
      "Visualize spaces before execution",
      "Remote services available globally",
      "Fast turnaround, unlimited customization",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Floor Planning",
    tagline: "Smart layouts, optimized flow",
    accent: "from-[hsl(25,55%,45%)] to-[hsl(20,40%,42%)]",
    category: "Full Home",
    points: [
      "Functional zoning for every room",
      "Optimized circulation and natural light",
      "Detailed dimensioned layouts",
      "Tailored to lifestyle and family needs",
    ],
  },
];

const marqueeSkills = [
  "Space Planning",
  "Creative Thinking",
  "Strategic Communication",
  "Problem Solving",
  "Material Selection",
  "Client Management",
  "Project Coordination",
  "Trend Forecasting",
];

const SkillsServicesSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const navigate = useNavigate();

  const openCategory = (cat: string) => {
    navigate(`/portfolio?category=${encodeURIComponent(cat)}`);
  };

  return (
    <section id="skills" className="relative section-padding section-spacing overflow-hidden">
      <div className="pointer-events-none absolute top-20 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[hsl(38,60%,55%)]/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Skills & Services</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-3">
            Skills and Services <span className="text-accent">Provided</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mb-12 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-accent mt-1.5 shrink-0" />
            Areas of mastery and what we offer.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOpen = active === i;
            return (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.button
                  onClick={() => (isOpen ? openCategory(s.category) : setActive(i))}
                  whileTap={{ scale: 0.985 }}
                  className={`relative w-full text-left border rounded-2xl overflow-hidden group transition-all duration-500 h-full ${
                    isOpen
                      ? "shadow-2xl border-accent/50 bg-[hsl(35,40%,98%)]"
                      : "shadow-sm bg-card border-border md:hover:-translate-y-2 md:hover:shadow-xl md:hover:border-accent/40"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className={`h-2 bg-gradient-to-r ${s.accent}`} />
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
                                className="text-base text-foreground flex items-start gap-2.5 leading-relaxed"
                              >
                                <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.accent} shrink-0`} />
                                {p}
                              </motion.li>
                            ))}
                          </ul>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
                            View {s.category} projects →
                          </span>
                        </motion.div>
                      ) : (
                        <motion.p
                          key="closed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-base text-foreground/75 leading-relaxed"
                        >
                          {s.points[0]}.
                          <span className="block mt-2 text-accent font-medium">
                            Tap to explore →
                          </span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Moving skills band */}
        <AnimatedSection delay={0.2}>
          <div className="relative bg-card border-y border-border py-5 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex gap-12 md:gap-16 marquee-track whitespace-nowrap">
              {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-foreground/70"
                >
                  • {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsServicesSection;
