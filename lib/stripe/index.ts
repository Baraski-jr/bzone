// import Stripe from "stripe"

// if (!process.env.STRIPE_SECRET_KEY) {
//   throw new Error("Missing STRIPE_SECRET_KEY environment variable")
// }

// // Initialize Stripe with the secret key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2025-01-27.acacia",
// })

// export default stripe

import "server-only"

import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2025-02-24.acacia",
})
