import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectLiving1 from "@/assets/project-living1.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectFullhome from "@/assets/project-fullhome.jpg";
import projectLiving2 from "@/assets/project-living2.jpg";

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Full Home"];

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
  {
    image: projectFullhome,
    title: "Raymond Realty — Full Home",
    category: "Full Home",
    desc: "Complete residential transformation — living, dining, and kitchen in open-plan harmony.",
  },
  {
    image: projectLiving2,
    title: "Private Residence — Living Room",
    category: "Living Room",
    desc: "Luxury high-rise living with panoramic city views and dark wood accents.",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding section-spacing bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Portfolio</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-12">
            Selected <span className="italic text-accent">Projects</span>
          </h2>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.2} className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-label px-5 py-2 border transition-all duration-300 ${
                active === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="image-reveal aspect-[4/3] mb-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
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
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
