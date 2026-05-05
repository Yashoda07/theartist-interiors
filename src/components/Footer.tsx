import { Phone, MessageCircle, Instagram, Mail, Linkedin, Youtube } from "lucide-react";

const contacts = [
  { icon: Phone, label: "+91 99879 67465", href: "tel:+919987967465" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919987967465" },
  { icon: Mail, label: "theartist.interiors@gmail.com", href: "mailto:theartist.interiors@gmail.com" },
  { icon: Instagram, label: "@theartistinteriors", href: "https://www.instagram.com/theartistinteriors/" },
  { icon: Linkedin, label: "Aadarsh Chaubey", href: "https://www.linkedin.com/in/aadarsh-chaubey-b005b2402/" },
  { icon: Youtube, label: "@aadarsh.chaubeyy", href: "https://www.youtube.com/@aadarsh.chaubeyy" },
];

const Footer = () => (
  <footer id="contact-footer" className="section-padding py-14 border-t border-border bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <div className="font-display text-2xl text-foreground mb-3">
            The Artist <span className="font-medium italic text-accent">Interiors</span>
          </div>
          <p className="text-base text-foreground/70 max-w-md leading-relaxed">
            Interior Design, 3D Visualization & Site Execution — serving clients in Mumbai and globally.
          </p>
        </div>
        <div>
          <p className="text-label mb-4">Get in Touch</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors text-sm md:text-base"
                >
                  <c.icon className="w-4 h-4 shrink-0 text-accent" />
                  <span className="break-all">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} The Artist Interiors. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
