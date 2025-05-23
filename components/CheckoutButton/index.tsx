"use client"

import { createCheckoutSession } from "@/action/createCheckoutSession"
import { useCartStore } from "@/hooks/useCartStore"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"
import { Metadata } from "@/types"
import { useEffect, useState } from "react"

export interface LineItem {
  price_data: {
    currency: string
    unit_amount: number | number
    product_data: {
      name: string
      description: string
      metadata: {
        id: string
      }
      images: string[]
    }
  }
  quantity: number
}
export const CheckoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { cart, counter } = useCartStore()
  const [productData, setProductData] = useState<LineItem[]>([])

  useEffect(() => {
    if (cart?.lineItems) {
      const items: LineItem[] = cart.lineItems.map((item) => ({
        price_data: {
          currency: "usd",
          unit_amount: Number(item.price?.amount) || 0,
          product_data: {
            name: item.productName?.original || "Unnamed Product",
            description: `Product ID: ${item._id}`,
            metadata: {
              id: item._id!,
            },
            images: [
              item.image ? item.image : IMAGE_PLACEHOLDER,
            ],
          },
        },
        quantity: item.quantity ?? 1,
      }))
      setProductData(items)
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

      // console.log(productData)

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
      disabled={isLoading || counter === 0}
      className="w-full bg-primary border-2 hover:border-black border-transparent text-white text-base h-12 transition-all duration-300 disabled:bg-opacity-80 disabled:text-white disabled:cursor-not-allowed"
    >
      {isLoading ? "Processing..." : "Checkout"}
    </button>
  )
}
0
