"use server"
import { redis } from "@/lib/redis"
import stripe from "@/lib/stripe"
import { Metadata } from "@/types"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature)
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  console.log("webhook")

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Stripe webhook secret is not set." },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    return NextResponse.json(
      { error: `Webhook Error: ${error}` },
      { status: 400 }
    )
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      const order = await createOrder(session)
      console.log("Order created in Successfull: ", order)
    } catch (error) {
      return NextResponse.json(
        { error: `Error creating order : ${error}` },
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
    currency,
    metadata,
    created,
    payment_intent,
    total_details,
  } = session

  const { orderNumber, customerName } = metadata as Metadata

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    {
      expand: ["data.price.product"],
    }
  )

  const rediProducts = lineItemsWithProduct.data.map((lineItem) => ({
    _key: crypto.randomUUID(),
    product: {
      _type: "reference",
      _ref: (lineItem.price?.product as Stripe.Product)?.metadata?.id,
    },
    quantity: lineItem.quantity || 0,
  }))

  const order = {
    type: crypto.randomUUID(),
    orderNumber,
    customerName,
    stripeCheckoutSessionId: id,

    currency,
    amountDiscount: total_details?.amount_discount
      ? total_details.amount_discount / 100
      : 0,

    products: rediProducts,
    totalPrices: amount_total ? amount_total / 100 : 0,
    status: "paid",
    orderDate: created,
  }

  await redis.set(`order:${order.orderNumber || ""}`, JSON.stringify(order))
  return order
}
