import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripeClient } from "@/lib/stripe-v2";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature") as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json({ error: "Missing Webhook Secret" }, { status: 500 });
  }

  try {
    /**
     * THIN EVENT PARSING
     * 
     * V2 events are 'thin', meaning the payload is minimal. 
     * We must parse it and then fetch the full event details.
     */
    const thinEvent = stripeClient.parseThinEvent(body, signature, webhookSecret);

    // Fetch the full event data
    const event = await stripeClient.v2.core.events.retrieve(thinEvent.id);

    // Handle specific V2 events
    switch (event.type) {
      case 'v2.account.requirements.updated':
        // Handle requirements update
        // e.g., Notify user they need to upload a document
        console.log("Requirements Updated for Account:", event.related_object?.id);
        break;
        
      case 'v2.account.recipient.capability_status_updated':
        // Handle capability change (e.g., transfers paused)
        console.log("Capability Status Updated:", event.related_object?.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
