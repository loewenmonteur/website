import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { X, Sparkles, Dumbbell, TrendingUp, Zap, Utensils, Wallet, Clock } from "lucide-react";
import Image from "next/image";
import CommunityView from "./CommunityView";

interface TrafoBoxProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function TrafoBox({ isOpen: externalIsOpen, onOpenChange }: TrafoBoxProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;
  
  const setIsOpen = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    }
    if (!isControlled) {
      setInternalIsOpen(open);
    }
  };

  const containerVariants: Variants = {
    closed: { 
      width: "300px", 
      height: "300px", 
      borderRadius: "24px",
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 } // Small delay to let content exit
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    open: { 
      width: "100%", 
      height: "auto",
      borderRadius: "24px", 
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.1 } } // Fast exit
  };

  const closedContentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } }
  };

  return (
    <div className={`relative flex items-center justify-center transition-all duration-700 w-full`}>
      
      <motion.div
        layout
        variants={containerVariants}
        initial="closed"
        whileHover={!isOpen ? "hover" : undefined}
        animate={isOpen ? "open" : "closed"}
        onClick={() => !isOpen && setIsOpen(true)}
        className={`relative bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl z-50 mx-auto ${isOpen ? 'border-yellow-500/20 ring-1 ring-yellow-500/10' : 'cursor-pointer hover:border-yellow-500/50 transition-colors'}`}
      >
        <AnimatePresence mode="wait">
        {/* Closed State Visualization */}
        {!isOpen && (
           <motion.div 
              key="closed"
              variants={closedContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 group"
           >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)] animate-pulse" />
              
              <div className="relative w-32 h-32 mb-8">
                 <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
                 <div className="relative w-full h-full bg-zinc-900/50 backdrop-blur-sm rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors duration-500 overflow-hidden">
                    <Image 
                       src="/images/lion_logo.png" 
                       alt="Löwentrafo Emblem" 
                       width={128} 
                       height={128} 
                       className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                 </div>
                 {/* Rotating Ring */}
                 <div className="absolute inset-0 border border-yellow-500/30 rounded-full border-t-transparent animate-spin duration-[3s]" />
              </div>

              <div className="relative z-10 space-y-2">
                 <h2 className="text-3xl font-black uppercase text-white tracking-tighter">LÖWENTRAFO</h2>
                 <p className="text-xs text-yellow-500 uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Zugang freischalten
                    <Sparkles className="w-3 h-3" />
                 </p>
                 <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Kein Programm. Ein System.</p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           </motion.div>
        )}

        {/* Open State Content */}
        {isOpen && (
          <motion.div 
            key="open"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col h-full bg-zinc-950/50 relative"
          >
             {/* Background Texture */}
             <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
             
             {/* Header */}
             <div className="p-6 md:p-8 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-30">
                <div className="flex items-center gap-4">
                   <div className="hidden md:flex w-12 h-12 bg-yellow-500 rounded-xl items-center justify-center shadow-lg shadow-yellow-500/20 overflow-hidden border border-yellow-400">
                      <Image 
                         src="/images/lion_logo.png" 
                         alt="Löwentrafo Logo" 
                         width={48} 
                         height={48} 
                         className="w-full h-full object-cover"
                      />
                   </div>
                   <div>
                      <h2 className="text-2xl font-black uppercase text-white tracking-widest leading-none">Löwentrafo</h2>
                      <div className="flex items-center gap-2 mt-1">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                         <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">System Online</p>
                      </div>
                   </div>
                </div>
                
                <div className="flex items-center gap-4">
                   {/* Close / Minimize Button */}
                   <button 
                     onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                     className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors border border-zinc-800 group"
                     title="Box schließen"
                     aria-label="Close Box"
                   >
                       <X className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                   </button>
                </div>
             </div>

             {/* Content Area - Sequential Scroll */}
             <div className="flex-1 bg-zinc-950/30">
                
                {/* Training Section */}
                <div className="relative group">
                   <div className="absolute inset-0 h-64 overflow-hidden z-0">
                      <Image
                         src="/images/gateway_work_new.png"
                         alt="Training Background"
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover object-top opacity-30 group-hover:opacity-50 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
                   </div>
                   <div className="relative z-10 p-6 md:p-12 border-b border-zinc-800/30">
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Dein Training</h3>
                      <p className="text-zinc-500 text-sm mb-8 max-w-2xl">Effektiv & Machbar. Ein System, das in deinen vollen Alltag passt, statt ihn zu sprengen.</p>
                      
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { title: 'Zeiteffizient', desc: '45 Min. pro Einheit', icon: Clock },
                            { title: 'Struktur', desc: 'Klarer, simpler Plan', icon: TrendingUp },
                            { title: 'Muskelaufbau', desc: 'Sichtbare Ergebnisse', icon: Dumbbell },
                          ].map((item, i) => (
                            <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col items-center text-center gap-3 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
                               <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                                  <item.icon className="w-4 h-4 text-yellow-500" />
                               </div>
                               <div>
                                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                                  <p className="text-xs text-zinc-400">{item.desc}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                   </div>
                </div>

                {/* Nutrition Section */}
                <div className="relative group">
                   <div className="absolute inset-0 h-64 overflow-hidden z-0">
                      <Image
                         src="/images/nutrition_father_a.png"
                         alt="Nutrition Background"
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover opacity-20 group-hover:opacity-30 transition-opacity grayscale"
                      />
                      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
                   </div>
                   <div className="relative z-10 p-6 md:p-12 border-b border-zinc-800/30 bg-zinc-900/10">
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Deine Energie</h3>
                      <p className="text-zinc-500 text-sm mb-8 max-w-2xl">Keine Verbote, kein Hungern. Einfache Ernährung für mehr Leistung im Job und Familie.</p>
                      
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { title: 'Power', desc: 'Energie für den Tag', icon: Zap },
                            { title: 'Günstig', desc: 'Schont den Geldbeutel', icon: Wallet },
                            { title: 'Familientauglich', desc: 'Alle essen mit', icon: Utensils },
                          ].map((item, i) => (
                            <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col items-center text-center gap-3 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
                               <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                                  <item.icon className="w-4 h-4 text-yellow-500" />
                               </div>
                               <div>
                                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                                  <p className="text-xs text-zinc-400">{item.desc}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                   </div>
                </div>

                {/* Mindset Section */}
                <div className="relative group">
                   <div className="absolute inset-0 h-64 overflow-hidden z-0">
                      <Image
                         src="/images/championships/orkun_dbfv_win.jpg"
                         alt="Mindset Background"
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover object-top opacity-20 group-hover:opacity-30 transition-opacity grayscale"
                      />
                      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
                   </div>
                   <div className="relative z-10 p-6 md:p-12 border-b border-zinc-800/30">
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Rückgrat</h3>
                      <p className="text-zinc-500 text-sm mb-8 max-w-2xl">Haltung bewahren, wenn niemand zusieht.</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         {['Disziplin', 'Verantwortung', 'Konstanz'].map((item) => (
                           <div key={item} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col items-center text-center gap-3 backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
                              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                                 <Sparkles className="w-4 h-4 text-yellow-500" />
                              </div>
                              <h4 className="font-bold text-white uppercase tracking-wider text-sm">{item}</h4>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Community Section */}
                <div className="p-6 md:p-12">
                   <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Teil des Rudels</h3>
                   <p className="text-zinc-500 text-sm mb-8 max-w-2xl">Kein VIP Status. Löwen Member.</p>
                   <CommunityView />
                </div>
                
                {/* Footer / CTA */}
                <div className="p-12 text-center border-t border-zinc-800/50 bg-linear-to-b from-zinc-950 to-black">
                   <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Bereit?</p>
                   <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-yellow-500/20 hover:scale-105">
                      Zugang sichern
                   </button>
                </div>

             </div>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
