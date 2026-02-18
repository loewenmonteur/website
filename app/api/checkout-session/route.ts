import { NextResponse } from "next/server";
import { stripeClient as stripe } from "@/lib/stripe-v2";

export async function POST(req: Request) {
  try {
    const { promoCode } = (await req.json()) as {
      promoCode?: string;
    };

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://loewentrafo.de";

    // Apply LOEWE discount via Stripe coupon
    let discounts: { coupon: string }[] | undefined;

    if (promoCode?.toUpperCase() === "LOEWE") {
      try {
        await stripe.coupons.retrieve("LOEWE");
        // If coupon is valid, we use it. If it's restricted, Stripe Checkout will error,
        // which we catch in the main try/catch block.
        discounts = [{ coupon: "LOEWE" }];
      } catch {
        // Create the coupon if it doesn't exist
        try {
          await stripe.coupons.create({
            id: "LOEWE",
            amount_off: 20000, // 200€ in cents
            currency: "eur",
            name: "Frühbucher-Rabatt",
            duration: "once",
          });
          discounts = [{ coupon: "LOEWE" }];
        } catch (createErr) {
          console.error("Failed to create coupon:", createErr);
          // If coupon creation fails (e.g. already exists but restricted), 
          // we proceed without discount to keep the flow alive
        }
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session = await (stripe.checkout.sessions.create as any)({
      mode: "payment",
      payment_method_configuration: "pmc_1SwWryLE2VLHHRbsPotnsUN1",
      shipping_address_collection: {
        allowed_countries: ["DE", "AT", "CH"],
      },
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
      payment_intent_data: {
        description: `Vielen Dank für deinen Kauf und dein Vertrauen. Dein Zugang zur Löwentransformation ist erfolgreich registriert. ✅ Die Löwentrafo erscheint im Mai 2026. Zum offiziellen Release erhältst du automatisch Zugriff auf alle Inhalte und Funktionen. Deine Membercard wird dir am Release-Tag zusätzlich per Post zugeschickt. Bis zum Start brauchst du nichts weiter zu tun. Alle weiteren Informationen erhältst du rechtzeitig per E-Mail. Bei Fragen erreichst du uns jederzeit unter management@loewenmonteur.de. Willkommen in der Löwentrafo. — LÖWE`,
      },
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
