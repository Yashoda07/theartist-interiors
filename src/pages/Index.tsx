import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash || hash === "home") return;
    // wait briefly for sections to mount, then jump (no scroll animation to avoid hero flash)
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      } else if (attempt < 10) {
        setTimeout(() => tryScroll(attempt + 1), 60);
      }
    };
    tryScroll();
  }, [location.hash]);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingContactIcons />
      <FloatingChat />
    </main>
  );
};

export default Index;
