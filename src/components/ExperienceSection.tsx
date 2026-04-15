import { motion } from "framer-motion";
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
    title: "CEO & Founder | Senior Interior Designer",
    company: "The Artist Interiors",
    responsibilities: [
      "Lead end-to-end residential interior design projects",
      "3D visualization services for global clients",
      "Site execution and project management in Mumbai",
      "Client relationship management and business development",
    ],
    icon: "🏆",
  },
];

const cardColors = [
  { bg: "bg-[hsl(38,50%,94%)]", border: "border-[hsl(38,60%,65%)]", dot: "bg-[hsl(38,60%,55%)]", phase: "text-[hsl(38,55%,40%)]" },
  { bg: "bg-[hsl(28,40%,93%)]", border: "border-[hsl(28,45%,55%)]", dot: "bg-[hsl(28,45%,45%)]", phase: "text-[hsl(28,40%,35%)]" },
  { bg: "bg-[hsl(20,35%,92%)]", border: "border-[hsl(20,40%,50%)]", dot: "bg-[hsl(20,40%,42%)]", phase: "text-[hsl(20,35%,32%)]" },
  { bg: "bg-[hsl(25,45%,91%)]", border: "border-[hsl(25,50%,45%)]", dot: "bg-[hsl(25,50%,38%)]", phase: "text-[hsl(25,45%,30%)]" },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding section-spacing bg-card">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">Experience</p>
        <div className="gold-line mb-6" />
        <h2 className="text-display-lg text-foreground mb-16">
          A Journey of <span className="italic text-accent">Growth</span>
        </h2>
      </AnimatedSection>

      {/* Roadmap Timeline */}
      <div className="relative">
        {/* Winding road SVG - desktop only */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1">
          <div className="w-full h-full bg-gradient-to-b from-accent/40 via-accent/60 to-accent/30 rounded-full" />
          {/* Dashed center line */}
          <div className="absolute inset-0 w-px left-1/2 -translate-x-1/2 border-l-2 border-dashed border-background/60" />
        </div>

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 via-accent/60 to-accent/30 rounded-full">
          <div className="absolute inset-0 w-px left-1/2 -translate-x-1/2 border-l-2 border-dashed border-background/60" />
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, i) => {
            const color = cardColors[i];
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="relative">
                {/* Phase label - desktop */}
                <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isLeft ? "left-[calc(50%+2rem)]" : "right-[calc(50%+2rem)]"} items-center gap-2`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className={`${color.phase} font-display text-sm font-semibold uppercase tracking-wider whitespace-nowrap`}
                  >
                    Phase {i + 1}
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 250 }}
                  className={`absolute left-5 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full ${color.dot} flex items-center justify-center text-lg shadow-md ring-4 ring-background`}
                >
                  {exp.icon}
                </motion.div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[44%] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ y: -3, scale: 1.015 }}
                    className={`${color.bg} border ${color.border} rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-400 relative overflow-hidden group`}
                  >
                    {/* Period badge */}
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider ${color.dot} text-white mb-3`}>
                      {exp.period}
                    </span>

                    <h3 className="font-display text-lg text-foreground mb-0.5 group-hover:text-accent transition-colors duration-300 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-medium text-accent/80 mb-3">{exp.company}</p>

                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: 8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.2 + j * 0.06 }}
                          className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed"
                        >
                          <span className={`w-1 h-1 rounded-full ${color.dot} mt-1.5 shrink-0 opacity-60`} />
                          {r}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Arrow pointing to timeline */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 ${color.bg} border ${color.border} ${isLeft ? "right-[-7px] border-l-0 border-b-0" : "left-[-7px] border-r-0 border-t-0"}`} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
