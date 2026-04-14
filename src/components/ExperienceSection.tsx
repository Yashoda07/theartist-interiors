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
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding section-spacing bg-card">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">Experience</p>
        <div className="gold-line mb-6" />
        <h2 className="text-display-lg text-foreground mb-16">
          A Journey of <span className="italic text-accent">Growth</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="group border-b border-border py-10 cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <p className="text-label text-accent min-w-[180px] pt-1">{exp.period}</p>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="text-body text-muted-foreground flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
