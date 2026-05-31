import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ImageLightbox from "./ImageLightbox";

type Item = { src: string; title: string; category: string };

const items: Item[] = [
  { src: "https://i.postimg.cc/1XSpYWhV/Untitled-designb.png", title: "Curved Accent Bedroom", category: "Bedroom" },
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

const brandChartImages = [
  "https://i.postimg.cc/3JYptrVJ/1.png",
  "https://i.postimg.cc/7Yw7KPdC/2.png",
  "https://i.postimg.cc/J4MJp7vB/3.png",
  "https://i.postimg.cc/ZK43wY2W/4.png",
  "https://i.postimg.cc/SNk8gQ3Y/5.png",
  "https://i.postimg.cc/RV4fgCyt/6.png",
  "https://i.postimg.cc/FsNcTF8x/7.png",
  "https://i.postimg.cc/J4MJp7vq/8.png",
  "https://i.postimg.cc/c40YF12h/9.png",
  "https://i.postimg.cc/SNk8gQ3V/10.png",
  "https://i.postimg.cc/PrTZSf9S/11.png",
];

const PortfolioSection = () => {
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [brandOpen, setBrandOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const visibleItems = items.filter((p) => !hidden[p.src]);
  const current = lightboxIdx !== null ? visibleItems[lightboxIdx] : null;

  const goPrev = () => setLightboxIdx((i) => (i === null ? null : (i - 1 + visibleItems.length) % visibleItems.length));
  const goNext = () => setLightboxIdx((i) => (i === null ? null : (i + 1) % visibleItems.length));

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "0px", threshold: 0.05 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (brandOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setBrandOpen(false); };
      window.addEventListener("keydown", onKey);
      return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
    }
  }, [brandOpen]);

  return (
    <section id="portfolio" className="relative section-padding section-spacing bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Portfolio</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-12">
            Selected <span className="text-accent">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
          {visibleItems.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.04 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightboxIdx(i)}
              className="mb-4 md:mb-5 break-inside-avoid group cursor-zoom-in overflow-hidden rounded-lg bg-muted shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={p.src}
                alt={p.title}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i < 2 ? "high" : "auto"}
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

      {/* Floating Brand Chart button */}
      <motion.button
        onClick={() => setBrandOpen(true)}
        aria-label="Open Brand Chart"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground shadow-2xl ring-1 ring-accent/30 backdrop-blur-md text-xs md:text-sm font-semibold uppercase tracking-[0.18em] hover:bg-accent/90 transition-colors"
      >
        <FileText className="w-4 h-4 md:w-5 md:h-5" />
        <span>Brand Chart</span>
      </motion.button>

      <ImageLightbox
        src={current?.src ?? null}
        alt={current?.title}
        onClose={() => setLightboxIdx(null)}
        hasNav
        onPrev={goPrev}
        onNext={goNext}
      />

      {/* Brand Chart Modal */}
      {brandOpen && (
        <div
          className="fixed inset-0 z-[200] bg-background/70 backdrop-blur-xl animate-fade-in"
          onClick={() => setBrandOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setBrandOpen(false); }}
            aria-label="Close brand chart"
            className="fixed top-4 right-4 z-10 w-11 h-11 rounded-full bg-foreground text-background hover:bg-accent flex items-center justify-center shadow-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="h-full w-full overflow-y-auto py-10 px-4 md:px-8 flex flex-col items-center gap-6 scroll-smooth"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-label text-foreground/70 mb-2">Brand Chart</p>
            {brandChartImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Brand chart slide ${idx + 1}`}
                loading={idx < 2 ? "eager" : "lazy"}
                decoding="async"
                className="w-full max-w-3xl rounded-md shadow-2xl bg-white"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
