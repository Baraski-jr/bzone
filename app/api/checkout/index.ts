import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"
import convertToSubcurrency from "@/lib/ConvertToSubcurrency"
import { currentCart } from "@wix/ecom"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"
import { media as wixMedia } from "@wix/sdk"

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { products, metadata } = req.body

      // Ensure the base URL is valid
      const baseUrl =
        process.env.NODE_ENV === "production"
          ? `https://b-zone.vercel.app/`
          : `${process.env.NEXT_PUBLIC_BASE_URL}`

      if (!baseUrl) {
        throw new Error("Base URL is not defined")
      }

      const successUrl = new URL(
        `/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
        baseUrl
      ).toString()
      const cancelUrl = new URL(`/cart`, baseUrl).toString()

      // Create a new checkout session with the provided items
      const session = await stripe.checkout.sessions.create({
        metadata,
        mode: "payment",
        allow_promotion_codes: true,
        success_url: successUrl,
        cancel_url: cancelUrl,
        line_items: products.map((item: currentCart.LineItem) => ({
          price_data: {
            currency: "usd",
            unit_amount: convertToSubcurrency(
              Number(item.fullPrice?.amount) ?? 0
            ),
            product_data: {
              name: item.productName?.original || "Unnamed Product",
              description: `Product ID: ${item._id}`,
              metadata: {
                id: item._id!,
              },
              images: [
                item.image
                  ? wixMedia.getScaledToFillImageUrl(item.image, 100, 100, {})
                  : IMAGE_PLACEHOLDER,
              ],
            },
          },
          quantity: item.quantity ?? 1,
        })),
      })

      // Respond with the session URL
      res.status(200).json({ url: session.url })
    } catch (err) {
      // Handle errors
      if (err instanceof Error) {
        res.status(500).json({ error: err.message })
      } else {
        res.status(500).json({ error: "An unknown error occurred" })
      }
    }
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
