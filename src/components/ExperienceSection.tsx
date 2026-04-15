import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
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
    accent: "from-[hsl(28,45%,45%)] to-[hsl(38,60%,55%)]",
    border: "border-l-[hsl(28,45%,45%)]",
    dot: "bg-[hsl(28,45%,45%)]",
    shadow: "shadow-[0_4px_24px_-6px_hsl(28,45%,45%,0.18)]",
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
    accent: "from-[hsl(25,30%,35%)] to-[hsl(30,25%,50%)]",
    border: "border-l-[hsl(25,30%,35%)]",
    dot: "bg-[hsl(25,30%,35%)]",
    shadow: "shadow-[0_4px_24px_-6px_hsl(25,30%,35%,0.15)]",
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
    accent: "from-[hsl(32,20%,40%)] to-[hsl(35,30%,55%)]",
    border: "border-l-[hsl(32,20%,40%)]",
    dot: "bg-[hsl(32,20%,40%)]",
    shadow: "shadow-[0_4px_24px_-6px_hsl(32,20%,40%,0.15)]",
  },
  {
    period: "Jan 2021 – Sep 2022",
    title: "3D Visualizer",
    company: "Shrishti Interior Designer Studio",
    responsibilities: [
      "Created photorealistic 3D renders for client presentations",
      "Collaborated with designers to translate concepts into visuals",
      "Mastered industry-standard visualization tools",
    ],
    accent: "from-[hsl(20,25%,32%)] to-[hsl(28,30%,48%)]",
    border: "border-l-[hsl(20,25%,32%)]",
    dot: "bg-[hsl(20,25%,32%)]",
    shadow: "shadow-[0_4px_24px_-6px_hsl(20,25%,32%,0.15)]",
  },
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

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className={`w-4 h-4 rounded-full ${exp.dot} ring-4 ring-background`}
                  />
                </div>

                {/* Spacer for left side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 40 : -40, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:ml-8" : "md:mr-8"} bg-background border border-border/60 rounded-xl p-6 md:p-8 ${exp.shadow} hover:shadow-lg transition-all duration-500 relative overflow-hidden group`}
                >
                  {/* Accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  {/* Period badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-gradient-to-r ${exp.accent} text-white mb-4`}>
                    {exp.period}
                  </span>

                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-accent/80 mb-5">{exp.company}</p>

                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((r, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${exp.dot} mt-1.5 shrink-0 opacity-70`} />
                        {r}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
