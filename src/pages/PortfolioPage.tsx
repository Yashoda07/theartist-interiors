import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Instagram, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import AnimatedSection from "@/components/AnimatedSection";

type Project = { src: string; title: string; category: string; type?: "image" | "video" };

const livingRoom: Project[] = [
  "https://i.postimg.cc/qh4snVw1/IMG-7397.avif",
  "https://i.postimg.cc/fJ9Vwqjf/Full-Size-Render.avif",
  "https://i.postimg.cc/9w4rwJ6t/Image-20231204-222511-016-(1).jpg",
  "https://i.postimg.cc/hf6Vs7Ms/IMG-20260506-WA0022.jpg",
  "https://i.postimg.cc/SJMny17c/IMG-3880.avif",
  "https://i.postimg.cc/hfdXSZb7/IMG-3943.avif",
  "https://i.postimg.cc/N9jyBgp9/IMG-4011.avif",
  "https://i.postimg.cc/jw3DjGFy/IMG-6104.avif",
  "https://i.postimg.cc/62b8QDm1/IMG-6138.avif",
  "https://i.postimg.cc/gnXZx2dr/IMG-6174-(1).avif",
  "https://i.postimg.cc/grBhcZ9z/IMG-7408.avif",
  "https://i.postimg.cc/wywmmt7g/IMG-7413.avif",
  "https://i.postimg.cc/6707k7VS/IMG-7431.avif",
  "https://i.postimg.cc/xJ1kn0t8/IMG-8354.avif",
  "https://i.postimg.cc/nCjDXhZK/IMG-8375.avif",
  "https://i.postimg.cc/8FDJXdvc/IMG-8418.avif",
].map((src, i) => ({ src, title: `Living Room ${String(i + 1).padStart(2, "0")}`, category: "Living Room" }));

const bedroom: Project[] = [
  "https://i.postimg.cc/w35BZYw9/IMG-20260506-WA0021.jpg",
  "https://i.postimg.cc/VdYq58vz/IMG-3789-(1).avif",
  "https://i.postimg.cc/V5PBQMcq/IMG-3797.avif",
  "https://i.postimg.cc/3WQC5pHv/IMG-6274.avif",
  "https://i.postimg.cc/dDRRq1s0/IMG-6287-(1).avif",
  "https://i.postimg.cc/4Y04Vfxj/IMG-6328.avif",
  "https://i.postimg.cc/PC7fYXqj/IMG-6350.avif",
  "https://i.postimg.cc/WqV1z51L/IMG-6374.avif",
  "https://i.postimg.cc/xqGdhV6L/IMG-8312.jpg",
  "https://i.postimg.cc/WqssTt5v/IMG-8329.avif",
  "https://i.postimg.cc/CBGw3bHQ/IMG-8330.avif",
  "https://i.postimg.cc/SYVksqPC/IMG-8424.avif",
].map((src, i) => ({ src, title: `Bedroom ${String(i + 1).padStart(2, "0")}`, category: "Bedroom" }));

const kitchen: Project[] = [
  "https://i.postimg.cc/HJRGsztd/IMG-4341.avif",
  "https://i.postimg.cc/WFqvMC4m/IMG-4344.avif",
  "https://i.postimg.cc/67gs5chN/IMG-4354-(1).avif",
  "https://i.postimg.cc/PC6s0TpQ/IMG-4361.avif",
  "https://i.postimg.cc/bshht6fD/IMG-4364.avif",
  "https://i.postimg.cc/NyShfDxv/IMG-4627.avif",
  "https://i.postimg.cc/ZCSSdfz3/IMG-6226.avif",
  "https://i.postimg.cc/Czggqvpj/IMG-7343.avif",
  "https://i.postimg.cc/BjZfhX61/IMG-7386.avif",
].map((src, i) => ({ src, title: `Kitchen ${String(i + 1).padStart(2, "0")}`, category: "Kitchen" }));

const fullHome: Project[] = [
  "https://i.postimg.cc/7bxvP53m/Full-Size-Render-(1).avif",
  "https://i.postimg.cc/hQ4N2YDM/IMG-7422.avif",
  "https://i.postimg.cc/jw4GQTb7/IMG-7424.avif",
  "https://i.postimg.cc/gXWCZJfn/IMG-7452.avif",
  "https://i.postimg.cc/5XZdfpgx/IMG-7478.avif",
  "https://i.postimg.cc/pykwmPC3/IMG-7629.avif",
  "https://i.postimg.cc/jnqBM1xh/IMG-7634.avif",
].map((src, i) => ({ src, title: `Full Home ${String(i + 1).padStart(2, "0")}`, category: "Full Home" }));

const renders3d: Project[] = [
  { src: "https://i.postimg.cc/Gtv8w5Kx/IMG-20250325-WA0014.jpg", title: "3D Concept 01", category: "3D Visualization" },
  ...Array.from({ length: 19 }, (_, i) => ({
    src: new URL(`../assets/renders/render-${i + 1}.jpg`, import.meta.url).href,
    title: `3D Visualization ${String(i + 2).padStart(2, "0")}`,
    category: "3D Visualization",
  })),
];

// 2D Floor Planning placeholders (using CAD-like sample images)
const floorPlans: Project[] = [
  { src: "https://images.unsplash.com/photo-1582647509711-c8aa8eb7c7a4?w=1200&q=80", title: "2D Layout 01", category: "2D Floor Planning" },
  { src: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1200&q=80", title: "2D Layout 02", category: "2D Floor Planning" },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80", title: "2D Layout 03", category: "2D Floor Planning" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", title: "2D Layout 04", category: "2D Floor Planning" },
];

const projects: Project[] = [...livingRoom, ...bedroom, ...kitchen, ...fullHome, ...renders3d, ...floorPlans];
const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Full Home", "3D Visualization", "2D Floor Planning"];

const PortfolioPage = () => {
  const location = useLocation();
  const [active, setActive] = useState("All");
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat && categories.includes(cat)) setActive(cat);
  }, [location.search]);

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
            {filtered.map((p, i) => (
              <div
                key={p.src}
                className="mb-4 md:mb-5 break-inside-avoid group cursor-pointer overflow-hidden rounded-lg bg-muted shadow-sm hover:shadow-xl transition-all duration-500 active:scale-[0.99]"
                style={{ contentVisibility: "auto", containIntrinsicSize: "1px 360px" }}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  onError={() => setHidden((h) => ({ ...h, [p.src]: true }))}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="p-3">
                  <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                </div>
              </div>
            ))}
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

          <a
            href="https://pleasant-jade-dnjhl61ojo.edgeone.app/BRAND_CHART%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Brand Chart PDF"
            className="inline-flex items-center gap-2 px-7 py-3 bg-foreground text-background text-xs md:text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent transition-all duration-300 active:scale-95 shadow-md"
          >
            <FileText className="w-5 h-5" />
            Brand Chart
          </a>

          <a
            href="https://www.pinterest.com/theartistinteriors/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-xs md:text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 active:scale-95 shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.993 3.995-.282 1.193.599 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.084.345-.091.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.163-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            Pinterest
          </a>
        </div>
      </div>

      <Footer />
      <FloatingContactIcons />
    </main>
  );
};

export default PortfolioPage;
