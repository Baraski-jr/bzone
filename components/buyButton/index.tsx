"use client"

import { createCheckoutSession } from "@/action/createCheckoutSession"
import { Metadata } from "@/types"
import { products } from "@wix/stores"
import { useEffect, useState } from "react"

export interface LineItem {
  price_data: {
    currency: string
    unit_amount: number
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
interface ProductCartProps {
  product: products.Product
}

export const BuyBtn: React.FC<ProductCartProps> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [productData, setProductData] = useState<LineItem[]>([])

  useEffect(() => {
    setProductData([
      {
        price_data: {
          currency: "usd",
          unit_amount: product.priceData?.price || 0,
          product_data: {
            name: product.name || "Unnamed Product",
            description: product._id || "A great product for you.",
            metadata: {
              id: product._id!,
            },
            images: [
              product.media?.items && product.media.items.length > 0
                ? product.media.items[0].image?.url ||
                  "https://via.placeholder.com/150"
                : "https://via.placeholder.com/150",
            ],
          },
        },
        quantity: 1,
      },
    ])
    // console.log(productData)
  }, [product])

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
      disabled={isLoading || product.stock?.quantity == 0}
      className="block w-full text-center text-sm bg-black hover:bg-opacity-90 text-white p-3 disabled:bg-opacity-75 disabled:cursor-not-allowed"
    >
      {isLoading ? "Processing..." : "Buy"}
    </button>
  )
}
0
