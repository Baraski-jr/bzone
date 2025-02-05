"use client"

import { useCartStore } from "@/hooks/useCartStore"
import { useWixClient } from "@/hooks/useWixCient"
import { useState } from "react"

export const Quantity = ({
  stockNumber,
  productId,
}: {
  stockNumber: number
  productId: string
}) => {
  const [quantity, setQuantity] = useState(1)

  // const { updateQuantity } = useCartStore()

  const wixClient = useWixClient()

  const handleQuantity = (type: "i" | "d") => {
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1)
      // updateQuantity(wixClient, productId, quantity)
    } else if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1)
      // updateQuantity(wixClient, productId, quantity)
    }
  }
  return (
    <div>
      {/* Quantity button */}
      <div className="flex flex-2 justify-center items-center border-2 border-slate-100 w-fit h-8">
        <button
          className="px-3 cursor-pointer hover:bg-slate-300 disabled:cursor-not-allowed transition-transform duration-200"
          onClick={() => handleQuantity("d")}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="block px-3">{quantity}</span>
        <button
          className="px-3 cursor-pointer hover:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => handleQuantity("i")}
          disabled={quantity === stockNumber}
        >
          +
        </button>
      </div>
    </div>
  )
}
