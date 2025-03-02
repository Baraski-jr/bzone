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
    <div className="flex flex-2 justify-center items-center rounded-full border-2 border-transparent hover:border-slate-100 h-12  px-2 bg-slate-200 bg-opacity-55 transition-all duration-150">
      <button
        type="button"
        className="rounded-full h-8 aspect-square flex items-center justify-center font-semibold cursor-pointer text-white hover:scale-105 active:scale-75 bg-primary disabled:cursor-not-allowed disabled:bg-opacity-70 transition-transform duration-100"
        onClick={() => handleQuantity("d")}
        disabled={quantity === 1 || isLoading}
      >
        -
      </button>
      <span className="h-full aspect-square flex items-center justify-center">
        {quantity}
      </span>
      <button
        type="button"
        className="rounded-full h-8 aspect-square flex items-center justify-center font-semibold cursor-pointer text-white hover:scale-105 active:scale-75 bg-primary disabled:cursor-not-allowed disabled:bg-opacity-70 transition-transform duration-100"
        onClick={() => handleQuantity("i")}
        disabled={quantity === stockNumber || isLoading}
      >
        +
      </button>
    </div>
  )
}
