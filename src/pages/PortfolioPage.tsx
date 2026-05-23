import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Instagram, FileText, X, ArrowUp, ZoomIn, ZoomOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import AnimatedSection from "@/components/AnimatedSection";

type Project = { src: string; title?: string; category: string };

const livingRoomBase = [
  "https://i.postimg.cc/9F7Z1Lc4/Untitled-design5.png",
  "https://i.postimg.cc/8PD52GvX/Untitled-design112.png",
  "https://i.postimg.cc/jjrW8TZc/Untitled-design2.png",
  "https://i.postimg.cc/mrd2M16b/Untitled-design111.png",
  "https://i.postimg.cc/15m1rjGn/Untitled-design3.png",
  "https://i.postimg.cc/NjnrqVBd/Untitled-design115.png",
  "https://i.postimg.cc/hP5Gfdwk/Untitled-design116.png",
  "https://i.postimg.cc/jjQKQwgf/Untitled-design117.png",
  "https://i.postimg.cc/jdbKqBrN/living118.png",
  "https://i.postimg.cc/BnJGZQQb/Untitled-design119.png",
  "https://i.postimg.cc/ZKcMcP4t/Untitled-design120.png",
  "https://i.postimg.cc/wx5fq5tw/Untitled-design121.png",
  "https://i.postimg.cc/PJKQm4ZS/Untitled-design122.png",
  "https://i.postimg.cc/85RG4FZM/Untitled-design113.png",
  "https://i.postimg.cc/15NHjppv/Untitled-design114.png",
  "https://i.postimg.cc/9fdRVd5v/entrance1.png",
  "https://i.postimg.cc/7L3GD3rZ/entrance2.jpg",
  "https://i.postimg.cc/Sx9d2ynr/Untitled-design4.png",
];
const livingRoom: Project[] = livingRoomBase.map((src, i) => ({ src, category: "Living Room" }));

const bedroom: Project[] = [
  "https://i.postimg.cc/1XSpYWhV/Untitled-designb.png",
  "https://i.postimg.cc/QxQX3fLh/Untitled-designbb.png",
  "https://i.postimg.cc/ZnLDfBg8/Untitled-designbbb.png",
  "https://i.postimg.cc/cH0RF9NX/Untitled-designbbbb.png",
  "https://i.postimg.cc/BQHxGfQY/Untitled-designbbbbb.png",
  "https://i.postimg.cc/rmGkkpbv/Untitled-designb6.png",
  "https://i.postimg.cc/0jc1zB9n/Untitled-designb7.png",
  "https://i.postimg.cc/7ZB1KMZn/Untitled-designb9.png",
  "https://i.postimg.cc/SKp1pGhX/Untitled-designb8.png",
  "https://i.postimg.cc/v8LVPLqw/Untitled-designb10.png",
  "https://i.postimg.cc/x8TTpH80/Untitled-designb11.png",
  "https://i.postimg.cc/bwf4zP0J/Untitled-designb12.png",
  "https://i.postimg.cc/kGyrzXGj/Untitled-designb13.png",
].map((src, i) => ({ src, category: "Bedroom" }));

const kitchen: Project[] = [
  "https://i.postimg.cc/CMQzrPGB/kitchen1.png",
  "https://i.postimg.cc/s2x2J5Br/kitchen2.png",
  "https://i.postimg.cc/NM1v80km/kitchen3.png",
  "https://i.postimg.cc/VkcM4ZwB/kitchen4.png",
  "https://i.postimg.cc/PqS68pc6/kitchen5.png",
  "https://i.postimg.cc/cLr6NVWs/kitchen7.png",
  "https://i.postimg.cc/13wh6Hcd/kitchen8.png",
  "https://i.postimg.cc/05BLB3VG/kitchen9.png",
  "https://i.postimg.cc/YSXHqSzR/kitchen10.png",
].map((src, i) => ({ src, category: "Kitchen" }));

const fullHome: Project[] = [
  "https://i.postimg.cc/SxYwWrqS/fh5.png",
  "https://i.postimg.cc/nV6KXYdK/fh2.png",
  "https://i.postimg.cc/wTGCyPKz/fh3.png",
  "https://i.postimg.cc/02BTM3g9/fh4.png",
  "https://i.postimg.cc/WpQmd69G/fh1.png",
  "https://i.postimg.cc/15m1rjGn/Untitled-design3.png",
].map((src, i) => ({ src, category: "Full Home" }));

