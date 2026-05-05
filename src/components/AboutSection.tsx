import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import profileImage from "@/assets/aadarsh-profile.jpg";
import logoImage from "@/assets/logo.png";

const AboutSection = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section id="about" className="section-padding section-spacing bg-card">
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
              className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-lg shadow-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
              style={{ perspective: "1200px" }}
            >
              {/* Themed warm backdrop — replaces blue LQIP flash */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-background"
              />
              <AnimatePresence mode="wait">
                {showPhoto ? (
                  <motion.div
                    key="photo"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary via-card to-background p-4"
                  >
                    <img
                      src={profileImage}
                      alt="Aadarsh Chaubey, Founder of The Artist Interiors"
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
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

              {/* Click Me hint — no background, subtle but discoverable */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-background text-xs md:text-sm uppercase tracking-[0.25em] font-semibold opacity-70 group-hover:opacity-100 group-hover:underline underline-offset-4 transition-all pointer-events-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                Click Me
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
              <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
                From a passionate junior designer to the founder of The Artist Interiors, my journey has been fueled by an unwavering love for transforming spaces into experiences.
              </p>
              <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
                With expertise spanning interior design, 3D visualization, and end-to-end site execution, I bridge the gap between creative vision and flawless delivery. My strength lies in clear communication — making sure every client's desire is understood and every contractor stays aligned.
              </p>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
                I'm a quick learner with deep adaptability, and I continue to push boundaries in residential design across Mumbai and beyond.
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                BSc in Interior Designing
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
