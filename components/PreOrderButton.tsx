'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";

interface PreOrderButtonProps {
  className?: string;
  text?: string;
}

export function PreOrderButton({ className, text = "Jetzt Vorbestellen" }: PreOrderButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className={`h-20 px-8 md:px-12 text-xl md:text-2xl rounded-2xl bg-yellow-500 text-black 
      transition-all duration-300 transform hover:scale-105 active:scale-95 
      shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:shadow-[0_0_60px_rgba(250,204,21,0.4)] 
      font-black uppercase tracking-widest ${className}`}
    >
      <Link href="/checkout" className="flex items-center justify-center gap-4">
        <span>{text}</span>
        <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            <Sparkles className="w-5 h-5 text-black/60 animate-pulse" />
        </div>
      </Link>
    </Button>
  );
}
