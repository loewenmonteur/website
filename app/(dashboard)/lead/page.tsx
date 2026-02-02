import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export default function LeadPage() {
  const videos = [
    { title: "Verantwortung übernehmen", duration: "12:00" },
    { title: "Disziplin ist Freiheit", duration: "08:30" },
    { title: "Balance halten", duration: "15:45" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">LEAD</h1>
        <p className="text-muted-foreground">Haltung, Mentoring & Führung.</p>
      </div>

      <div className="grid gap-6">
        {videos.map((vid, i) => (
          <Card key={i} className="flex flex-col md:flex-row overflow-hidden hover:bg-zinc-900/50 transition-colors cursor-pointer group">
            <div className="w-full md:w-64 bg-black flex items-center justify-center aspect-video md:aspect-auto text-zinc-700 group-hover:text-white transition-colors relative">
               <PlayCircle className="w-12 h-12" />
               <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">{vid.duration}</div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">{vid.title}</h3>
              <p className="text-sm text-muted-foreground">
                Erfahre, wie du dieses Prinzip in deinem Alltag anwendest, um nicht nur im Gym, sondern auch im Leben zu performen.
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
