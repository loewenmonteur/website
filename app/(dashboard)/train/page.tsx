import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TrainPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">TRAIN</h1>
          <p className="text-muted-foreground">Kraft & Leistungsfähigkeit.</p>
        </div>
        <Button>Neuer Cycle</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
         {["Upper Body A", "Lower Body B"].map((plan, i) => (
           <Card key={i} className="group hover:border-primary/50 transition-colors cursor-pointer">
             <CardHeader>
               <CardTitle>{plan}</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="aspect-video bg-zinc-800 rounded-md flex items-center justify-center text-muted-foreground mb-4 group-hover:bg-zinc-800/80">
                 Video Placeholder
               </div>
               <p className="text-sm text-muted-foreground">3 Sätze x 12 Wdh.</p>
             </CardContent>
           </Card>
         ))}
      </div>
    </div>
  )
}
