"use server"
import { Metadata } from "@/types"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { stripe } from "@/lib/stripe"
import { redis } from "@/lib/redis/index"
import { convertToStandardcurrency } from "@/lib/ConvertToSubcurrency"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"

export async function POST(req: NextRequest) {
  let event: Stripe.Event

  try {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string
    if (!webhookSecret) {
      console.error("Stripe webhook secret is not set.")
      return NextResponse.json(
        { error: "Stripe webhook secret is not set." },
        { status: 400 }
      )
    }
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get("stripe-signature")
    if (!signature) {
      console.error("No signature")
      return NextResponse.json({ error: "No signature" }, { status: 400 })
    }
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error(`Webhook Error: ${error}`)
    return NextResponse.json(
      { error: `Webhook Error: ${error}` },
      { status: 400 }
    )
  }

  if (event.type === "checkout.session.completed") {

    const session = event.data.object as Stripe.Checkout.Session

    try {
      await createOrder(session)
    } catch (error) {
      return NextResponse.json(
        { error: `Error creating order: ${error}` },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ received: true })
}

async function createOrder(session: Stripe.Checkout.Session) {
  const {
    id,
    amount_total, 
    metadata,
    created,
    total_details,
  } = session

  const { orderNumber, customerName } = metadata as Metadata

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    {
      expand: ["data.price.product"],
    }
  )

  const products = lineItemsWithProduct.data.map((lineItem) => ({
    _key: crypto.randomUUID(),
    product: {
      id: (lineItem.price?.product as Stripe.Product)?.metadata?.id,
      image: (lineItem.price?.product as Stripe.Product)?.images?.[0] || IMAGE_PLACEHOLDER,
      quantity: lineItem.quantity || 0,
      name: (lineItem.price?.product as Stripe.Product)?.name || "",
      price: convertToStandardcurrency(lineItem.price?.unit_amount || 0),
    },

  }))

  const order = { 
    type: crypto.randomUUID(),
    orderNumber,
    customerName,
    stripeCheckoutSessionId: id,
    amountDiscount: total_details?.amount_discount
      ? convertToStandardcurrency(total_details.amount_discount)
      : 0,
    products,
    totalPrices: amount_total ? convertToStandardcurrency(amount_total ) : 0,
    status: "paid",
    orderDate: created,
  }

  await redis.hset(`order:${order.orderNumber || ""}`, order);

  return order
}
