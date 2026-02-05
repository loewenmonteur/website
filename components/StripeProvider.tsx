"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Appearance } from "@stripe/stripe-js";
import { ReactNode } from "react";

const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = key ? loadStripe(key) : null;

export function StripeProvider({ children }: { children: ReactNode }) {
  if (!key || !stripePromise) {
      console.warn("Stripe Publishable Key missing. Stripe elements will not render.");
      return <>{children}</>;
  }

  const appearance: Appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#eab308',
      colorBackground: '#09090b',
      colorText: '#ffffff',
      colorDanger: '#ef4444',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '12px',
    },
  };

  const options = {
    appearance,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}
