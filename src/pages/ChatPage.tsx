import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Msg = { role: "bot" | "user"; text: string };

const INITIAL: Msg[] = [
  { role: "bot", text: "Hi! I'm here to help with services, pricing, or booking a consultation. What would you like to know?" },
];

const autoReply = (input: string): string => {
  const t = input.toLowerCase();
  if (/(price|cost|charge|fee|budget|rate)/.test(t)) {
    return "Our projects are scoped to your space and vision. Interior design starts from ₹150/sqft, and 3D visualization from ₹3,000 per render. Share your floor plan via the contact page for an exact quote!";
  }
  if (/(3d|render|visual)/.test(t)) {
    return "We create photorealistic 3D renders for clients worldwide — just send a floor plan + your preferences. Typical delivery: 5–10 days with unlimited revisions until you love it.";
  }
  if (/(book|consult|appoint|schedule|meet)/.test(t)) {
    return "Wonderful! Head to the Contact page to pick a date & time on the live calendar (Mon–Sat, 10am–7pm). I'll confirm via WhatsApp.";
  }
  if (/(time|how long|duration|deliver)/.test(t)) {
    return "A full residential project usually takes 45–90 days end-to-end. 3D visualization alone: 5–10 days.";
  }
  if (/(area|location|mumbai|where|serve)/.test(t)) {
    return "Site execution: Mumbai & MMR. Design & 3D services: globally — all online.";
  }
  if (/(service|offer|do you|what)/.test(t)) {
    return "Three core services: (1) Interior Design, (2) 3D Visualization, (3) Site Execution. Visit the Services section to explore.";
  }
  if (/(hi|hello|hey|namaste)/.test(t)) {
    return "Hi there! 👋 Ask me about services, pricing, timelines, or how to book a consultation.";
  }
  return "Thanks for your message! For a detailed answer, please book a free consultation via the Contact page or WhatsApp us directly.";
};

const ChatPage = () => {
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: autoReply(text) }]), 400);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="pt-24 pb-10 section-padding flex-1 flex flex-col max-w-3xl w-full mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-display text-foreground leading-tight">Chat with us</h1>
            <p className="text-sm text-foreground/65">Quick answers about services, pricing & booking</p>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto bg-card border border-border rounded-2xl p-4 space-y-3 min-h-[55vh]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-accent text-accent-foreground rounded-br-sm"
                    : "bg-background text-foreground border border-border rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") send(); }}
            placeholder="Ask about services, pricing…"
            className="flex-1 px-4 py-3 text-sm bg-card border border-border rounded-full focus:outline-none focus:border-accent"
          />
          <button
            onClick={send}
            aria-label="Send"
            className="w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ChatPage;
