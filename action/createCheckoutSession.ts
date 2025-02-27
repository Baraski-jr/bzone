"use server"

// import stripe from "@/lib/stripe"

import type { Stripe } from "stripe"

import convertToSubcurrency from "@/lib/ConvertToSubcurrency"
import { currentCart } from "@wix/ecom"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"
import { media as wixMedia } from "@wix/sdk"
import { Metadata } from "@/types"
import { headers } from "next/headers"
import { stripe } from "@/lib/stripe"

export async function createCheckoutSession(
  products: currentCart.LineItem[],
  metadata: Metadata
) {
  const baseUrl: string = (await headers()).get("origin") as string
  try {
    // Ensure the base URL is valid
    if (!baseUrl) {
      throw new Error("Base URL is not defined")
    }

    const successUrl = new URL(
      `/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
      baseUrl
    ).toString()
    const cancelUrl = new URL(`/cart`, baseUrl).toString()

    // Create a new checkout session with the provided items
    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        metadata,
        mode: "payment",
        allow_promotion_codes: true,
        success_url: successUrl,
        cancel_url: cancelUrl,
        // billing_address_collection: "auto",
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
          quantity: item.quantity ?? 1, // Move quantity to the correct level
        })),
      })
    return session.url
  } catch (error) {
    console.error("Error creating checkout session", error)
    throw error
  }
}
