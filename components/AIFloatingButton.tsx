"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function AIFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only set the timer if we are NOT on the ai-coach page
    if (pathname === "/ai-coach") return;
    
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Don't show on the AI coach page itself
  if (pathname === "/ai-coach") return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl max-w-[200px] relative"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              aria-label="Tooltip schließen"
              className="absolute -top-2 -right-2 w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-500 hover:text-white transition-colors border border-zinc-700"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-yellow-500" /> Der Mentor
            </p>
            <p className="text-xs text-white font-bold leading-tight">
              Instinkt-Check. Frag den Mentor des Rudels.
            </p>
            <Link 
              href="/ai-coach"
              className="mt-3 block text-[10px] font-black uppercase text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Chat starten →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <Link href="/ai-coach">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="KI Mentor Chat öffnen"
          className="w-16 h-16 rounded-full bg-yellow-500 text-black shadow-[0_0_30px_rgba(234,179,8,0.3)] flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <Bot className="w-8 h-8 relative z-10" />
        </motion.button>
      </Link>
    </div>
  );
}
