import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Priya Sharma",
    project: "Lodha Crown, 3BHK",
    rating: 5,
    quote: "Aadarsh transformed our apartment into a dream home. His 3D visualization helped us see the final result before any work began. Absolutely professional!",
  },
  {
    name: "Rahul & Anjali Mehta",
    project: "Raymond Realty, 2BHK",
    rating: 5,
    quote: "The attention to detail and communication throughout the project was exceptional. Every deadline was met and the quality exceeded our expectations.",
  },
  {
    name: "David Chen",
    project: "Remote 3D Visualization",
    rating: 5,
    quote: "Working with The Artist Interiors remotely was seamless. The 3D renders were photorealistic and the revisions were delivered incredibly fast.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding section-spacing bg-card">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">Testimonials</p>
        <div className="gold-line mb-6" />
        <h2 className="text-display-lg text-foreground mb-16">
          Client <span className="italic text-accent">Stories</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="bg-background border border-border p-8 hover:border-accent/40 transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-base md:text-lg text-foreground/80 italic flex-1 mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-display text-lg md:text-xl text-foreground">{t.name}</p>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-accent mt-1">{t.project}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
