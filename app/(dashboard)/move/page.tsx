import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

export default function MovePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">MOVE</h1>
        <p className="text-muted-foreground">Struktur & Routinen.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tägliche Routine: Morning Prime</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {["06:00 - Aufstehen (Kein Snooze)", "06:05 - Wasser + Salz/Limette", "06:15 - Bewegung (10 Min Mobility)", "06:30 - Deep Work Block 1"].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all cursor-pointer">
              {i < 2 ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-zinc-600" />}
              <span className={i < 2 ? "line-through text-muted-foreground" : ""}>{item}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
