import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Flame } from "lucide-react";

export default function EatPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">EAT</h1>
          <p className="text-muted-foreground">Alltagstauglicher Fuel für High-Performer.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
         {[1, 2, 3].map((i) => (
           <Card key={i}>
             <div className="h-32 bg-zinc-800 rounded-t-lg w-full object-cover"></div>
             <CardHeader>
               <CardTitle className="text-lg">Power Bowl {i}</CardTitle>
               <div className="flex gap-4 text-xs text-muted-foreground pt-2">
                 <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 15 Min</span>
                 <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> 600 kcal</span>
               </div>
             </CardHeader>
             <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfekt für den Mittag im Office. Clean, schnell vorbereitet.
                </p>
                <Button variant="outline" size="sm" className="w-full">Rezept ansehen</Button>
             </CardContent>
           </Card>
         ))}
      </div>
    </div>
  )
}
