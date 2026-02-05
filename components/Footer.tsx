"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-zinc-950 border-t border-zinc-900 text-center">
       <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 relative opacity-80 hover:opacity-100 transition-opacity duration-500">
              <Image 
                src="/images/brand/logo.png"
                alt="Löwenmonteur Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-800 hover:text-zinc-600 transition-colors cursor-default">
              Löwenmonteur <span className="text-zinc-900">Framework</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
             <Link href="/impressum" className="hover:text-yellow-500 transition-colors">Impressum</Link>
             <Link href="/datenschutz" className="hover:text-yellow-500 transition-colors">Datenschutz</Link>
             <Link href="/agb" className="hover:text-yellow-500 transition-colors">AGB</Link>
          </div>
          
          <p className="text-[9px] font-mono text-zinc-900 uppercase tracking-widest">
            Löwenmonteur © 2026. Dominance in Craftsmanship.
          </p>
       </div>
    </footer>
  );
}
