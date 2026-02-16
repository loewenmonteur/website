import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-v2";

const stripe = stripeClient;

export async function POST(req: Request) {
  try {
    const { amount, tier, promoCode } = (await req.json()) as {
      amount?: number;
      tier?: string;
      promoCode?: string;
    };

    // Validate promo code server-side
    let finalAmount = amount || 29900;
    let appliedPromo = "";

    if (promoCode?.toUpperCase() === "EARLYBIRD") {
      finalAmount = 9900; // 99€
      appliedPromo = "EARLYBIRD";
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalAmount,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        tier: tier || "trafo",
        ...(appliedPromo && {
          promoCode: appliedPromo,
          originalAmount: "29900",
          discount: String(29900 - finalAmount),
        }),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Stripe Payment Intent Error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
