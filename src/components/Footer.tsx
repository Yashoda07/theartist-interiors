import { Phone, MessageCircle, Instagram, Mail, Linkedin, Youtube, Facebook, AtSign } from "lucide-react";

const Pinterest = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.09 2.46 7.6 5.97 9.13-.08-.78-.16-1.97.03-2.81.18-.76 1.13-4.84 1.13-4.84s-.29-.58-.29-1.43c0-1.34.78-2.34 1.74-2.34.82 0 1.22.62 1.22 1.36 0 .83-.53 2.07-.8 3.22-.23.96.48 1.74 1.43 1.74 1.71 0 3.03-1.81 3.03-4.42 0-2.31-1.66-3.93-4.03-3.93-2.75 0-4.36 2.06-4.36 4.19 0 .83.32 1.72.72 2.2.08.1.09.18.07.28-.07.31-.24.96-.27 1.09-.04.18-.14.22-.32.13-1.18-.55-1.92-2.27-1.92-3.65 0-2.97 2.16-5.7 6.22-5.7 3.27 0 5.81 2.33 5.81 5.44 0 3.25-2.05 5.86-4.89 5.86-.95 0-1.85-.5-2.16-1.08l-.59 2.24c-.21.83-.79 1.86-1.18 2.49.89.28 1.83.42 2.81.42 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

const contacts = [
  { icon: Phone, label: "+91 99879 67465", href: "tel:+919987967465" },
  { icon: MessageCircle, label: "WhatsApp Chat", href: "https://wa.me/919987967465" },
  { icon: Mail, label: "theartist.interiors@gmail.com", href: "mailto:theartist.interiors@gmail.com" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/theartistinteriors/" },
  { icon: Pinterest, label: "Pinterest", href: "https://www.pinterest.com/theartistinteriors/" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@aadarsh.chaubeyy" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/theartistinteriors" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aadarsh-chaubey-b005b2402/" },
  { icon: AtSign, label: "Threads", href: "https://www.threads.net/@theartistinteriors" },
];

const Footer = () => (
  <footer id="contact-footer" className="section-padding pt-16 pb-10 border-t border-border bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
        <div>
          <div className="font-display text-2xl text-foreground mb-3">
            The Artist <span className="font-medium text-accent">Interiors</span>
          </div>
          <p className="text-base text-foreground/70 leading-relaxed max-w-xs">
            Interior Design, 3D Visualization & Floor Planning — serving Mumbai and clients worldwide.
          </p>
        </div>

        <div>
          <p className="text-label mb-4">Get in Touch</p>
          <ul className="space-y-3">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-foreground/80 hover:text-accent transition-colors text-sm md:text-base min-w-0 active:scale-[0.98]"
                >
                  <c.icon className="w-4 h-4 mt-1 shrink-0 text-accent" />
                  <span className="break-all">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-label mb-4">Follow Along</p>
          <div className="grid grid-cols-3 gap-3 mb-6 max-w-xs">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex flex-col items-center gap-1.5 py-3 rounded-lg border border-border hover:border-accent hover:text-accent text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <s.icon className="w-5 h-5" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">{s.label}</span>
              </a>
            ))}
          </div>
          <p className="text-sm text-foreground/60">
            Mumbai, India · Available for projects globally
          </p>
        </div>
      </div>

      <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} The Artist Interiors. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
