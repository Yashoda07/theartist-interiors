import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Instagram, FileText, X, ArrowUp, ZoomIn, ZoomOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import FloatingContactIcons from "@/components/FloatingContactIcons";
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
  ...[
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
    // "https://i.postimg.cc/MK372g42/3D15.png",
    "https://i.postimg.cc/mg07hCB9/3D16.png",
    "https://i.postimg.cc/cJww3CJd/3D17.png",
    "https://i.postimg.cc/3RZGLqp4/3D18.png",
    "https://i.postimg.cc/cHc3DzYb/3D19.png",
    "https://i.postimg.cc/VvLC2FWP/3DLAST.png",
    "https://i.postimg.cc/pT0T5Mzk/3DLast-Last.png",
  ].map((src) => ({ src, category: "3D Visualization" })),
  ...Object.values(import.meta.glob("../assets/renders/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>).map((src) => ({
    src,
    category: "3D Visualization",
  })),
];

const floorPlans: Project[] = [
  "https://i.postimg.cc/7PQkNrWJ/1-FURNITURE-PLAN-1.png",
  "https://i.postimg.cc/TYzvZqGT/2-FURNITURE-PLAN-LABELLING-1.png",
  "https://i.postimg.cc/JhmVhrsC/3-PLAN-5.png",
  "https://i.postimg.cc/7LVvGFzM/4-FURNITURE-LAYOUT.png",
  "https://i.postimg.cc/DZjt515R/5-PLAN-4.png",
  "https://i.postimg.cc/PJ00nhgb/6-FLOOR-PLAN.png",
  "https://i.postimg.cc/J7FfkcsK/7-FURNITURE-PLAN-LABELLING.png",
  "https://i.postimg.cc/W1Lx9N6q/8-FURNITURE-PLAN-2.png",
  "https://i.postimg.cc/QMjw3fyP/9-PLAN-6.png",
].map((src, i) => ({ src, category: "2D Floor Plans" }));


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
const categories = ["Living Room", "Bedroom", "Kitchen", "Full Home", "3D Visualization", "2D Floor Plans"];

const PortfolioPage = () => {
  const location = useLocation();
  const [active, setActive] = useState("3D Vizualization");
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
    else setActive("3D Visualization");
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

  const filtered = projects
  .filter((p) => p.category === active)
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

          <AnimatedSection
            delay={0.2}
            className="grid grid-cols-3 mb-8 md:mb-12 border border-border rounded-lg overflow-hidden bg-card"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative
                h-[58px] sm:h-[62px] md:h-[66px]
                px-2 sm:px-3 md:px-4
                flex items-center justify-center
                text-center
                
                text-[9px]
                sm:text-[10px]
                md:text-xs
                xl:text-sm
                
                font-medium uppercase
                
                tracking-[0.18em]
                md:tracking-[0.22em]
                
                leading-[1.25]
                
                border-r border-b border-border
                nth-[3n]:border-r-0
                xl:border-b-0
                
                transition-all duration-300
                
                ${
                  active === cat
                    ? "bg-[#2a1d14] text-white"
                    : "bg-card text-foreground/75 hover:bg-secondary hover:text-accent"
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

          <button
            onClick={openBrand}
            aria-label="Open Brand Chart"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-xs md:text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 active:scale-95 shadow-md"
          >
            <FileText className="w-5 h-5" />
            Brand Chart
          </button>

        </div>
      </div>

      <Footer />
      {/* <FloatingContactIcons /> */}

      {/* Back-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="group fixed bottom-6 left-6 z-40 flex items-center gap-2 overflow-hidden rounded-full bg-foreground/90 text-background backdrop-blur shadow-lg transition-all duration-300 hover:bg-accent active:scale-95 px-3 py-3"
        >
          <ArrowUp className="w-5 h-5 shrink-0" />

          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100">Go to Top</span>
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
