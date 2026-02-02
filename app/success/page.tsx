import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 text-center">
      <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
      <h1 className="text-4xl font-black mb-4">Du bist dabei.</h1>
      <p className="text-xl text-zinc-400 max-w-lg mb-8">
        Deine Vorbestellung ist eingegangen. Wir melden uns, sobald das System live geht.
      </p>
      <Button asChild>
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  );
}
