import AnimatedSection from "./AnimatedSection";
import profileImage from "@/assets/aadarsh-profile.jpg";

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
            <p className="text-body-lg text-foreground/80 mb-6">
              From a passionate junior designer to the founder of The Artist Interiors, Aadarsh Chaubey's journey is fueled by an unwavering love for transforming spaces into experiences.
            </p>
            <p className="text-body text-foreground/70 mb-6">
              With expertise spanning interior design, 3D visualization, and end-to-end site execution, Aadarsh bridges the gap between creative vision and flawless delivery. His strength lies in clear communication — ensuring every client's desire is understood and every contractor is aligned.
            </p>
            <p className="text-body text-foreground/70 mb-8">
              A quick learner with deep adaptability, he continues to push boundaries in residential design across Mumbai and beyond.
            </p>
            <p className="text-label text-accent">
              BSc in Interior Designing — Maharashtra Open University
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
