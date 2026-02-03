"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Appearance } from "@stripe/stripe-js";
import { ReactNode } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export function StripeProvider({ children }: { children: ReactNode }) {
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
