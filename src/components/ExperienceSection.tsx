import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    period: "Jan 2021 – Sep 2022",
    title: "3D Visualizer",
    company: "Shrishti Interior Designer Studio",
    responsibilities: [
      "Created photorealistic 3D renders for client presentations",
      "Collaborated with designers to translate concepts into visuals",
      "Mastered industry-standard visualization tools",
    ],
    icon: "🎨",
  },
  {
    period: "Sep 2022 – Dec 2022",
    title: "Junior Interior Designer",
    company: "Transatlantic LTD",
    responsibilities: [
      "Assisted senior designers on large-scale projects",
      "Prepared design presentations and mood boards",
      "Coordinated with procurement teams",
    ],
    icon: "📐",
  },
  {
    period: "Jan 2023 – Dec 2024",
    title: "Interior Designer",
    company: "Mystique Design Studio UG",
    responsibilities: [
      "Conceptualized and executed residential projects",
      "Collaborated with vendors and contractors",
      "Material selection and space planning",
    ],
    icon: "🏠",
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
    icon: "🏆",
  },
];

const cardTints = [
  "from-[hsl(38,55%,92%)] to-[hsl(38,40%,86%)] border-[hsl(38,55%,60%)]",
  "from-[hsl(28,45%,91%)] to-[hsl(28,35%,84%)] border-[hsl(28,50%,52%)]",
  "from-[hsl(20,40%,90%)] to-[hsl(20,32%,83%)] border-[hsl(20,45%,48%)]",
  "from-[hsl(25,50%,89%)] to-[hsl(25,38%,82%)] border-[hsl(25,55%,45%)]",
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
          {/* SVG curve - desktop */}
          <svg
            className="hidden md:block absolute left-0 right-0 top-8 w-full h-24 pointer-events-none"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="roadGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(38,60%,55%)" stopOpacity="0.25" />
                <stop offset="50%" stopColor="hsl(28,45%,45%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(25,55%,45%)" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              d="M 20 60 Q 250 0 500 50 T 980 40"
              fill="none"
              stroke="url(#roadGrad)"
              strokeWidth="3"
              strokeDasharray="6 8"
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
                    <span className={`text-2xl md:text-3xl transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                      {exp.icon}
                    </span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-foreground/60">
                      Phase {i + 1}
                    </span>
                  </div>
                  <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-foreground/70 leading-tight mb-1">
                    {exp.period}
                  </p>
                  <h3 className="font-display text-sm md:text-base text-foreground leading-tight">
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
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground mb-2">
                      {experiences[active].period}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                      {experiences[active].title}
                    </h3>
                    <p className="text-sm font-medium text-accent mt-0.5">
                      {experiences[active].company}
                    </p>
                  </div>
                  <span className="text-4xl md:text-5xl">{experiences[active].icon}</span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {experiences[active].responsibilities.map((r, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + j * 0.06 }}
                      className="text-sm text-foreground/80 flex items-start gap-2 leading-relaxed"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-accent mt-1 shrink-0" />
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
