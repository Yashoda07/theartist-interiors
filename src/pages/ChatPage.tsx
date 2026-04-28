import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { autoReply } from "@/lib/autoReply";

type Msg = { role: "bot" | "user"; text: string };

const INITIAL: Msg[] = [
  { role: "bot", text: "Hi! I'm here to help with services, pricing, or booking a consultation. What would you like to know?" },
];

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
