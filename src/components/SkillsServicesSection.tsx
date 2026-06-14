import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Box, LayoutGrid, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Interior Designing",
    tagline: "Spaces tailored to your life",
    accent: "from-[hsl(38,60%,55%)] to-[hsl(28,45%,45%)]",
    category: "Full Home",
    summary: "End-to-end design solutions tailored to your lifestyle — space planning, concept, and material selection.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    tagline: "See it before it's built",
    accent: "from-[hsl(28,45%,45%)] to-[hsl(20,40%,42%)]",
    category: "3D Visualization",
    summary: "High-quality photorealistic renders so you can visualize spaces before any execution begins.",
  },
  {
    icon: LayoutGrid,
    title: "Floor Planning",
    tagline: "Smart layouts, optimized flow",
    accent: "from-[hsl(25,55%,45%)] to-[hsl(20,40%,42%)]",
    category: "2D Floor Plans",
    summary: "Functional zoning, optimized circulation, and detailed dimensioned layouts tailored to your family.",
  },
];

const marqueeSkills = [
  "Space Planning",
  "Creative Thinking",
  "Strategic Communication",
  "Problem Solving",
  "Material Selection",
  "Client Management",
  "Project Coordination",
  "Trend Forecasting",
];

const SLIDE_DURATION = 6500; // ms

const ServiceCard = ({ s, onClick }: { s: typeof services[number]; onClick: () => void }) => {
  const Icon = s.icon;
  return (
    <button
      onClick={onClick}
      className="relative w-full h-full text-left border rounded-2xl overflow-hidden group bg-card border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
    >
      <div className={`h-2 bg-gradient-to-r ${s.accent}`} />
      <div className="relative p-7 md:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-md transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">{s.title}</h3>
        <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-accent mb-4">
          {s.tagline}
        </p>
        <p className="text-base text-foreground/75 leading-relaxed flex-1">
          {s.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
          Tap to See Projects →
        </span>
      </div>
    </button>
  );
};

const MobileSlider = ({ onOpen }: { onOpen: (cat: string) => void }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef<number>(performance.now());
  const elapsedRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (now: number) => {
      if (!paused) {
        const total = elapsedRef.current + (now - startRef.current);
        const pct = Math.min(100, (total / SLIDE_DURATION) * 100);
        setProgress(pct);
        if (total >= SLIDE_DURATION) {
          elapsedRef.current = 0;
          startRef.current = performance.now();
          setProgress(0);
          setIndex((i) => (i + 1) % services.length);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [paused]);

  // Reset timer when index changes via auto-advance
  useEffect(() => {
    elapsedRef.current = 0;
    startRef.current = performance.now();
    setProgress(0);
  }, [index]);

  const pause = () => {
    if (paused) return;
    elapsedRef.current += performance.now() - startRef.current;
    setPaused(true);
  };
  const resume = () => {
    if (!paused) return;
    startRef.current = performance.now();
    setPaused(false);
  };

  // Swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    pause();
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || touchStartY.current == null) { resume(); return; }
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      setIndex((i) => (dx < 0 ? (i + 1) % services.length : (i - 1 + services.length) % services.length));
    }
    touchStartX.current = null;
    touchStartY.current = null;
    resume();
  };

  const s = services[index];

  return (
    <div
      className="relative max-w-xl mx-auto"
      onMouseDown={pause}
      onMouseUp={resume}
      onMouseLeave={resume}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={() => { touchStartX.current = null; resume(); }}
    >
      <div className="relative min-h-[440px] sm:min-h-[400px] md:min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ServiceCard s={s} onClick={() => onOpen(s.category)} />
          </motion.div>
        </AnimatePresence>
      </div>


      {/* Progress bar */}
      <div className="mt-4 h-1 w-full bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-1.5 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsServicesSection = () => {
  const navigate = useNavigate();
  const openCategory = (cat: string) => navigate(`/portfolio?category=${encodeURIComponent(cat)}`);

  return (
    <section id="skills" className="relative section-padding section-spacing overflow-hidden">
      <div className="pointer-events-none absolute top-20 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[hsl(38,60%,55%)]/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Skills & Services</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-3">
            Skills and Services <span className="text-accent">Provided</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mb-12 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-accent mt-1.5 shrink-0" />
            Areas of mastery and what we offer.
          </p>
        </AnimatedSection>

        {/* Mobile + Tablet: single-card auto slider */}
        <div className="lg:hidden mb-16">
          <MobileSlider onOpen={openCategory} />
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-16 items-stretch">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="h-full">
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
                <ServiceCard s={s} onClick={() => openCategory(s.category)} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="relative bg-card border-y border-border py-4 md:py-5 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
                  <span key={i} className="marquee-item">• {skill}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsServicesSection;
