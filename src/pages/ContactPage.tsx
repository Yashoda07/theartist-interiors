import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";

const LiveCalendar = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = now.toLocaleDateString("en-US", { month: "long" });
  const date = now.getDate();
  const year = now.getFullYear();
  const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  // Generate calendar grid for current month
  const firstDay = new Date(year, now.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
  const daysArray = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDay + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto lg:mx-0"
    >
      {/* Header */}
      <div className="bg-accent text-accent-foreground px-6 py-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <CalendarDays className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Schedule Reference</span>
        </div>
        <div className="text-3xl font-display font-light mt-2">{dayName}</div>
        <div className="text-sm opacity-90 mt-1">{monthName} {year}</div>
      </div>

      {/* Date display */}
      <div className="text-center py-6 border-b border-border">
        <div className="text-7xl font-display font-light text-foreground leading-none">{date}</div>
        <div className="text-sm text-muted-foreground mt-2 font-mono tracking-wider">{time}</div>
      </div>

      {/* Mini calendar grid */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((d) => (
            <div key={d} className="text-center text-[10px] uppercase tracking-wider text-muted-foreground font-medium py-1">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {daysArray.map((day, i) => (
            <div
              key={i}
              className={`text-center text-xs py-1.5 rounded-md transition-colors ${
                day === null
                  ? ""
                  : day === date
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-foreground/70 hover:bg-muted"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="px-5 pb-4 text-center">
        <p className="text-[11px] text-muted-foreground">
          Pick a convenient date and mention it in your inquiry
        </p>
      </div>
    </motion.div>
  );
};

const ContactPage = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <div className="pt-24" />
    
    {/* Calendar + Contact side by side */}
    <section className="section-padding py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start mb-12">
          <div /> {/* Spacer - contact section below handles left side */}
          <LiveCalendar />
        </div>
      </div>
    </section>

    <ContactSection />
    <Footer />
    <FloatingContactIcons />
  </main>
);

export default ContactPage;
