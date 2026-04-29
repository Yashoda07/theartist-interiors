import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What areas do you serve for on-site interior projects?",
    answer: "We currently handle full site execution projects across Mumbai and the Mumbai Metropolitan Region (MMR). For 3D visualization and design consultation services, we work with clients globally — all you need is a floor plan and a vision!",
  },
  {
    question: "How does the 3D visualization process work for remote clients?",
    answer: "It's simple! Share your floor plan and design preferences, and we create photorealistic 3D renders of your space. You can request unlimited revisions until you're 100% satisfied. The entire process happens online — from concept to final delivery.",
  },
  {
    question: "What is the typical timeline for a residential interior project?",
    answer: "A complete residential project typically takes 45–90 days depending on the scope and size. This includes design conceptualization (1–2 weeks), 3D visualization & approvals (1–2 weeks), and site execution (4–8 weeks). We provide a detailed timeline before project kickoff.",
  },
  {
    question: "Do you offer consultation before starting a full project?",
    answer: "Yes! We offer an initial design consultation where we understand your requirements, lifestyle, and budget. This helps both parties evaluate the fit before committing to a full project. Book one through our contact page — it's the best first step.",
  },
  {
    question: "What's included in your end-to-end interior design service?",
    answer: "Everything from concept to completion: space planning, 2D layouts, 3D visualization, material & color selection, furniture procurement, vendor coordination, site execution, and quality checks. We handle it all so you don't have to worry about a thing.",
  },
  {
    question: "How do you handle budgeting and cost transparency?",
    answer: "We provide a detailed cost breakdown before any work begins, covering design fees, materials, labour, and furnishings. There are no hidden charges. We also offer flexible packages to suit different budgets while maintaining quality standards.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding section-spacing bg-card">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-label mb-4">FAQ</p>
          <div className="gold-line mb-6" />
          <h2 className="text-display-lg text-foreground mb-4">
            Got <span className="italic text-accent">Questions?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-14 leading-relaxed">
            Here are answers to the most common things clients ask us before starting a project.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
                    isOpen ? "border-accent/50 bg-accent/5" : "border-border bg-card hover:border-accent/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                  >
                    <span className="text-lg md:text-xl font-display font-medium text-foreground leading-snug">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? "text-accent" : "text-foreground/60"}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                          <div className="w-full h-px bg-border mb-4" />
                          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
