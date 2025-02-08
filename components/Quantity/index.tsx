"use client"

import { useCartStore } from "@/hooks/useCartStore"
import { useWixClient } from "@/hooks/useWixCient"
import { useState } from "react"

export const Quantity = ({
  isLoading,
  stockNumber,
  productId,
}: {
  isLoading: boolean
  stockNumber: number
  productId: string
}) => {
  const [quantity, setQuantity] = useState(1)

  const { updateQuantity } = useCartStore()
  const wixClient = useWixClient()

  const handleQuantity = (type: "i" | "d") => {
    setQuantity((prev) => {
      const newQuantity = type === "i" ? prev + 1 : prev - 1
      updateQuantity(wixClient, productId, newQuantity)
      return newQuantity
    })
  }
  return (
    <div>
      {/* Quantity button */}
      <div className="flex flex-2 justify-center items-center border-2 border-slate-300 w-fit h-8">
        <button
          type="button"
          className="px-3 cursor-pointer hover:bg-slate-300 disabled:cursor-not-allowed transition-transform duration-200"
          onClick={() => handleQuantity("d")}
          disabled={quantity === 1 || isLoading}
        >
          -
        </button>
        <span className="block px-3">{quantity}</span>
        <button
          type="button"
          className="px-3 cursor-pointer hover:bg-slate-300 disabled:cursor-not-allowed transition-all duration-300"
          onClick={() => handleQuantity("i")}
          disabled={quantity === stockNumber || isLoading}
        >
          +
        </button>
      </div>
    </div>
  )
}
