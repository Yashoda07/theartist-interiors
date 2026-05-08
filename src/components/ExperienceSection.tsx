import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import { Palette, Ruler, Home, Award } from "lucide-react";

const experiences = [
  {
    period: "Jan 2021 – Sep 2022",
    title: "3D Visualizer",
    company: "Shrishti Interior Designer Studio",
    responsibilities: [
      "Created photorealistic 3D renders for client presentations",
      "Collaborated with designers to translate concepts into visuals",
      "Mastered industry-standard visualization tools",
      "Optimized lighting and texture workflows for faster delivery",
    ],
    Icon: Palette,
  },
  {
    period: "Sep 2022 – Dec 2022",
    title: "Junior Interior Designer",
    company: "Transatlantic LTD",
    responsibilities: [
      "Assisted senior designers on large-scale projects",
      "Prepared design presentations and mood boards",
      "Coordinated with procurement teams",
      "Drafted technical layouts and revision sets",
    ],
    Icon: Ruler,
  },
  {
    period: "Jan 2023 – Dec 2024",
    title: "Interior Designer",
    company: "Mystique Design Studio UG",
    responsibilities: [
      "Conceptualized and executed residential projects",
      "Collaborated with vendors and contractors",
      "Material selection and space planning",
      "Led client presentations and design sign-offs",
    ],
    Icon: Home,
  },
  {
    period: "Sep 2022 – Present",
    title: "Founder & CEO",
    company: "The Artist Interiors",
    responsibilities: [
      "Lead end-to-end residential interior design projects",
      "3D visualization services for global clients",
      "Site execution and project management in Mumbai",
      "Client relationship & business development",
    ],
    Icon: Award,
  },
];

const cardTints = [
  "from-[hsl(38,55%,97%)] to-[hsl(38,45%,93%)] border-[hsl(38,55%,55%)]",
  "from-[hsl(30,40%,96%)] to-[hsl(28,35%,92%)] border-[hsl(28,50%,50%)]",
  "from-[hsl(25,40%,96%)] to-[hsl(20,32%,91%)] border-[hsl(20,45%,45%)]",
  "from-[hsl(28,50%,95%)] to-[hsl(25,40%,90%)] border-[hsl(25,55%,42%)]",
];

const ExperienceSection = () => {
  const [active, setActive] = useState(experiences.length - 1);

  return (
    <section
      id="experience"
      className="relative section-padding py-16 md:py-20 overflow-hidden bg-gradient-to-br from-card via-background to-secondary/40"
    >
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-[hsl(38,60%,55%)]/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-label mb-3">Experience</p>
              <div className="gold-line mb-4" />
              <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-foreground">
                A Journey of <span className="italic text-accent">Growth</span>
              </h2>
            </div>
            <p className="text-sm text-foreground/60 max-w-xs">
              Tap any milestone to explore the story behind it.
            </p>
          </div>
        </AnimatedSection>

        {/* Curved roadmap */}
        <div className="relative">
          {/* SVG curve - desktop, much more visible */}
          <svg
            className="hidden md:block absolute left-0 right-0 top-10 w-full h-28 pointer-events-none"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="roadGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(38,70%,50%)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="hsl(28,55%,40%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(25,60%,38%)" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M 20 60 Q 250 0 500 50 T 980 40"
              fill="none"
              stroke="url(#roadGrad)"
              strokeWidth="5"
              strokeDasharray="10 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Milestones row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
            {experiences.map((exp, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative group bg-gradient-to-br ${cardTints[i]} border-2 rounded-xl p-3 md:p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "shadow-xl scale-[1.03] ring-2 ring-accent/40"
                      : "shadow-sm hover:shadow-md md:hover:-translate-y-1 opacity-90 hover:opacity-100"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-accent to-[hsl(28,55%,40%)] flex items-center justify-center shadow-md transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                      <exp.Icon className="w-5 h-5 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-foreground/70">
                      Phase {i + 1}
                    </span>
                  </div>
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-foreground/75 leading-tight mb-1">
                    {exp.period}
                  </p>
                  <h3 className="font-display text-base md:text-lg text-foreground leading-tight">
                    {exp.title}
                  </h3>
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="mt-6 md:mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-card/80 backdrop-blur border border-border rounded-2xl p-5 md:p-7 shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground mb-2">
                      {experiences[active].period}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                      {experiences[active].title}
                    </h3>
                    <p className="text-base font-medium text-accent mt-1">
                      {experiences[active].company}
                    </p>
                  </div>
                  {(() => {
                    const ActiveIcon = experiences[active].Icon;
                    return (
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent to-[hsl(28,55%,40%)] flex items-center justify-center shadow-lg">
                        <ActiveIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    );
                  })()}
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {experiences[active].responsibilities.map((r, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + j * 0.06 }}
                      className="text-base text-foreground/85 flex items-start gap-2 leading-relaxed"
                    >
                      <ChevronRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                      <span>{r}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
