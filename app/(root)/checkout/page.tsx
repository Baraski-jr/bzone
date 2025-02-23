"use client"
import Gutter from "@/components/Gutter"
import { useCartStore } from "@/hooks/useCartStore"
import Image from "next/image"
import { useEffect, useState } from "react"
import { media as wixMedia } from "@wix/sdk"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutPage from "./CheckoutPage"
import convertToSubcurrency from "@/lib/ConvertToSubcurrency"

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

export default function Page() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const SHIPINGCOST = 200
  const { cart } = useCartStore()

  useEffect(() => {
    cart?.lineItems &&
      setTotalPrice(
        cart!.lineItems!.reduce(
          (sum, item) =>
            sum + Number.parseFloat(item.fullPrice?.amount!) * item.quantity!,
          6
        )
      )

    cart?.lineItems &&
      setTotalItems(
        cart!.lineItems!.reduce((sum, item) => sum + item.quantity!, 0)
      )
  }, [cart])

  return (
    <section className="w-[85%] mx-auto">
      <Gutter />
      {!cart ? (
        <p className="Cart is empty"></p>
      ) : (
        <section className="flex flex-col lg:flex-row gap-x-3">
          {/* Customer information */}
          <section className="w-full py-12 order-2 lg:order-1">
            {/* Express Checkout Form section section*/}

            <Elements
              stripe={stripePromise}
              options={{
                mode: "payment",
                amount: convertToSubcurrency(totalPrice),
                currency: "usd",
              }}
            >
              <CheckoutPage amount={convertToSubcurrency(totalPrice)} />
            </Elements>
          </section>

          {/* Product information */}
          <section className="mt-5 w-full h-fit bg-slate-100 space-y-4 px-6 py-12 order-1 lg:order-2">
            {/* product items */}
            <section className="space-y-4">
              {cart?.lineItems?.map((item) => (
                <article key={item._id} className="flex items-center gap-x-3">
                  <div className="relative">
                    {item.image && (
                      <Image
                        width={100}
                        height={100}
                        src={wixMedia.getScaledToFillImageUrl(
                          item.image,
                          100,
                          100,
                          {}
                        )}
                        alt={item.productName?.original ?? ""}
                        className="bg-white border-2 rounded-md object-cover"
                      />
                    )}
                    <p className="absolute -top-2 -right-2 w-6 h-6 bg-slate-500 text-white text-sm rounded-full grid place-content-center">
                      {item.quantity}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-sm">{item.productName?.original}</p>
                    <p className="text-sm">GMD{item.fullPrice?.amount}.00</p>
                  </div>
                </article>
              ))}
            </section>
            {/* Discount Code */}
            <section className="flex gap-x-3 items-center">
              <input
                type="text"
                placeholder="Discount code"
                className="text-sm border-b-2 border-slate-300 py-3 px-3 text-slate-700 w-[90%] rounded-sm focus:outline-none focus:border-blue-500 hover:border-blue-200"
              />
              <button
                type="submit"
                className="w-[20%] text-sm py-3 px-3 bg-slate-200 hover:bg-slate-300 transition-all duration-300 "
              >
                APPLY
              </button>
            </section>
            {/* Calculated product information */}
            <div className="space-y-2 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm">
                  Subtotal • <span> {totalItems} items</span>
                </p>
                <p className="text-sm">GMD {totalPrice}.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Shipping &copy;</p>
                <p className="text-sm">GMD{SHIPINGCOST}.00</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-bold text-lg">Total Amount</p>
                <p className="font-bold text-lg">
                  GMD{totalPrice + SHIPINGCOST}.00
                </p>
              </div>
            </div>
          </section>
        </section>
      )}
    </section>
  )
}
