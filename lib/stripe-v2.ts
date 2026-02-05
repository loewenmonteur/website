import Stripe from "stripe";

/**
 * STRIPE CLIENT INITIALIZATION
 * 
 * We use a dedicated StripeClient instance for all requests.
 * The API version 2026-01-28.clover is used automatically by the SDK.
 */

const getStripeClient = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    console.warn("WARN: STRIPE_SECRET_KEY is missing. Using placeholder for build compatibility.");
    // Return a dummy client so the build doesn't fail on import.
    // Runtime calls will likely fail auth, which is expected without a key.
    return new Stripe("sk_test_build_placeholder");
  }

  return new Stripe(secretKey);
};

export const stripeClient = getStripeClient();
