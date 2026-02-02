import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 text-center">
      <AlertCircle className="w-24 h-24 text-zinc-500 mb-6" />
      <h1 className="text-4xl font-black mb-4">Abgebrochen.</h1>
      <p className="text-xl text-zinc-400 max-w-lg mb-8">
        Deine Vorbestellung wurde nicht abgeschlossen. Du kannst es jederzeit erneut versuchen.
      </p>
      <Button asChild>
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  );
}
