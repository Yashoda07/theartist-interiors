import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Volume2, VolumeX } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import projectLiving1 from "@/assets/project-living1.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";

// Raw "before" placeholders — generic stock shots of unfinished spaces
const beforeLiving = "https://i.postimg.cc/264sSH9Q/living-before.png";
const beforeBedroom = "https://i.postimg.cc/13rMXky6/bedroom-before.png";
const beforeKitchen = "https://i.postimg.cc/VLDx2DNk/kitchen-before.jpg";

// Client-supplied "after" images
const afterLiving = "https://i.postimg.cc/Ss0djkw4/living-after.png";
const afterBedroom = "https://i.postimg.cc/gk5Kqw6J/bedroom-after.png";
const afterKitchen = "https://i.postimg.cc/xjZmBwjJ/kitchen-after.png";

type Transformation = {
  name: string;
  location: string;
  title: string;
  highlight: string;
  feedback: string;
  before: string;
  after: string;
};

type Feedback = {
  name: string;
  location: string;
  title: string;
  highlight: string;
  summary: string;
  video: string;
  poster: string;
};

const transformations: Transformation[] = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    title: "Lodha Crown — 3BHK Makeover",
    highlight: "From dated to timeless in 8 weeks",
    feedback:
      "Aadarsh transformed our apartment into a dream home. His 3D visualization helped us see the final result before any work began. Absolutely professional and detail-oriented.",
    before: beforeLiving,
    after: afterLiving,
  },
  {
    name: "Rahul & Anjali Mehta",
    location: "Thane",
    title: "Raymond Realty — Master Bedroom",
    highlight: "Every deadline met, quality exceeded",
    feedback:
      "The attention to detail and communication throughout the project was exceptional. Every deadline was met and the quality exceeded our expectations.",
    before: beforeBedroom,
    after: afterBedroom,
  },
  {
    name: "Aarti Kapoor",
    location: "Andheri",
    title: "Modular Kitchen — Private Residence",
    highlight: "Personality in every corner",
    feedback:
      "They turned our blank canvas into a warm, layered home. The team was patient, creative, and remarkably efficient.",
    before: beforeKitchen,
    after: afterKitchen,
  },
];

const feedbacks: Feedback[] = [
  {
    name: "David Chen",
    location: "Singapore",
    title: "Remote 3D Visualization",
    highlight: "Photorealistic, fast turnarounds",
    summary:
      "Working with The Artist Interiors remotely was seamless. The 3D renders were photorealistic and revisions delivered incredibly fast.",
    video: "https://www.youtube.com/embed/_ajwM-pKnng",
    poster: projectLiving1,
  },
  {
    name: "Neha Verma",
    location: "Pune",
    title: "Modular Kitchen Project",
    highlight: "Truly understood our lifestyle",
    summary:
      "Beyond aesthetics — they understood how we cook, host and live. The kitchen feels like it was made just for us.",
    video: "https://drive.google.com/uc?export=download&id=1Ein-9pFyrKx0Ba_sYEgSrhzNZdiQhMDa",
    poster: projectKitchen,
  },
];

const TestimonialsSection = () => {
  // NOTE: "Client Feedback" (video testimonials) section is temporarily disabled.
  // To re-enable later: restore the toggle UI below and allow setMode("feedback").
  const [mode, setMode] = useState<"transform" | "feedback">("transform");
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  const list = mode === "transform" ? transformations : feedbacks;
  const current = list[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + list.length) % list.length);
  };

  // Kept for future use when client-feedback videos are re-enabled.
  const switchMode = (m: "transform" | "feedback") => {
    setMode(m);
    setIndex(0);
  };
  void switchMode;


  return (
    <section id="testimonials" className="section-padding section-spacing">
      <div className="max-w-6xl lg:max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Testimonials</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-3">
            Client <span className="text-accent">Stories</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 mb-10">
            Verified results from real clients.
          </p>
        </AnimatedSection>

        {/* Toggle */}
        <div className="inline-flex p-1 bg-card border border-border rounded-full mb-10">
          {[
            { id: "transform" as const, label: "Transformation & Reviews" },
            { id: "feedback" as const, label: "Client Feedback" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => switchMode(t.id)}
              className={`relative px-4 md:px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full transition-colors duration-300 ${
                mode === t.id ? "text-background" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {mode === t.id && (
                <motion.span
                  layoutId="testimonial-pill"
                  className="absolute inset-0 bg-foreground rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${mode}-${index}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-md"
              drag={typeof window !== "undefined" && window.innerWidth < 768 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
            >
              {mode === "transform" ? (
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={(current as Transformation).before}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-foreground/80 text-background text-xs font-semibold uppercase tracking-wider rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <img
                      src={(current as Transformation).after}
                      alt="After"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded">
                      After
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video bg-black">
                  <iframe
                    key={(current as Feedback).video}
                    src={(current as Feedback).video}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setMuted((m) => !m)}
                    className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-background/90 hover:bg-background text-foreground flex items-center justify-center shadow-lg backdrop-blur"
                    aria-label={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <p className="font-display text-xl md:text-2xl text-foreground">
                      {current.name}
                    </p>
                    <p className="text-sm text-foreground/60">{current.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-2">
                  {current.title}
                </p>
                <p className="text-base md:text-lg text-foreground font-medium mb-3">
                  "{current.highlight}"
                </p>
                <p className="text-base text-foreground/80 leading-relaxed italic">
                  {mode === "transform"
                    ? (current as Transformation).feedback
                    : (current as Feedback).summary}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => go(-1)}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-accent hover:border-accent transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <p className="text-sm font-semibold tracking-widest text-foreground/60">
              {index + 1} / {list.length}
            </p>
            <button
              onClick={() => go(1)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-accent hover:border-accent transition-colors"
            >
              Next Client <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <p className="md:hidden text-center text-xs text-foreground/50 mt-3">
            Swipe left or right to browse
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
