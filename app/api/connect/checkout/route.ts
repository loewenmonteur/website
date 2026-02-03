import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-v2";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId } = body;

    // 1. Retrieve the Price to find the Product, to find the Connected Account ID
    const price = await stripeClient.prices.retrieve(priceId, {
      expand: ['product'],
    });

    const product = price.product as any; // Type assertion for demo
    const destinationAccountId = product.metadata?.connected_account_id;

    if (!destinationAccountId) {
      return NextResponse.json({ error: "Product is not linked to a connected account" }, { status: 400 });
    }

    const priceAmount = price.unit_amount || 0;
    const applicationFee = Math.round(priceAmount * 0.1); // 10% Platform Fee

    const origin = req.headers.get("origin") || "http://localhost:3000";

    /**
     * CHECKOUT SESSION (Destination Charge)
     * 
     * We create a session on the platform, but set transfer_data to the connected account.
     * The application_fee_amount is kept by the platform.
     */
    const session = await stripeClient.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: applicationFee,
        transfer_data: {
          destination: destinationAccountId,
        },
      },
      mode: 'payment',
      success_url: `${origin}/connect-demo?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/connect-demo?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
