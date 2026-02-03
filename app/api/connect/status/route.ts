import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-v2";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const accountId = searchParams.get("accountId");

    if (!accountId) {
      return NextResponse.json({ error: "Account ID required" }, { status: 400 });
    }

    /**
     * ACCOUNT STATUS (V2 Retrieval)
     * 
     * Retrieve the account with specific expansions to check capabilities and requirements.
     */
    const account = await stripeClient.v2.core.accounts.retrieve(accountId, {
      include: ["configuration.recipient", "requirements"],
    });

    // Check if the recipient capability is active
    const readyToReceivePayments = 
      account.configuration?.recipient?.capabilities?.stripe_balance?.stripe_transfers?.status === "active";

    // Check if there are outstanding requirements
    // For V2, requirements summary gives us the high-level status
    const requirementsStatus = account.requirements?.summary?.minimum_deadline?.status;
    const onboardingComplete = 
      readyToReceivePayments && 
      requirementsStatus !== "currently_due" && 
      requirementsStatus !== "past_due";

    return NextResponse.json({
      readyToReceivePayments,
      onboardingComplete,
      details: account.requirements,
    });
  } catch (error: any) {
    console.error("Account Status Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
