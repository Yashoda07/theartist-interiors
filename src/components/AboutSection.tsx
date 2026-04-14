import AnimatedSection from "./AnimatedSection";
import profileImage from "@/assets/aadarsh-profile.jpg";

const milestones = [
  { year: "2021", title: "3D Visualizer", desc: "Started career at Shrishti Interior Designer Studio" },
  { year: "2022", title: "Junior Interior Designer", desc: "Expanded skills at Transatlantic LTD" },
  { year: "2022", title: "Founded The Artist Interiors", desc: "Launched independent practice" },
  { year: "2023", title: "Interior Designer", desc: "Joined Mystique Design Studio UG" },
  { year: "2025", title: "Senior Interior Designer & CEO", desc: "Leading The Artist Interiors to new heights" },
];

const AboutSection = () => (
  <section id="about" className="section-padding section-spacing">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">About</p>
        <div className="gold-line mb-12" />
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <AnimatedSection className="image-reveal">
          <img
            src={profileImage}
            alt="Aadarsh Chaubey, Founder of The Artist Interiors"
            width={800}
            height={1024}
            loading="lazy"
            className="w-full max-w-md object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </AnimatedSection>

        {/* Story */}
        <div>
          <AnimatedSection delay={0.2}>
            <h2 className="text-display-lg text-foreground mb-8">
              Crafting Spaces,
              <br />
              <span className="italic text-accent">Building Dreams</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-body-lg text-muted-foreground mb-6">
              From a passionate junior designer to the founder of The Artist Interiors, Aadarsh Chaubey's journey is fueled by an unwavering love for transforming spaces into experiences.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              With expertise spanning interior design, 3D visualization, and end-to-end site execution, Aadarsh bridges the gap between creative vision and flawless delivery. His strength lies in clear communication — ensuring every client's desire is understood and every contractor is aligned.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              A quick learner with deep adaptability, he continues to push boundaries in residential design across Mumbai and beyond.
            </p>
            <p className="text-label text-accent">
              BSc in Interior Designing — Maharashtra Open University
            </p>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection delay={0.4} className="mt-12">
            <div className="space-y-6 border-l border-border pl-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={0.1 * i}>
                  <div className="relative">
                    <div className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-accent" />
                    <p className="text-label text-accent mb-1">{m.year}</p>
                    <h4 className="font-display text-xl text-foreground">{m.title}</h4>
                    <p className="text-body text-muted-foreground text-sm">{m.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
