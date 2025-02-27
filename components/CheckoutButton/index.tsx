"use client"

import { useCartStore } from "@/hooks/useCartStore"
import { Metadata } from "@/types"
import { currentCart } from "@wix/ecom"
import { useEffect, useState } from "react"

export const CheckoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { cart, counter } = useCartStore()
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

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: productData, metadata }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Error creating checkout session", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={isLoading || counter === 0}
      className="block w-full text-center text-sm bg-black hover:bg-opacity-90 text-white p-3 disabled:bg-opacity-75 disabled:cursor-not-allowed"
    >
      {isLoading ? "Processing..." : "Checkout"}
    </button>
  )
}
