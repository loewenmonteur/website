import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export default function ProvePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PROVE</h1>
          <p className="text-muted-foreground">Challenges & Beweise.</p>
        </div>
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
          Season 1 Active
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle>Aktuelle Challenge: Morning Routine</CardTitle>
            <CardDescription>7 Tage Konsequenz am Stück.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black mb-4">Tag 4<span className="text-xl font-normal text-muted-foreground">/7</span></div>
            <div className="w-full bg-zinc-800 rounded-full h-4 mb-4">
               <div className="bg-primary h-4 rounded-full w-[57%]" />
            </div>
            <Button className="w-full">Check-in heute</Button>
          </CardContent>
        </Card>

        <Card className="opacity-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10">
             <Lock className="w-8 h-8 mb-2 text-muted-foreground" />
             <span className="font-bold">Locked</span>
             <span className="text-xs text-muted-foreground">Verfügbar ab Level 5</span>
          </div>
          <CardHeader>
            <CardTitle>Die 100km Challenge</CardTitle>
            <CardDescription>Laufleistung im Februar.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-20 bg-zinc-800 rounded w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
