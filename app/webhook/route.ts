import stripe from "@/lib/stripe"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { Stripe } from "stripe"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const sig = headersList.get("stripe-signature")

  if (!sig) return NextResponse.json({ error: "No signature" }, { status: 400 })

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.log("stripe webhook secret is not set.")
    return NextResponse.json(
      { error: "Stripe webhook secret is not set." },
      { status: 400 }
    )
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (error) {
    return NextResponse.json(
      { error: `Webhook Error: ${error}` },
      { status: 400 }
    )
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    // try {
    //   const order = await createOrderInSanity(session)
    //   console.log("order created in sanity", order)
    // } catch (error) {
    //   console.log("Error creating order in sanity", error)
    //   return NextResponse.json(
    //     { error: `Webhook Error: ${error}` },
    //     { status: 400 }
    //   )
    // }
  }

  return NextResponse.json({ received: true })
}
