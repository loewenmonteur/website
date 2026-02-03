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
    /**
     * ERROR HANDLING:
     * If the API Key is missing, we provide a helpful error message to guide the developer.
     */
    throw new Error(
      "MISSING_STRIPE_SECRET_KEY: Please add your 'STRIPE_SECRET_KEY' to your environment variables (e.g., .env.local). " +
      "You can find your keys at https://dashboard.stripe.com/apikeys"
    );
  }

  return new Stripe(secretKey);
};

export const stripeClient = getStripeClient();
