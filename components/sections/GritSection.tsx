"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function GritSection() {
  return (
    <section className="py-48 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-square bg-zinc-900 rounded-[4rem] border border-zinc-900 overflow-hidden relative group">
                <Image 
                  src="/images/championships/orkun_trainer.png"
                  alt="Orkun and Trainer Mertzenich - Mentorship"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="space-y-6 text-center">
                      <Quote className="w-12 h-12 text-yellow-500/20 mx-auto" />
                      <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white italic leading-tight">
                         &quot;Vom ersten Landesmeister-Titel direkt zur Deutschen Meisterschaft. Ich wollte den Cut machen – aber mein Team ließ mich nicht fallen.&quot;
                      </p>
                      <p className="text-xs font-black uppercase tracking-[0.4em] text-yellow-500">— Orkun Arslanmekik</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-600">Der Weg zum Champion</h2>
              <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                Disziplin ist<br />ein <span className="text-zinc-800">Umfeld-Spiel</span>
              </h3>
            </div>
            
            <div className="space-y-8 text-zinc-500 text-lg font-bold leading-relaxed tracking-tight">
              <p>
                Nach dem Sieg bei der NRW-Meisterschaft war die Luft raus. Die Last aus Betrieb, Training und Familie war fast erdrückend. Ich wollte den „Cut“ machen – aufhören, bevor die Deutsche Meisterschaft überhaupt begann.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-zinc-900">
                <div className="space-y-2">
                  <p className="text-yellow-500 font-black uppercase tracking-widest text-[10px]">Support System</p>
                  <p className="text-white uppercase tracking-tighter">Familie & Freunde</p>
                </div>
                <div className="space-y-2">
                  <p className="text-yellow-500 font-black uppercase tracking-widest text-[10px]">Mentorshift</p>
                  <p className="text-white uppercase tracking-tighter">Trainer Motivation</p>
                </div>
              </div>
              <p>
                Es war mein Umfeld, das mich zurückholte. Meine Familie, mein Trainer und meine Freunde haben mich motiviert, den letzten Schritt zu gehen. LÖWENTRAFO ist das System, das diesen Halt in Strukturen gießt. **Seid auf der Reise dabei.**
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
