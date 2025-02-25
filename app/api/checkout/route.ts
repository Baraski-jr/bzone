// ;("use server")
// import { IMAGE_PLACEHOLDER } from "@/lib/constants"
// import stripe from "@/lib/stripe"
// import { products } from "@wix/stores"
// import { NextResponse } from "next/server"

// export type ProductProps = {
//   product: products.Product
//   quantity: number
// }

// export type Metadata = {
//   orderNumber: string
//   customerName: string
// }

// export async function createCheckoutSession(request: Request) {
//   try {
//     // const { products } = req.body
//     const { products }: { products: ProductProps[] } = await request.json()

//     // url
//     const baseUrl =
//       process.env.NODE_ENV === "production"
//         ? `https://${process.env.VERCEL_URL}`
//         : `${process.env.NEXT_PUBLIC_BASE_URL}`

//     const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`
//     const cancelUrl = `${baseUrl}/checkout`

//     // Shoud change the quantity
//     const lineItems = products.map(({ product, quantity }: ProductProps) => ({
//       price_data: {
//         currency: product.priceData?.currency || "usd",
//         unit_amount: (product.priceData?.price ?? 0) * 100,
//         product_data: {
//           name: product.name ?? "",
//           description: `Product Id: ${product._id}`,
//           metadata: {
//             id: product._id ?? "",
//           },
//           images: [product.media?.items?.[0]?.image?.url ?? IMAGE_PLACEHOLDER],
//         },
//       },
//       quantity: quantity ?? 1,
//     }))
//     // Create a new checkout session with the provided items
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       allow_promotion_codes: true,
//       success_url: successUrl,
//       cancel_url: cancelUrl,
//     })

//     // Respond with the session ID
//     console.log(NextResponse.json({ id: session.id }))
//     return NextResponse.json({ id: session.id })
//   } catch (err) {
//     console.error(err)
//     const errorMessage =
//       err instanceof Error ? err.message : "An unknown error occurred"
//     return NextResponse.json({ error: errorMessage }, { status: 500 })
//   }
// }
