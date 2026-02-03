import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  try {
    const { amount, tier } = (await req.json()) as { amount?: number; tier?: string };

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount || 29900,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        tier: tier || "basic",
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
