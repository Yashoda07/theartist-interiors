import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";

const Index = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ServicesSection />
    <PortfolioSection />
    <SkillsSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <FloatingContactIcons />
  </main>
);

export default Index;
