import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import AnimatedSection from "@/components/AnimatedSection";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectLiving1 from "@/assets/project-living1.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectFullhome from "@/assets/project-fullhome.jpg";
import projectLiving2 from "@/assets/project-living2.jpg";
import render1 from "@/assets/renders/render-1.jpg";
import render2 from "@/assets/renders/render-2.jpg";
import render3 from "@/assets/renders/render-3.jpg";
import render4 from "@/assets/renders/render-4.jpg";
import render5 from "@/assets/renders/render-5.jpg";
import render6 from "@/assets/renders/render-6.jpg";
import render7 from "@/assets/renders/render-7.jpg";
import render8 from "@/assets/renders/render-8.jpg";
import render9 from "@/assets/renders/render-9.jpg";
import render10 from "@/assets/renders/render-10.jpg";
import render11 from "@/assets/renders/render-11.jpg";
import render12 from "@/assets/renders/render-12.jpg";
import render13 from "@/assets/renders/render-13.jpg";
import render14 from "@/assets/renders/render-14.jpg";
import render15 from "@/assets/renders/render-15.jpg";
import render16 from "@/assets/renders/render-16.jpg";
import render17 from "@/assets/renders/render-17.jpg";
import render18 from "@/assets/renders/render-18.jpg";
import render19 from "@/assets/renders/render-19.jpg";

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Full Home", "3D Renders"];

const renderImages = [render1, render2, render3, render4, render5, render6, render7, render8, render9, render10, render11, render12, render13, render14, render15, render16, render17, render18, render19];

const projects = [
  { image: projectLiving1, title: "Lodha Crown — Living Room", category: "Living Room", desc: "Warm contemporary living space with custom furniture and layered lighting design." },
  { image: projectBedroom, title: "Raymond Realty — Master Bedroom", category: "Bedroom", desc: "Serene master suite with bespoke headboard and ambient cove lighting." },
  { image: projectKitchen, title: "Lodha Crown — Kitchen", category: "Kitchen", desc: "Modern modular kitchen with marble countertops and integrated appliances." },
  { image: projectFullhome, title: "Raymond Realty — Full Home", category: "Full Home", desc: "Complete residential transformation — living, dining, and kitchen in open-plan harmony." },
  { image: projectLiving2, title: "Private Residence — Living Room", category: "Living Room", desc: "Luxury high-rise living with panoramic city views and dark wood accents." },
  ...renderImages.map((img, i) => ({
    image: img,
    title: `3D Visualization — Concept ${String(i + 1).padStart(2, "0")}`,
    category: "3D Renders",
    desc: "Photorealistic 3D render produced for client approval before site execution.",
  })),
];

const PortfolioPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

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

          {/* Filter tabs */}
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

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="image-reveal aspect-[4/3] mb-4 bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={i < 3 ? "high" : "auto"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <p className="text-label text-accent mb-1">{p.category}</p>
                    <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-1 leading-relaxed md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Social Band - Instagram → Pinterest → YouTube */}
      <div className="bg-secondary border-y border-border py-7">
        <div className="section-padding max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 flex-wrap">
          <a
            href="https://www.instagram.com/theartistinteriors/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram — The Artist Interiors"
            className="inline-flex items-center gap-2 text-foreground/85 hover:text-accent transition-colors text-sm md:text-base font-medium uppercase tracking-wider active:scale-95"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>

          <a
            href="https://in.pinterest.com/TheArtist_Interiors/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest — The Artist Interiors"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-accent-foreground text-xs md:text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 active:scale-95 shadow-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.993 3.995-.282 1.193.599 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.084.345-.091.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.163-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            Pinterest
          </a>

          <a
            href="https://www.youtube.com/@aadarsh.chaubeyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube — watch project videos"
            className="inline-flex items-center gap-2 text-foreground/85 hover:text-accent transition-colors text-sm md:text-base font-medium uppercase tracking-wider active:scale-95"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
        </div>
      </div>

      <Footer />
      <FloatingContactIcons />
    </main>
  );
};

export default PortfolioPage;
