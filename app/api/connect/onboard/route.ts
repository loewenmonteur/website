import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-v2";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { accountId } = body;

    if (!accountId) {
      return NextResponse.json(
        { error: "Account ID is required." },
        { status: 400 }
      );
    }

    /**
     * ONBOARDING LINK (V2)
     * 
     * Uses v2.core.accountLinks to create an onboarding flow for the 'recipient' configuration.
     */
    const origin = req.headers.get("origin") || "http://localhost:3000";
    
    const accountLink = await stripeClient.v2.core.accountLinks.create({
      account: accountId,
      use_case: {
        type: 'account_onboarding',
        account_onboarding: {
          configurations: ['recipient'], // Onboarding for the recipient capability
          refresh_url: `${origin}/connect-demo`, // Link expiration or error
          return_url: `${origin}/connect-demo?accountId=${accountId}`, // Success
        },
      },
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (error: unknown) {
    console.error("Stripe Onboarding Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
