import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";

const ContactPage = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <div className="pt-24" />
    <ContactSection />
    <Footer />
    <FloatingContactIcons />
  </main>
);

export default ContactPage;
