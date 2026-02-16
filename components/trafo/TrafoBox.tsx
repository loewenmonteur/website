import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Box, Sparkles } from "lucide-react";
import TrainingView from "./TrainingView";
import NutritionView from "./NutritionView";
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
      transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    open: { 
      width: "100%", 
      height: "auto", 
      minHeight: "85vh",
      borderRadius: "0px", 
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <div className={`relative flex items-center justify-center transition-all duration-700 ${isOpen ? 'w-full max-w-6xl mx-auto z-50 px-0 md:px-4' : ''}`}>
      
      {/* Backdrop when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        variants={containerVariants}
        initial="closed"
        whileHover={!isOpen ? "hover" : undefined}
        animate={isOpen ? "open" : "closed"}
        onClick={() => !isOpen && setIsOpen(true)}
        className={`relative bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl z-50 ${isOpen ? 'md:rounded-3xl border-yellow-500/20 ring-1 ring-yellow-500/10' : 'cursor-pointer hover:border-yellow-500/50 transition-colors'}`}
      >
        {/* Closed State Visualization */}
        {!isOpen && (
           <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 group"
              exit={{ opacity: 0 }}
           >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)] animate-pulse" />
              
              <div className="relative w-32 h-32 mb-8">
                 <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
                 <div className="relative w-full h-full bg-zinc-900/50 backdrop-blur-sm rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors duration-500">
                    <Box className="w-12 h-12 text-yellow-500" />
                 </div>
                 {/* Rotating Ring */}
                 <div className="absolute inset-0 border border-yellow-500/30 rounded-full border-t-transparent animate-spin duration-[3s]" />
              </div>

              <div className="relative z-10 space-y-2">
                 <h2 className="text-3xl font-black uppercase text-white tracking-tighter">Die Trafo Box</h2>
                 <p className="text-xs text-yellow-500 uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Systemzugriff
                    <Sparkles className="w-3 h-3" />
                 </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           </motion.div>
        )}

        {/* Open State Content */}
        {isOpen && (
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col h-full bg-zinc-950/50 max-h-[90vh] overflow-y-auto relative scroll-smooth"
          >
             {/* Background Texture */}
             <div className="sticky top-0 left-0 w-full h-screen bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none -mt-[100vh]" />
             
             {/* Header */}
             <div className="p-6 md:p-8 flex items-center justify-between border-b border-zinc-800/50 sticky top-0 bg-zinc-950/90 backdrop-blur-md z-30">
                <div className="flex items-center gap-4">
                   <div className="hidden md:flex w-12 h-12 bg-yellow-500 rounded-xl items-center justify-center shadow-lg shadow-yellow-500/20">
                      <Box className="w-6 h-6 text-black" />
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
                   {/* Mobile Close Button */}
                   <button 
                     onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                     className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors border border-zinc-800"
                     title="Box schließen"
                     aria-label="Close Box"
                   >
                       <X className="w-5 h-5 text-zinc-500 hover:text-white" />
                   </button>
                </div>
             </div>

             {/* Content Area - Sequential Scroll */}
             <div className="flex-1 bg-zinc-950/30">
                
                {/* Training Section */}
                <div className="p-6 md:p-8 border-b border-zinc-800/30">
                   <TrainingView />
                </div>

                {/* Nutrition Section */}
                <div className="p-6 md:p-8 border-b border-zinc-800/30 bg-zinc-900/10">
                   <NutritionView />
                </div>

                {/* Community Section */}
                <div className="p-6 md:p-8">
                   <CommunityView />
                </div>
                
                {/* Footer / CTA */}
                <div className="p-8 text-center border-t border-zinc-800/50 bg-linear-to-b from-zinc-950 to-black">
                   <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Bereit für die Transformation?</p>
                   <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-yellow-500/20 hover:scale-105">
                      Jetzt Starten
                   </button>
                </div>

             </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
