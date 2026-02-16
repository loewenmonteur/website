"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Endlich ein System, das meine Arbeit versteht. Ich bin abends nicht mehr kaputt, sondern habe Energie für meine Kinder.",
    author: "Pilot-Teilnehmer #04",
    role: "Anlagenmechaniker SHK, 34 Jahre"
  },
  {
    quote: "Die Kombination aus Trainingsplan und Baustellen-Alltag ist genial. Kein 0815-Fitness-Quatsch, sondern realisierbar.",
    author: "Pilot-Teilnehmer #12",
    role: "Meister Elektrotechnik, 41 Jahre"
  },
  {
    quote: "Das Mindset-Modul hat meinen Blick auf die Arbeit verändert. Ich gehe wieder mit Stolz in die Firma.",
    author: "Pilot-Teilnehmer #07",
    role: "Bauleiter, 29 Jahre"
  }
];

export default function TrafoTestimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-sm font-black uppercase tracking-[0.4em] text-yellow-500">Community</h2>
           <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">Stimmen aus<br/>der Pilotphase</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {testimonials.map((item, i) => (
              <div key={i} className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800 relative">
                 <Quote className="w-10 h-10 text-zinc-700 absolute top-8 left-8" />
                 <p className="text-zinc-300 text-lg font-medium leading-relaxed mb-8 relative z-10 pt-10">
                    "{item.quote}"
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-black text-black text-xs">
                       {item.author.split('#')[1]}
                    </div>
                    <div>
                       <p className="text-white font-bold text-sm uppercase">{item.author}</p>
                       <p className="text-zinc-500 text-xs">{item.role}</p>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
