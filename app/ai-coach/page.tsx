"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Bot, User, Sparkles, 
  ChevronLeft, ShieldCheck,
  RefreshCw, Volume2
} from "lucide-react";
import Link from "next/link";

interface Message {
  role: "assistant" | "user";
  content: string;
  id: string;
}

export default function AICoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: "0", 
      role: "assistant", 
      content: "Hinweis: Ich bin eine KI, trainiert auf der Philosophie von Orkun K. Ich ersetze keinen professionellen medizinischen oder rechtlichen Rat. Nutze meine Impulse als Werkzeuge für deinen eigenen Weg." 
    },
    { 
      id: "1", 
      role: "assistant", 
      content: "Willkommen im System, Löwe. Ich bin dein Mentor. Lass uns über dein System sprechen. Was blockiert heute deine Tragfähigkeit? Struktur, Energie oder Führung?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulated Orkun-Style Response Logic
    setTimeout(() => {
      let response = "Haltung ist das Fundament, aber das System ist die Struktur. Wenn dein Tagesablauf nicht trägt, nützt dir die beste Haltung nichts. Wo genau bricht deine Ordnung weg?";
      
      if (input.toLowerCase().includes("azubi")) {
        response = "Azubis führen heißt Vorbild sein. Wenn du willst, dass sie brennen, musst du selbst das Feuer sein. Hast du heute schon die Standards im System gesetzt?";
      } else if (input.toLowerCase().includes("müde") || input.toLowerCase().includes("keine lust")) {
        response = "Lass uns nicht über Motivation reden, sondern über deinen Protokoll-Check. Müdigkeit ist oft ein Zeichen von fehlender Systematik bei Schlaf oder Nahrung. Was sagt dein MOVE-Modul?";
      }

      const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: "assistant", content: response };
      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black">
      {/* Background Visuals */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1a1a1e_0%,#09090b_80%)] -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col h-screen w-full relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
           <Link href="/dashboard" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white transition-all group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
           </Link>
           <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                 <Sparkles className="w-3 h-3 text-yellow-500" />
                 <span className="text-[9px] font-black uppercase tracking-widest text-yellow-500">Pionier-Einblick: LÖWEN-WISSEN</span>
              </div>
              <h1 className="text-2xl font-black uppercase tracking-tighter text-white">Der Mentor</h1>
           </div>
           <div className="w-11" /> {/* Spacer */}
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-8 pr-4 scrollbar-hide mb-8"
        >
          <AnimatePresence>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${m.role === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div className={`flex gap-4 max-w-[85%] md:max-w-[70%] ${m.role === "assistant" ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    m.role === "assistant" 
                    ? "bg-zinc-900 border-yellow-500/30 text-yellow-500" 
                    : "bg-white border-white text-black"
                  }`}>
                    {m.role === "assistant" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  
                  <div className={`relative p-6 rounded-3xl ${
                    m.role === "assistant" 
                    ? (m.id === "0" 
                        ? "bg-zinc-900/20 border border-zinc-900/50 text-zinc-600 italic" 
                        : "bg-zinc-900/50 border border-zinc-900 text-zinc-300")
                    : "bg-zinc-100 text-zinc-900 font-bold"
                  }`}>
                    <p className={m.id === "0" ? "text-[10px]" : "text-sm md:text-lg leading-relaxed"}>{m.content}</p>
                    {m.role === "assistant" && (
                      <button 
                        aria-label="Sprachausgabe"
                        className="absolute bottom-4 right-4 text-zinc-700 hover:text-zinc-500 transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                 <div className="flex gap-4 items-center bg-zinc-900/30 px-6 py-4 rounded-2xl border border-zinc-900/50">
                    <div className="flex gap-1">
                       <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full animate-bounce" />
                       <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                       <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Mentor schreibt...</span>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="space-y-4">
           <div className="relative group">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Schreib deinen Mentor an..."
                className="w-full h-20 bg-zinc-900 rounded-4xl border border-zinc-800 px-10 text-white placeholder:text-zinc-700 focus:outline-none focus:border-yellow-500/50 transition-all shadow-2xl"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                aria-label="Nachricht senden"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 disabled:opacity-50 disabled:grayscale transition-all"
              >
                 <Send className="w-5 h-5" />
              </button>
           </div>
           
           {/* Privacy Hint */}
           <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                 <ShieldCheck className="w-3 h-3 text-zinc-800" />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-700">Privater Chat-Modus</span>
              </div>
              <div className="w-px h-3 bg-zinc-900" />
              <button className="flex items-center gap-2 text-zinc-700 hover:text-zinc-500 transition-colors">
                 <RefreshCw className="w-3 h-3" />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em]">Reset Session</span>
              </button>
           </div>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center">
           <p className="text-[8px] font-mono text-zinc-900 uppercase tracking-[0.5em]">
             LÖWENTRAFO INSTINKT-KODEX v1.0
           </p>
        </div>
      </div>
    </main>
  );
}
