import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import profileImage from "@/assets/aadarsh-profile.webp";
import logoImage from "@/assets/logo.png";

const AboutSection = () => {
  const [showLogo, setShowLogo] = useState(false);

  return (
    <section id="about" className="section-padding section-spacing bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">About</p>
          <div className="gold-line mb-10" />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2 className="text-display-lg text-foreground mb-3">
            Crafting Spaces,{" "}
            <span className="text-accent">Building Dreams</span>
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-8">
            BSc in Interior Designing
          </p>
        </AnimatedSection>

        {/* Circular image floats right; text wraps around it on desktop */}
        <AnimatedSection delay={0.25}>
          <div className="lg:float-right lg:ml-10 lg:-mt-28 lg:mb-6 mb-8 flex justify-center lg:justify-end">
            <button
              onClick={() => setShowLogo((s) => !s)}
              aria-label={showLogo ? "Show photo of Aadarsh" : "Show The Artist Interiors logo"}
              className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 ring-4 ring-accent/20 hover:ring-accent/50 transition-all duration-500 active:scale-[0.98]"
              style={{ shapeOutside: "circle(50%)" }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-background"
              />
              <AnimatePresence mode="wait">
                {showLogo ? (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card via-background to-secondary p-8"
                  >
                    <img
                      src={logoImage}
                      alt="The Artist Interiors logo"
                      loading="lazy"
                      decoding="async"
                      className="max-w-[85%] max-h-[85%] object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={profileImage}
                      alt="Aadarsh Chaubey, Founder of The Artist Interiors"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Subtle interactive indicator — pulsing accent dot */}
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-accent ring-2 ring-background shadow-md"
              >
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              </span>
            </button>
          </div>

          <div className="text-base md:text-lg text-foreground/85 leading-relaxed space-y-5">
            <p>
              From a passionate junior designer to the founder of The Artist Interiors, my journey has been fueled by an unwavering love for transforming spaces into experiences.
            </p>
            <p>
              With expertise spanning interior design, 3D visualization, and end-to-end site execution, I bridge the gap between creative vision and flawless delivery. My strength lies in clear communication — making sure every client's desire is understood and every contractor stays aligned.
            </p>
            <p>
              I'm a quick learner with deep adaptability, and I continue to push boundaries in residential design across Mumbai and beyond.
            </p>
          </div>
          <div className="clear-both" />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
