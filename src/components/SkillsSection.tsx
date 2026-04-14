import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const coreSkills = [
  { name: "Interior Designing", level: 95 },
  { name: "3D Visualization", level: 90 },
  { name: "Site Execution", level: 85 },
];

const expertise = [
  "Space Planning",
  "Creative Thinking",
  "Strategic Communication",
  "Problem Solving",
  "Material Selection",
  "Client Management",
  "Project Coordination",
  "Trend Forecasting",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding section-spacing">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">Skills & Expertise</p>
        <div className="gold-line mb-6" />
        <h2 className="text-display-lg text-foreground mb-16">
          Areas of <span className="italic text-accent">Mastery</span>
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Progress bars */}
        <div className="space-y-10">
          {coreSkills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.15}>
              <div className="flex justify-between mb-3">
                <span className="font-display text-xl text-foreground">{skill.name}</span>
                <span className="text-label text-accent">{skill.level}%</span>
              </div>
              <div className="h-1 bg-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-accent"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Expertise grid */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 gap-4">
            {expertise.map((e, i) => (
              <motion.div
                key={e}
                whileHover={{ scale: 1.03, x: 4 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 p-4 border border-border hover:border-accent/40 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-body text-foreground text-sm">{e}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SkillsSection;
