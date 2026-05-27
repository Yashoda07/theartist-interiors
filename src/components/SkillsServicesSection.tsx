import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Palette, Box, LayoutGrid, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Interior Designing",
    tagline: "Spaces tailored to your life",
    accent: "from-[hsl(38,60%,55%)] to-[hsl(28,45%,45%)]",
    category: "All",
    summary: "End-to-end design solutions tailored to your lifestyle — space planning, concept, and material selection.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    tagline: "See it before it's built",
    accent: "from-[hsl(28,45%,45%)] to-[hsl(20,40%,42%)]",
    category: "3D Visualization",
    summary: "High-quality photorealistic renders so you can visualize spaces before any execution begins.",
  },
  {
    icon: LayoutGrid,
    title: "Floor Planning",
    tagline: "Smart layouts, optimized flow",
    accent: "from-[hsl(25,55%,45%)] to-[hsl(20,40%,42%)]",
    category: "2D Floor Planning",
    summary: "Functional zoning, optimized circulation, and detailed dimensioned layouts tailored to your family.",
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
  const navigate = useNavigate();
  const openCategory = (cat: string) => navigate(`/portfolio?category=${encodeURIComponent(cat)}`);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16 items-stretch">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <motion.button
                  onClick={() => openCategory(s.category)}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full h-full text-left border rounded-2xl overflow-hidden group bg-card border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${s.accent}`} />
                  <div className="relative p-7 md:p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-md transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-accent mb-4">
                      {s.tagline}
                    </p>
                    <p className="text-base text-foreground/75 leading-relaxed flex-1">
                      {s.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
                      Tap to See Projects →
                    </span>
                  </div>
                </motion.button>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Moving skills band — RAF-based, seamless on all devices */}
        <AnimatedSection delay={0.2}>
          <div className="relative bg-card border-y border-border py-5 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <Marquee gradient={false} speed={45} pauseOnHover autoFill>
              {marqueeSkills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-foreground/70 mr-8 md:mr-16 whitespace-nowrap"
                >
                  • {skill}
                </span>
              ))}
            </Marquee>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsServicesSection;
