import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-v2";

const stripe = stripeClient;

export async function POST(req: Request) {
  try {
    const { promoCode } = (await req.json()) as {
      promoCode?: string;
    };

    // Build session params
    const sessionParams: Record<string, unknown> = {
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "LöwenTrafo System",
              description: "Dein komplettes Transformations-System",
            },
            unit_amount: 29900, // 299€
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://loewentrafo.de"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://loewentrafo.de"}/checkout`,
      metadata: {
        tier: "trafo",
      },
    };

    // Apply EARLYBIRD discount via Stripe coupon
    if (promoCode?.toUpperCase() === "EARLYBIRD") {
      // Create or retrieve the coupon
      let coupon;
      try {
        coupon = await stripe.coupons.retrieve("EARLYBIRD");
      } catch {
        // Coupon doesn't exist yet, create it
        coupon = await stripe.coupons.create({
          id: "EARLYBIRD",
          amount_off: 20000, // 200€ in cents
          currency: "eur",
          name: "Frühbucher-Rabatt",
          duration: "once",
        });
      }

      sessionParams.discounts = [{ coupon: coupon.id }];
      if (sessionParams.metadata && typeof sessionParams.metadata === "object") {
        (sessionParams.metadata as Record<string, string>).promoCode = "EARLYBIRD";
      }
    }

    const session = await stripe.checkout.sessions.create(
      sessionParams as Parameters<typeof stripe.checkout.sessions.create>[0]
    );

    return NextResponse.json({
      url: session.url,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Stripe Checkout Session Error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
