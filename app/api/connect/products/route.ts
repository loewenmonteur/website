import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-v2";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, priceInCents, connectedAccountId } = body;

    if (!name || !priceInCents || !connectedAccountId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    /**
     * PRODUCT CREATION
     * 
     * Create the product on the PLATFORM account.
     * We store the `connectedAccountId` in metadata to know who to transfer funds to later.
     */
    const product = await stripeClient.products.create({
      name,
      description: description || "Marketplace Item",
      default_price_data: {
        unit_amount: parseInt(priceInCents),
        currency: "eur", // Defaulting to EUR for this demo
      },
      metadata: {
        connected_account_id: connectedAccountId, // Mapping product -> partner
      },
    });

    return NextResponse.json({ product });
  } catch (error: unknown) {
    console.error("Product Creation Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
