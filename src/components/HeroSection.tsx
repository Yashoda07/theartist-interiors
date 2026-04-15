import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Luxury interior design by The Artist Interiors"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
    </div>

    {/* Content */}
    <div className="relative z-10 section-padding pb-20 md:pb-28 w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-white/80 mb-6"
      >
        Aadarsh Chaubey — Founder | The Artist Interiors
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-6xl md:text-8xl lg:text-9xl font-display font-light tracking-tight leading-[0.9] text-white max-w-4xl mb-10"
      >
        We Design
        <br />
        <span className="italic font-light">your Desires</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-wrap gap-4 items-center mb-16"
      >
        <a
          href="#contact"
          className="px-8 py-4 bg-accent text-white text-sm font-semibold uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 hover-lift"
        >
          Book Consultation
        </a>
        <a
          href="#portfolio"
          className="px-8 py-4 border-2 border-white/50 text-white text-sm font-semibold uppercase tracking-[0.15em] hover:bg-white/10 transition-all duration-300"
        >
          View Projects
        </a>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-12 md:gap-20"
      >
        {[
          { num: "30+", label: "Projects Delivered" },
          { num: "5+", label: "Years Experience" },
          { num: "3", label: "Core Services" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-display font-light text-white">{s.num}</div>
            <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Description - bottom right */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-12 lg:right-20 text-xs md:text-sm text-white/50 max-w-xs text-right leading-relaxed"
      >
        5+ years crafting extraordinary spaces — Interior Design, 3D Visualization & Site Execution. Serving clients globally (3D) and locally in Mumbai.
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
