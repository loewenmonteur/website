"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("loewentrafo-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("loewentrafo-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("loewentrafo-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-100"
        >
          <div className="bg-zinc-900/90 backdrop-blur-2xl border border-zinc-800 rounded-4xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50" />
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-yellow-500" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-white mb-1">Privatsphäre & Ehre</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-bold">
                    Wir nutzen Cookies, um deine Experience zu optimieren und Zahlungen via Stripe sicher zu verarbeiten. Mehr dazu im <Link href="/datenschutz" className="text-zinc-400 underline decoration-zinc-800 hover:text-white transition-colors">Datenschutz</Link>.
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={handleAccept}
                    className="h-12 rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 font-black uppercase text-[10px] tracking-widest transition-all"
                  >
                    Akzeptieren <ChevronRight className="w-3 h-3 ml-2" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={handleDecline}
                    className="h-10 text-zinc-600 hover:text-zinc-400 text-[9px] font-black uppercase tracking-widest"
                  >
                    Nur Notwendige
                  </Button>
                </div>
              </div>
              
              <button 
                onClick={() => setIsVisible(false)}
                aria-label="Schließen"
                className="absolute top-4 right-4 p-2 text-zinc-700 hover:text-zinc-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