// Existing renders archive
const renders3d: Project[] = [
  Array.from({ length: 19 }, (_, i) => ({
  src: new URL(`../assets/renders/render-${i + 1}.jpg`, import.meta.url).href,
  category: "3D Visualization",
})),

// New 3D Concepts section — slightly different category band/background tone
// const concepts3d: Project[] = [

  // {
  //   src: "https://i.postimg.cc/yxWMfw5y/3D1.png",
  //   category: "3D Visualization",
  // },
  // {
  //   src: "https://i.postimg.cc/tJ7KrLwj/3D2.png",
  //   category: "3D Visualization",
  // },
  // {
  //   src: "https://i.postimg.cc/Rh8j2gxq/3D3.png",
  //   category: "3D Visualization",
  // },
  
  "https://i.postimg.cc/yxWMfw5y/3D1.png",
  "https://i.postimg.cc/tJ7KrLwj/3D2.png",
  "https://i.postimg.cc/Rh8j2gxq/3D3.png",
  "https://i.postimg.cc/v8NF1Zxm/3D4.png",
  "https://i.postimg.cc/SNBBr1GP/3D5.png",
  "https://i.postimg.cc/1zPLxg2w/3D6.png",
  "https://i.postimg.cc/76Zd6FxH/3D7.png",
  "https://i.postimg.cc/mkcn37zn/3D8.png",
  "https://i.postimg.cc/gjw7y3Lw/3D9.png",
  "https://i.postimg.cc/kMZzJYLJ/3D10.png",
  "https://i.postimg.cc/yxVmsKBL/3D11.png",
  "https://i.postimg.cc/6qYdQPpp/3D12.png",
  "https://i.postimg.cc/XN8KxrkY/3D13.png",
  "https://i.postimg.cc/HskwNT69/3D14.png",
  "https://i.postimg.cc/MK372g42/3D15.png",
  "https://i.postimg.cc/mg07hCB9/3D16.png",
  "https://i.postimg.cc/cJww3CJd/3D17.png",
  "https://i.postimg.cc/3RZGLqp4/3D18.png",
  "https://i.postimg.cc/cHc3DzYb/3D19.png",
  "https://i.postimg.cc/VvLC2FWP/3DLAST.png",
  "https://i.postimg.cc/pT0T5Mzk/3DLast-Last.png",
  
  // { src: "https://i.postimg.cc/Gtv8w5Kx/IMG-20250325-WA0014.jpg", title: "3D Concept 01", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/XqhWhYLT/Untitled-design.png", title: "3D Concept 02", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/9fdRVd5v/entrance1.png", title: "Entrance Concept 01", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/7L3GD3rZ/entrance2.jpg", title: "Entrance Concept 02", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/KkRjxgS4/living1.jpg", title: "Living Concept 01", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/XGpq4yS8/living2.jpg", title: "Living Concept 02", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/k6BGqt3p/living3.jpg", title: "Living Concept 03", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/vgcTb6FS/living4.jpg", title: "Living Concept 04", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/9Rr0Cq5k/living5.jpg", title: "Living Concept 05", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/TLFwwYf0/living6.jpg", title: "Living Concept 06", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/mzJDD2Bd/living7.jpg", title: "Living Concept 07", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/YvRsYdjg/bedroom1.jpg", title: "Bedroom Concept 01", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/fVCrm8kp/bedroom2.jpg", title: "Bedroom Concept 02", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/BjpVHmtd/bedroom4.jpg", title: "Bedroom Concept 03", category: "3D Concepts" },
  // { src: "https://i.postimg.cc/sMmN7TvF/bedroom5.jpg", title: "Bedroom Concept 04", category: "3D Concepts" },
];

const floorPlans: Project[] = [
<<<<<<< HEAD
  "https://i.postimg.cc/RhsdCQmW/1-FURNITURE-PLAN-1-pdf.png",
  "https://i.postimg.cc/sGW7wWvW/2-FURNITURE-PLAN-LABELLING-1-pdf.png",
  "https://i.postimg.cc/WtqG2BS8/3-PLAN-5-pdf.png",
  "https://i.postimg.cc/H8MXBMVb/4-FURNITURE-LAYOUT-pdf.png",
  "https://i.postimg.cc/V50qYx4K/5-PLAN-4-pdf.png",
  "https://i.postimg.cc/14VG9kMd/6-FLOOR-PLAN-pdf.png",
  "https://i.postimg.cc/SjY6yBVB/7-FURNITURE-PLAN-LABELLING-pdf.png",
  "https://i.postimg.cc/F1ky9MGw/8-FURNITURE-PLAN-2-pdf.png",
  "https://i.postimg.cc/z3HCJs01/9-PLAN-6-pdf.png",
  "https://i.postimg.cc/kDRQn0fC/EXSITING-LAYOUT-pdf.png",
].map((src, i) => ({ src, title: `Floor Plan ${String(i + 1).padStart(2, "0")}`, category: "2D Floor Planning" }));
=======
  "https://i.postimg.cc/yNqyzDPg/1-FURNITURE-PLAN-1-png.png",
  "https://i.postimg.cc/zDdwGt75/2-FURNITURE-PLAN-LABELLING-1-png.png",
  "https://i.postimg.cc/XNDFbZNS/3-PLAN-5-png.png",
  "https://i.postimg.cc/Kz8kXbd4/4-FURNITURE-LAYOUT.png",
  "https://i.postimg.cc/Z5JyP6VV/5-PLAN-4.png",
  "https://i.postimg.cc/GhwD2WDx/6-FLOOR-PLAN.png",
  "https://i.postimg.cc/SR8zdrBg/7-FURNITURE-PLAN-LABELLING.png",
  "https://i.postimg.cc/dQd7z5f3/9-PLAN-6.png",
  "https://i.postimg.cc/3NHw8Hqp/EXSITING-LAYOUT.png",
].map((src, i) => ({ src, category: "2D Floor Planning" }));
>>>>>>> fbf6137318ecfdd05581b1059b9b6bacc7cd5d8d

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

