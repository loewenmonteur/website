'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";
import { PaymentModal } from "./PaymentModal";

interface PreOrderButtonProps {
  className?: string;
  tier?: 'basic' | 'pro' | 'elite';
  amount?: number;
}

export function PreOrderButton({ className, tier = 'basic', amount = 29900 }: PreOrderButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        size="lg" 
        onClick={() => setIsModalOpen(true)}
        className={`h-16 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-yellow-500 
        transition-all duration-300 transform hover:scale-105 active:scale-95 
        shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] ${className}`}
      >
        Jetzt Vorbestellen <ShoppingCart className="ml-2 w-5 h-5" />
        <Sparkles className="ml-2 w-4 h-4 text-yellow-200 animate-pulse" />
      </Button>

      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tier={tier}
        amount={amount}
      />
    </>
  );
}
