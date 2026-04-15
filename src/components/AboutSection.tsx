import AnimatedSection from "./AnimatedSection";
import profileImage from "@/assets/aadarsh-profile.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding section-spacing">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-label mb-4">About</p>
        <div className="gold-line mb-12" />
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile image - centered on all views, between heading area */}
        <AnimatedSection className="flex justify-center order-1 lg:order-1">
          <img
            src={profileImage}
            alt="Aadarsh Chaubey, Founder of The Artist Interiors"
            width={800}
            height={1024}
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-sm md:max-w-md object-cover rounded-lg shadow-lg"
          />
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

export default AboutSection;
