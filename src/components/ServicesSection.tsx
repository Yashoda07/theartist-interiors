import { motion } from "framer-motion";
import { Palette, Box, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Interior Designing",
    tagline: "Spaces tailored to your life",
    points: [
      "End-to-end design solutions tailored to client lifestyle",
      "Space planning, concept development, material selection",
      "Perfect balance of functionality & aesthetics",
      "Residential specialization with personalized approach",
    ],
  },
  {
    icon: Box,
    title: "3D Visualization",
    tagline: "See it before it's built",
    points: [
      "High-quality photorealistic renders",
      "Helps clients visualize spaces before execution",
      "Remote services available globally",
      "Fast turnaround and unlimited customization",
    ],
  },
  {
    icon: HardHat,
    title: "Site Execution",
    tagline: "Mumbai-based project delivery",
    points: [
      "Complete project management from start to finish",
      "Coordination with contractors and vendors",
      "Quality control and timely delivery",
      "Transparent communication throughout the process",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-spacing">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">Services</p>
        <div className="gold-line mb-6" />
        <h2 className="text-display-lg text-foreground mb-4">
          What We <span className="italic text-accent">Offer</span>
        </h2>
        <p className="text-body-lg text-muted-foreground max-w-2xl mb-16">
          From concept to completion — comprehensive interior design services crafted with precision and passion.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group bg-card border border-border p-8 md:p-10 hover:border-accent/40 transition-all duration-500 h-full flex flex-col"
            >
              <s.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="text-label text-accent mb-6">{s.tagline}</p>
              <ul className="space-y-3 flex-1">
                {s.points.map((p, j) => (
                  <li key={j} className="text-foreground/70 flex items-start gap-3 text-sm leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/portfolio"
                className="mt-6 text-accent text-sm font-medium uppercase tracking-wider hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
              >
                View Our Work →
              </Link>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5} className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-flex px-10 py-4 bg-foreground text-background text-label hover:bg-accent transition-all duration-300 hover-lift"
        >
          Let's Design Your Home!
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesSection;
