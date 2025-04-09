"use server"

import type { Stripe } from "stripe"
import convertToSubcurrency from "@/lib/ConvertToSubcurrency"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"
import { media as wixMedia } from "@wix/sdk"
import { Metadata } from "@/types"
import { headers } from "next/headers"
import { stripe } from "@/lib/stripe"
import { LineItem } from "@/components/buyButton"

export async function createCheckoutSession (
  products: LineItem[],
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
        line_items: products.map((item: LineItem) => ({
          price_data: {
            currency: "usd",
            unit_amount: convertToSubcurrency(
              Number(item.price_data.unit_amount) ?? 0
            ),
            product_data: {
              name: item.price_data.product_data.name,
              description: `Product ID: ${item.price_data.product_data.description}`,
              metadata: {
                id: item.price_data.product_data.description,
              },
              images: [
                item.price_data.product_data.images
                  ? wixMedia.getScaledToFillImageUrl(
                      item.price_data.product_data.images[0],
                      100,
                      100,
                      {}
                    )
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
