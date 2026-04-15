import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import projectLiving1 from "@/assets/project-living1.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";

const projects = [
  {
    image: projectLiving1,
    title: "Lodha Crown — Living Room",
    category: "Living Room",
    desc: "Warm contemporary living space with custom furniture and layered lighting design.",
  },
  {
    image: projectBedroom,
    title: "Raymond Realty — Master Bedroom",
    category: "Bedroom",
    desc: "Serene master suite with bespoke headboard and ambient cove lighting.",
  },
  {
    image: projectKitchen,
    title: "Lodha Crown — Kitchen",
    category: "Kitchen",
    desc: "Modern modular kitchen with marble countertops and integrated appliances.",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding section-spacing bg-card">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">Portfolio</p>
        <div className="gold-line mb-6" />
        <h2 className="text-display-lg text-foreground mb-12">
          Selected <span className="italic text-accent">Projects</span>
        </h2>
      </AnimatedSection>

      <motion.div layout className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="image-reveal aspect-[4/3] mb-4">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="relative">
                <p className="text-label text-accent mb-1">{p.category}</p>
                <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-body text-muted-foreground text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>

      <AnimatedSection delay={0.4} className="text-center mt-12">
        <Link
          to="/portfolio"
          className="inline-flex px-10 py-4 bg-foreground text-background text-label hover:bg-accent transition-all duration-300 hover-lift"
        >
          Click Here to See More
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default PortfolioSection;
