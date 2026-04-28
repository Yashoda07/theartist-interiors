import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { autoReply } from "@/lib/autoReply";

type Msg = { role: "bot" | "user"; text: string };

const INITIAL: Msg[] = [
  { role: "bot", text: "Hi! I'm here to help with services, pricing, or booking a consultation. What would you like to know?" },
];

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleOpen = () => {
    if (isMobile) {
      navigate("/chat");
    } else {
      setOpen(true);
    }
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: autoReply(text) }]);
    }, 400);
  };

  return (
    <>
      {/* Floating launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" }, opacity: { duration: 0.3 } }}
            onClick={handleOpen}
            className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 pl-3 pr-4 py-2.5 bg-accent text-accent-foreground rounded-full shadow-xl hover:shadow-2xl hover:bg-accent/90 transition-all"
            aria-label="Open chat"
          >
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </span>
            <span className="text-sm font-medium hidden sm:inline">How can I help you?</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop / tablet panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-5 left-5 z-50 w-[min(360px,calc(100vw-2.5rem))] h-[480px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-accent text-accent-foreground">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span className="font-medium text-sm">Chat with The Artist Interiors</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:opacity-80">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-card">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-relaxed ${
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

            <div className="p-3 border-t border-border bg-background flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") send(); }}
                placeholder="Ask about services, pricing…"
                className="flex-1 px-3 py-2 text-sm bg-card border border-border rounded-full focus:outline-none focus:border-accent"
              />
              <button
                onClick={send}
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
