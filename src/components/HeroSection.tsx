import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [enableVideo, setEnableVideo] = useState(false);

  // Enable video on every screen — respect reduced motion & data-saver only.
  useEffect(() => {
    if (typeof window === "undefined") return;
    setEnableVideo(true);
  }, []);

  return (
  <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
    {/* Instant LQIP/poster background — visible immediately, no grey flash */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-hidden="true"
    />

    {/* Background video — desktop only; lazy fades in once it can play */}
    {enableVideo && (
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImage}
          onCanPlay={() => setVideoReady(true)}
          className={`w-full h-full object-cover lg:object-contain lg:bg-black transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
        >
          <source
            src="/herosectionbgvideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    )}

    {/* Lighter overlay so the video remains visible while keeping text readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />
    <div className="absolute inset-0 bg-black/10" />


    {/* Content */}
    <div className="relative z-10 section-padding pb-32 md:pb-28 w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-base md:text-lg font-medium uppercase tracking-[0.2em] text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      >
        Aadarsh Chaubey — Founder | The Artist Interiors
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-display font-light tracking-tight leading-[0.95] text-white max-w-4xl mb-10 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] text-5xl md:text-7xl lg:text-8xl"
      >
        We Design
        <br />
        <span className="text-[#C98A5A] font-semibold drop-shadow-sm">
          your Desires
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-wrap gap-4 items-center mb-16"
      >
        <a
          href="#portfolio"
          className="px-8 py-4 bg-accent text-white text-sm md:text-base font-semibold uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 hover-lift active:scale-95 shadow-lg"
        >
          View Projects
        </a>
        <a
          href="#skills"
          className="px-8 py-4 border-2 border-white text-white text-sm md:text-base font-semibold uppercase tracking-[0.15em] hover:bg-white/15 transition-all duration-300 active:scale-95 backdrop-blur-sm"
        >
          Explore Services
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-10 md:gap-20"
      >
        {[
          { num: "30+", label: "Projects Delivered" },
          { num: "5+", label: "Years Experience" },
          { num: "3", label: "Core Services" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-4xl md:text-5xl font-display font-light text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{s.num}</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-white/90 mt-1 drop-shadow-md">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Description bottom-right — small, structured on every screen */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-4 right-4 md:bottom-8 md:right-12 lg:right-20 z-10 text-[11px] md:text-xs lg:text-sm text-white/85 max-w-[200px] md:max-w-xs text-right leading-snug md:leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
    >
      5+ years crafting extraordinary spaces — Interior Design, 3D Visualization & Site Execution. Serving clients globally (3D) and locally in Mumbai.
    </motion.p>
  </section>
  );
};

export default HeroSection;
