import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import projectLiving1 from "@/assets/project-living1.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectFullhome from "@/assets/project-fullhome.jpg";
import projectLiving2 from "@/assets/project-living2.jpg";
import render1 from "@/assets/renders/render-1.jpg";
import render5 from "@/assets/renders/render-5.jpg";

type Item =
  | { type: "image"; src: string; title: string; category: string }
  | { type: "video"; src: string; poster: string; title: string; category: string };

const items: Item[] = [
  { type: "image", src: projectLiving1, title: "Lodha Crown — Living", category: "Living Room" },
  { type: "image", src: projectBedroom, title: "Master Bedroom", category: "Bedroom" },
  { type: "image", src: render1, title: "3D Concept 01", category: "3D Renders" },
  { type: "image", src: projectKitchen, title: "Modular Kitchen", category: "Kitchen" },
  { type: "image", src: projectFullhome, title: "Full Home Transformation", category: "Full Home" },
  { type: "image", src: render5, title: "3D Concept 05", category: "3D Renders" },
  { type: "image", src: projectLiving2, title: "Private Residence", category: "Living Room" },
  {
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-a-luxury-living-room-with-a-fireplace-3071/1080p.mp4",
    poster: projectLiving1,
    title: "Walkthrough — Lodha Crown",
    category: "Walkthrough",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding section-spacing bg-card">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">Portfolio</p>
        <div className="gold-line mb-6" />
        <h2 className="text-display-lg text-foreground mb-12">
          Selected <span className="text-accent">Projects</span>
        </h2>
      </AnimatedSection>

      {/* Pinterest-style masonry via CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
        {items.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            whileHover={{ y: -4 }}
            className="mb-4 md:mb-5 break-inside-avoid group cursor-pointer overflow-hidden rounded-lg bg-muted shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            {p.type === "image" ? (
              <img
                src={p.src}
                alt={p.title}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <video
                src={p.src}
                poster={p.poster}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
                className="w-full h-auto block"
              />
            )}
            <div className="p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{p.category}</p>
              <h3 className="font-display text-lg text-foreground mt-0.5">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatedSection delay={0.3} className="text-center mt-12">
        <Link
          to="/portfolio"
          className="inline-flex px-10 py-4 bg-foreground text-background text-label hover:bg-accent transition-all duration-300 hover-lift active:scale-95"
        >
          See Full Portfolio
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default PortfolioSection;
