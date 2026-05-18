import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

type Item = { src: string; title: string; category: string };

const items: Item[] = [
  { src: "https://i.postimg.cc/tCZwkG1M/Untitled-design8.png", title: "Curved Accent Bedroom", category: "Bedroom" },
  { src: "https://i.postimg.cc/qvNgBRZZ/Untitled-design.png", title: "Warm Ambient Bedroom", category: "Bedroom" },
  { src: "https://i.postimg.cc/jq1p0SPD/Untitled-design1.png", title: "Sculpted Cove Bedroom", category: "Bedroom" },
  { src: "https://i.postimg.cc/15m1rjGn/Untitled-design3.png", title: "Contemporary Family Lounge", category: "Living Room" },
  { src: "https://i.postimg.cc/Sx9d2ynr/Untitled-design4.png", title: "Contemporary Dining Lounge", category: "Living Room" },
  { src: "https://i.postimg.cc/9F7Z1Lc4/Untitled-design5.png", title: "Media Wall & TV Unit", category: "Living Room" },
  { src: "https://i.postimg.cc/T18gXb9K/Untitled-design6.png", title: "Minimal Parallel Kitchen", category: "Kitchen" },
  { src: "https://i.postimg.cc/jjrW8TZc/Untitled-design2.png", title: "Luxury Living Room", category: "Living Room" },
  { src: "https://i.postimg.cc/MHd6Y2vJ/Untitled-design7.png", title: "Illuminated Display Kitchen", category: "Kitchen" },
  { src: "https://i.postimg.cc/5tRkLPxr/Untitled-design9.png", title: "Premium Residence Interior", category: "Full Home" },
  { src: "https://i.postimg.cc/Y9BY5g8M/Untitled-design10.png", title: "Residence Transformation", category: "Full Home" },
  { src: "https://i.postimg.cc/SQgbDpyW/Untitled-design11.png", title: "Elegant Entrance Door", category: "Living Room" },
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
