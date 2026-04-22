import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import profileImage from "@/assets/aadarsh-profile.jpg";
import logoImage from "@/assets/logo.png";

const AboutSection = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section id="about" className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">About</p>
          <div className="gold-line mb-12" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Toggle: logo ↔ profile photo */}
          <AnimatedSection className="flex justify-center order-1 lg:order-1">
            <button
              onClick={() => setShowPhoto((s) => !s)}
              aria-label={showPhoto ? "Show logo" : "Show photo of Aadarsh"}
              className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-lg shadow-xl overflow-hidden bg-card group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
              style={{ perspective: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {showPhoto ? (
                  <motion.img
                    key="photo"
                    src={profileImage}
                    alt="Aadarsh Chaubey, Founder of The Artist Interiors"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-card via-background to-secondary p-10"
                  >
                    <img
                      src={logoImage}
                      alt="The Artist Interiors logo"
                      loading="eager"
                      decoding="async"
                      className="max-w-[80%] max-h-[80%] object-contain drop-shadow-md"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tap hint pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-foreground/85 text-background text-[11px] uppercase tracking-wider font-medium opacity-90 group-active:scale-95 transition-transform pointer-events-none">
                Tap to {showPhoto ? "see logo" : "meet the founder"}
              </div>
            </button>
          </AnimatedSection>

          {/* Story */}
          <div className="order-2 lg:order-2">
            <AnimatedSection delay={0.2}>
              <h2 className="text-display-lg text-foreground mb-8">
                Crafting Spaces,
                <br />
                <span className="italic text-accent">Building Dreams</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-foreground/85 mb-6 leading-relaxed">
                From a passionate junior designer to the founder of The Artist Interiors, Aadarsh Chaubey's journey is fueled by an unwavering love for transforming spaces into experiences.
              </p>
              <p className="text-base text-foreground/75 mb-6 leading-relaxed">
                With expertise spanning interior design, 3D visualization, and end-to-end site execution, Aadarsh bridges the gap between creative vision and flawless delivery. His strength lies in clear communication — ensuring every client's desire is understood and every contractor is aligned.
              </p>
              <p className="text-base text-foreground/75 mb-8 leading-relaxed">
                A quick learner with deep adaptability, he continues to push boundaries in residential design across Mumbai and beyond.
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                BSc in Interior Designing — Maharashtra Open University
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
