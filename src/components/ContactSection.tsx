import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Mail, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const socials = [
  { icon: Phone, label: "Call Now", href: "tel:+919999999999", color: "hover:text-accent" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919999999999", color: "hover:text-green-600" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/the__artisttt/", color: "hover:text-pink-500" },
  { icon: Mail, label: "Email", href: "mailto:theartistinteriors@gmail.com", color: "hover:text-accent" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aadarsh-chaubey-b005b2402/", color: "hover:text-blue-600" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi Aadarsh! I'm ${form.name}. ${form.message}`);
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding section-spacing">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">Contact</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-4">
            Let's <span className="italic text-accent">Connect</span>
          </h2>
          <p className="text-body-lg text-foreground/70 max-w-xl mb-16">
            Ready to transform your space? Get in touch for a free consultation.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact links */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-4 py-4 border-b border-border text-foreground/80 ${s.color} transition-colors duration-300 group`}
                >
                  <s.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-body text-foreground">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { key: "name", placeholder: "Your Name", type: "text" },
                { key: "email", placeholder: "Your Email", type: "email" },
                { key: "phone", placeholder: "Phone Number", type: "tel" },
              ].map((f) => (
                <input
                  key={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-body text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300"
                />
              ))}
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-body text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-foreground text-background text-label hover:bg-accent transition-all duration-300"
              >
                Send Inquiry via WhatsApp
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