const projects: Project[] = [
  ...livingRoom,
  ...bedroom,
  ...kitchen,
  ...fullHome,
  ...renders3d,
  ...floorPlans,
];
const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Full Home", "3D Visualization", "2D Floor Planning"];

const PortfolioPage = () => {
  const location = useLocation();
  const [active, setActive] = useState("All");
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const [zoom, setZoom] = useState(1);
  const [brandOpen, setBrandOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const savedScroll = useRef(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat && categories.includes(cat)) setActive(cat);
    else setActive("All");
  }, [location.search]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openLightbox = (p: Project) => {
    savedScroll.current = window.scrollY;
    setZoom(1);
    setLightbox({ src: p.src, title: p.title });
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
    window.scrollTo({ top: savedScroll.current, behavior: "auto" });
  };
  const openBrand = () => {
    savedScroll.current = window.scrollY;
    setBrandOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeBrand = () => {
    setBrandOpen(false);
    document.body.style.overflow = "";
    window.scrollTo({ top: savedScroll.current, behavior: "auto" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (lightbox) closeLightbox();
      else if (brandOpen) closeBrand();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, brandOpen]);

  const filtered = (active === "All" ? projects : projects.filter((p) => p.category === active))
    .filter((p) => !hidden[p.src]);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-14 md:pt-20" />

      <section className="section-padding pt-6 pb-20 md:pt-10 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-label mb-4">Portfolio</p>
            <div className="gold-line mb-6" />
            <h2 className="text-display-lg text-foreground mb-12">
              Our <span className="italic text-accent">Projects</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-label px-5 py-2 border transition-all duration-300 active:scale-95 ${
                  active === cat
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/70 hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
            {filtered.map((p, i) => {
              const isConcept = p.category === "3D Concepts";
              const isFloor = p.category === "2D Floor Planning";
              return (
                <div
                  key={p.src + i}
                  onClick={() => openLightbox(p)}
                  className={`mb-4 md:mb-5 break-inside-avoid group cursor-zoom-in overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 active:scale-[0.99] ${
                    isConcept ? "bg-[hsl(30,18%,86%)] ring-1 ring-accent/20" : "bg-muted"
                  }`}
                  style={{ contentVisibility: "auto", containIntrinsicSize: "1px 360px" }}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    onError={() => setHidden((h) => ({ ...h, [p.src]: true }))}
                    className={`w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03] ${
                      isFloor ? "bg-white" : ""
                    }`}
                  />
                  <div className={`p-3 ${isConcept ? "bg-[hsl(30,22%,82%)]" : ""}`}>
                    <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Band — Instagram → Brand Chart → Pinterest */}
      <div className="bg-secondary border-y border-border py-7">
        <div className="section-padding max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 flex-wrap">
          <a
            href="https://www.instagram.com/theartistinteriors/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 px-7 py-3 bg-foreground text-background text-xs md:text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent transition-all duration-300 active:scale-95 shadow-md"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>

          <button
            onClick={openBrand}
            aria-label="Open Brand Chart"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-xs md:text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 active:scale-95 shadow-md"
          >
            <FileText className="w-5 h-5" />
            Brand Chart
          </button>

          <a
            href="https://www.pinterest.com/theartistinteriors/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="inline-flex items-center gap-2 px-7 py-3 bg-background text-foreground border border-foreground/30 text-xs md:text-sm font-medium uppercase tracking-[0.15em] hover:border-accent hover:text-accent transition-all duration-300 active:scale-95 shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.993 3.995-.282 1.193.599 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.084.345-.091.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.163-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            Pinterest
          </a>
        </div>
      </div>

      <Footer />
      <FloatingContactIcons />

      {/* Back-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-foreground/90 text-background backdrop-blur hover:bg-accent transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Image Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <button
              onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.25, 4)); }}
              aria-label="Zoom in"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.25, 1)); }}
              aria-label="Zoom out"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
          </div>
          <div
            className="max-w-[95vw] max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              style={{ transform: `scale(${zoom})`, transformOrigin: "center center", transition: "transform 0.25s ease" }}
              className="block max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain select-none cursor-zoom-in"
              onDoubleClick={() => setZoom((z) => (z >= 2 ? 1 : 2))}
              onClick={() => setZoom((z) => (z >= 2 ? 1 : z + 0.5))}
              draggable={false}
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs uppercase tracking-widest">
            {lightbox.title} · Tap to zoom
          </p>
        </div>
      )}

      {/* Brand Chart Modal — scrollable presentation */}
      {brandOpen && (
        <div
          className="fixed inset-0 z-[200] bg-background/70 backdrop-blur-xl animate-fade-in"
          onClick={closeBrand}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeBrand(); }}
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
    </main>
  );
};

export default PortfolioPage;
