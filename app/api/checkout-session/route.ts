import { NextResponse } from "next/server";
import { stripeClient as stripe } from "@/lib/stripe-v2";

export async function POST(req: Request) {
  try {
    const { promoCode } = (await req.json()) as {
      promoCode?: string;
    };

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://loewentrafo.de";

    // Apply EARLYBIRD discount via Stripe coupon
    let discounts: { coupon: string }[] | undefined;

    if (promoCode?.toUpperCase() === "EARLYBIRD") {
      // Create or retrieve the coupon
      try {
        await stripe.coupons.retrieve("EARLYBIRD");
      } catch {
        await stripe.coupons.create({
          id: "EARLYBIRD",
          amount_off: 20000, // 200€ in cents
          currency: "eur",
          name: "Frühbucher-Rabatt",
          duration: "once",
        });
      }
      discounts = [{ coupon: "EARLYBIRD" }];
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
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
      ...(discounts && { discounts }),
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
      metadata: {
        tier: "trafo",
        ...(promoCode && { promoCode: promoCode.toUpperCase() }),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Stripe Checkout Session Error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "session_id is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.status,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Stripe Session Retrieve Error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
