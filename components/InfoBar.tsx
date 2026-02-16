"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function InfoBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite loop animation
      const duration = 60; // Adjust speed here

      gsap.to(".scrolling-text", {
        x: "-50%",
        duration: duration,
        repeat: -1,
        ease: "linear",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="bg-yellow-500 text-black overflow-hidden h-10 flex items-center fixed top-0 w-full z-50"
    >
      <div className="flex whitespace-nowrap scrolling-text" ref={textRef}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-xs font-black uppercase tracking-widest flex items-center gap-3">
               <Image 
                 src="/images/brand/lion_head_black.png" 
                 alt="Leo Icon" 
                 width={24} 
                 height={24} 
                 className="w-6 h-6 object-contain brightness-0"
               />
              ACHTUNG: FRÜHBUCHER-PHASE AKTIV
            </span>
            <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              LÖWENTRAFO SYSTEM NUR 99€ STATT 299€
            </span>
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
             <span className="text-xs font-black uppercase tracking-widest flex items-center gap-1 group cursor-pointer">
              JETZT PLATZ SICHERN <ArrowRight className="w-3 h-3" />
            </span>
            <span className="w-8" /> {/* Spacing */}
          </div>
        ))}
      </div>
       {/* Gradient Overlays for smooth fade */}
       <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-yellow-500 to-transparent z-10" />
       <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-yellow-500 to-transparent z-10" />
       
       {/* Clickable Overlay to scroll to offer or go to explore page */}
       <Link href="/explore/trafo" className="absolute inset-0 z-20" />
    </div>
  );
}
