// import stripe from "@/lib/stripe"
// import { NextApiRequest, NextApiResponse } from "next"

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const { items } = req.body

//       //   Search for exsiting customer by email
//       //   const customers = await stripe.customers.list({
//       //     email: metadata.customerEmail,
//       //     limit: 1
//       //   })

//       // Create a new checkout session with the provided items
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: items.map((item: any) => ({
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: item.name,
//             },
//             unit_amount: item.price * 100,
//           },
//           quantity: item.quantity,
//         })),
//         mode: "payment",
//         success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${req.headers.origin}/cancel`,
//       })

//       // Respond with the session ID
//       res.status(200).json({ id: session.id })
//     } catch (err) {
//       // Handle errors
//       if (err instanceof Error) {
//         res.status(500).json({ error: err.message })
//       } else {
//         res.status(500).json({ error: "An unknown error occurred" })
//       }
//     }
//   } else {
//     // Handle unsupported methods
//     res.setHeader("Allow", "POST")
//     res.status(405).end("Method Not Allowed")
//   }
// }
