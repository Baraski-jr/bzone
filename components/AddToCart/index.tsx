"use client"

import { useCartStore } from "@/hooks/useCartStore"
import { useWixClient } from "@/hooks/useWixCient"
import { products } from "@wix/stores"
import React, { useState } from "react"

interface AddProp {
  productId: string
  name?: string
  disable?: boolean
  stockNumber: number
  varianId: string
}

const createProductOptions = (
  selectedOptions?: any,
  selectedVariant?: products.Variant
) =>
  Object.keys(selectedOptions ?? {}).length
    ? {
        options: selectedVariant?._id
          ? { variantId: selectedVariant!._id }
          : { options: selectedOptions },
      }
    : undefined

const Add: React.FC<AddProp> = ({
  stockNumber,
  productId,
  varianId,
  name = "ADD TO CART",
  disable = false,
}) => {
  const [quantity, setQuantity] = useState<number>(1)

  const handleQuantity = (type: "i" | "d") => {
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1)
    } else if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const wixClient = useWixClient()

  const { addItem, isLoading } = useCartStore()

  const ControlQuantity = () => {
    return (
      <div>
        {/* Quantity button */}
        <div className="flex flex-2 justify-center items-center border-2 border-slate-100 w-fit h-8">
          <button
            className="px-3 cursor-pointer hover:bg-slate-300 transition-transform duration-200"
            onClick={() => handleQuantity("d")}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="block px-3">{quantity}</span>
          <button
            className="px-3 cursor-pointer hover:bg-slate-300 transition-all duration-300"
            onClick={() => handleQuantity("i")}
            disabled={quantity === stockNumber}
          >
            +
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-3 w-full">
      <ControlQuantity />
      <div className="flex-1 flex items-center gap-x-5 w-full">
        {/* Add Cart button */}
        <button
          onClick={() => addItem(wixClient, productId, varianId, quantity)}
          disabled={isLoading || stockNumber < 1}
          className="flex-1 bg-slate-950 text-base text-white h-12 transition-colors duration-300 disabled:bg-opacity-80 disabled:cursor-not-allowed hover:bg-opacity-95"
        >
          {name}
        </button>
      </div>
    </div>
  )
}

export default Add
