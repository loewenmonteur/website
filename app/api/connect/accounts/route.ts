import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-v2";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and Name are required." },
        { status: 400 }
      );
    }

    /**
     * CREATE CONNECTED ACCOUNT (V2)
     * 
     * We use the V2 API to create an account where the platform is responsible 
     * for pricing and fee collection ('application').
     * 
     * NOT USING top-level 'type'.
     */
    const account = await stripeClient.v2.core.accounts.create({
      display_name: name,
      contact_email: email,
      identity: {
        country: 'us', // Hardcoded to 'us' for this sample as per prompt/standard, or could be dynamic
      },
      dashboard: 'express', // Using Express dashboard for simplicity
      defaults: {
        responsibilities: {
          fees_collector: 'application',
          losses_collector: 'application',
        },
      },
      configuration: {
        recipient: {
          capabilities: {
            stripe_balance: {
              stripe_transfers: {
                requested: true,
              },
            },
          },
        },
      },
    });

    // In a real app, you would store `account.id` in your database mapped to the user.
    // e.g. await db.users.update({ where: { email }, data: { stripeAccountId: account.id } });

    return NextResponse.json({ accountId: account.id });
  } catch (error: unknown) {
    console.error("Stripe Account Creation Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
