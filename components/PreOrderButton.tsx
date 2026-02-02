'use client';

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface PreOrderButtonProps {
  priceId?: string; // Optional: for client-only Checkout mode
  className?: string;
}

export function PreOrderButton({ className }: PreOrderButtonProps) {
  // Using a simplified External Link approach for the "Website + Stripe" prompt requirement.
  // In a real app, this might call an API route to create a session.
  // For now, we point to a placeholder Payment Link.
  const handlePreOrder = () => {
    // Replace with actual Stripe Payment Link
    window.location.href = "https://buy.stripe.com/test_mode_link"; 
  };

  return (
    <Button 
      size="lg" 
      onClick={handlePreOrder}
      className={`h-16 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] ${className}`}
    >
      Jetzt Vorbestellen <ShoppingCart className="ml-2 w-5 h-5" />
    </Button>
  );
}
