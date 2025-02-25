"use client"

import { createCheckoutSession, Metadata } from "@/action/createCheckoutSession"
import { useCartStore } from "@/hooks/useCartStore"
import { currentCart } from "@wix/ecom"
import { useEffect, useState } from "react"

export const CheckoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { cart } = useCartStore()
  const [productData, setProductData] = useState<currentCart.LineItem[]>([])

  useEffect(() => {
    if (cart?.lineItems) {
      setProductData(cart.lineItems)
    }
  }, [cart])

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: "omar ",
        // customerEmail: "jrbaraski@gmail.com ",
      }

      console.log(productData)

      const checkoutUrl = await createCheckoutSession(productData, metadata)

      if (checkoutUrl) {
        console.log(checkoutUrl)
        window.location.href = checkoutUrl
      }
    } catch (error) {
      console.error("Enter createing checkout session", error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={isLoading}
      className="block w-full text-center text-sm bg-black hover:bg-opacity-90 text-white p-3 disabled:bg-opacity-75"
    >
      {isLoading ? "Processing..." : "Checkout"}
    </button>
  )
}
0
