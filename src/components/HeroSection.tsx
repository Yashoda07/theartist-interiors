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
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
    </div>

    {/* Content */}
    <div className="relative z-10 section-padding pb-20 md:pb-32 w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-label text-warm-sand mb-6"
      >
        Aadarsh Chaubey — Founder | The Artist Interiors
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-display-xl text-primary-foreground max-w-4xl mb-8"
      >
        We Design
        <br />
        <span className="italic font-light">your Desires</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-body-lg text-warm-sand/80 max-w-xl mb-10"
      >
        5+ years crafting extraordinary spaces — Interior Design, 3D Visualization & Site Execution. Serving clients globally (3D) and locally in Mumbai (execution).
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap gap-4 items-center"
      >
        <a
          href="#contact"
          className="px-8 py-3.5 bg-accent text-accent-foreground text-label hover:bg-accent/90 transition-all duration-300 hover-lift"
        >
          Get Consultation
        </a>
        <a
          href="#portfolio"
          className="px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground text-label hover:bg-primary-foreground/10 transition-all duration-300"
        >
          View Projects
        </a>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="mt-16 flex gap-12 md:gap-20"
      >
        {[
          { num: "30+", label: "Projects Delivered" },
          { num: "5+", label: "Years Experience" },
          { num: "3", label: "Core Services" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-display font-light text-primary-foreground">{s.num}</div>
            <div className="text-xs uppercase tracking-widest text-warm-sand/60 mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
