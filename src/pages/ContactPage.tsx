import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";

/* ------------------------------------------------------------------ */
/*  Google-Calendar-style weekly scheduler                            */
/*  Working hours: 10:00 – 19:00 (1-hour slots)                       */
/* ------------------------------------------------------------------ */

const HOURS = Array.from({ length: 9 }, (_, i) => 10 + i); // 10..18 (slot starts)
const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const startOfWeek = (d: Date) => {
  const day = d.getDay();
  const out = new Date(d);
  out.setDate(d.getDate() - day);
  out.setHours(0, 0, 0, 0);
  return out;
};

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const formatHour = (h: number) => {
  const period = h >= 12 ? "PM" : "AM";
  const display = h > 12 ? h - 12 : h;
  return `${display} ${period}`;
};

const Scheduler = () => {
  const today = useMemo(() => new Date(), []);
  const [weekStart, setWeekStart] = useState(() => startOfWeek(today));
  const [selected, setSelected] = useState<{ day: Date; hour: number } | null>(null);

  const days = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const d = new Date(weekStart);
        d.setDate(weekStart.getDate() + i);
        return d;
      }),
    [weekStart]
  );

  const monthLabel = days[0].toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const monthLabelEnd = days[6].toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const headerLabel = monthLabel === monthLabelEnd ? monthLabel : `${monthLabel.split(" ")[0]} – ${monthLabelEnd}`;

  const goToday = () => setWeekStart(startOfWeek(new Date()));
  const goPrev = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() - 7);
    setWeekStart(d);
  };
  const goNext = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + 7);
    setWeekStart(d);
  };

  const isPast = (day: Date, hour: number) => {
    const slot = new Date(day);
    slot.setHours(hour, 0, 0, 0);
    return slot.getTime() < Date.now();
  };

  const handleConfirm = () => {
    if (!selected) return;
    const dayStr = selected.day.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const slot = `${formatHour(selected.hour)} – ${formatHour(selected.hour + 1)}`;
    const msg = encodeURIComponent(
      `Hi Aadarsh! I'd like to book a consultation on ${dayStr} at ${slot}. Please confirm availability.`
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl"
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-border bg-background/60">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={goToday}
            className="px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium border border-border rounded-md hover:bg-muted transition-colors active:scale-95"
          >
            Today
          </button>
          <button
            onClick={goPrev}
            aria-label="Previous week"
            className="p-1.5 rounded-md hover:bg-muted transition-colors active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next week"
            className="p-1.5 rounded-md hover:bg-muted transition-colors active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <h3 className="font-display text-base md:text-xl text-foreground ml-1 md:ml-2">{headerLabel}</h3>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-foreground/60">
          <Clock className="w-3.5 h-3.5" />
          10 AM – 7 PM
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-border bg-background/40">
        <div />
        {days.map((d, i) => {
          const isToday = sameDay(d, today);
          return (
            <div
              key={i}
              className={`text-center py-3 border-l border-border ${
                isToday ? "bg-accent/5" : ""
              }`}
            >
              <div className="text-[10px] md:text-xs font-medium tracking-wider text-foreground/60">
                {DAY_LABELS[i]}
              </div>
              <div
                className={`mt-1 inline-flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full text-sm md:text-base font-medium ${
                  isToday ? "bg-accent text-accent-foreground shadow-md" : "text-foreground"
                }`}
              >
                {d.getDate()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Time grid */}
      <div className="max-h-[440px] overflow-y-auto">
        {HOURS.map((h) => (
          <div key={h} className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-border last:border-b-0">
            <div className="text-[10px] md:text-xs text-foreground/50 pr-2 pt-1.5 text-right">
              {formatHour(h)}
            </div>
            {days.map((d, i) => {
              const isSelected = selected && sameDay(selected.day, d) && selected.hour === h;
              const past = isPast(d, h);
              const isToday = sameDay(d, today);
              return (
                <button
                  key={i}
                  onClick={() => !past && setSelected({ day: d, hour: h })}
                  disabled={past}
                  className={`relative h-12 md:h-14 border-l border-border transition-all ${
                    past
                      ? "bg-muted/30 cursor-not-allowed"
                      : isSelected
                      ? "bg-accent/20 ring-2 ring-accent ring-inset"
                      : isToday
                      ? "bg-accent/[0.03] hover:bg-accent/15 active:bg-accent/20"
                      : "hover:bg-accent/10 active:bg-accent/15"
                  }`}
                  aria-label={`${d.toDateString()} ${formatHour(h)}`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="slot-pill"
                      className="absolute inset-1 rounded-md bg-accent text-accent-foreground flex items-center justify-center text-[10px] md:text-xs font-semibold shadow-md"
                    >
                      <Check className="w-3 h-3 mr-1" /> Selected
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Action footer */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border bg-background/60 overflow-hidden"
          >
            <div className="px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {selected.day.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {formatHour(selected.hour)} – {formatHour(selected.hour + 1)} (IST)
                  </p>
                </div>
              </div>
              <button
                onClick={handleConfirm}
                className="w-full sm:w-auto px-6 py-2.5 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-accent/90 transition-all active:scale-95 shadow-md"
              >
                Schedule via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ContactPage = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <div className="pt-24" />

    {/* Scheduler */}
    <section className="section-padding pb-8 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-label mb-3">Schedule</p>
          <div className="gold-line mb-4" />
          <h2 className="text-display-lg text-foreground mb-3">
            Book a <span className="italic text-accent">Consultation</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-xl">
            Pick a time that works for you. Working hours are 10 AM – 7 PM (IST), Monday through Saturday.
          </p>
        </div>
        <Scheduler />
      </div>
    </section>

    <ContactSection />
    <Footer />
    <FloatingContactIcons />
  </main>
);

export default ContactPage;
