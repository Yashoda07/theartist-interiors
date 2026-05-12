import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

type Item = { src: string; title: string; category: string };

const items: Item[] = [
  { src: "https://i.postimg.cc/dDRRq1s0/IMG-6287-(1).avif", title: "Bedroom Suite", category: "Bedroom" },
  { src: "https://i.postimg.cc/xqGdhV6L/IMG-8312.jpg", title: "Master Bedroom", category: "Bedroom" },
  { src: "https://i.postimg.cc/SYVksqPC/IMG-8424.avif", title: "Bedroom Refresh", category: "Bedroom" },
  { src: "https://i.postimg.cc/fJ9Vwqjf/Full-Size-Render.avif", title: "Living Render", category: "Living Room" },
  { src: "https://i.postimg.cc/62b8QDm1/IMG-6138.avif", title: "Lounge Concept", category: "Living Room" },
  { src: "https://i.postimg.cc/6707k7VS/IMG-7431.avif", title: "Modern Kitchen", category: "Kitchen" },
  { src: "https://i.postimg.cc/67gs5chN/IMG-4354-(1).avif", title: "Modular Kitchen", category: "Kitchen" },
  { src: "https://i.postimg.cc/NyShfDxv/IMG-4627.avif", title: "Kitchen Island", category: "Kitchen" },
  { src: "https://i.postimg.cc/BjZfhX61/IMG-7386.avif", title: "Open Kitchen", category: "Kitchen" },
  { src: "https://i.postimg.cc/gXWCZJfn/IMG-7452.avif", title: "Full Home Project", category: "Full Home" },
  { src: "https://i.postimg.cc/pykwmPC3/IMG-7629.avif", title: "Residence Transformation", category: "Full Home" },
];

const PortfolioSection = () => {
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  return (
    <section id="portfolio" className="section-padding section-spacing bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Portfolio</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-12">
            Selected <span className="text-accent">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
          {items.filter((p) => !hidden[p.src]).map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.04 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mb-4 md:mb-5 break-inside-avoid group cursor-pointer overflow-hidden rounded-lg bg-muted shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={p.src}
                alt={p.title}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                onError={() => setHidden((h) => ({ ...h, [p.src]: true }))}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="p-3">
                <h3 className="font-display text-lg text-foreground">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-12">
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
};

export default PortfolioSection;
