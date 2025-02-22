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
        <div className="flex flex-2 justify-center items-center border-2 border-slate-100 hover:border-slate-800 w-fit h-12 ">
          <button
            type="button"
            className="px-4 h-full text-white cursor-pointer hover:bg-slate-900 disabled:cursor-not-allowed transition-all duration-300"
            onClick={() => handleQuantity("d")}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="block px-3">{quantity}</span>
          <button
            type="button"
            className="px-4 h-full text-white cursor-pointer hover:bg-slate-900 disabled:cursor-not-allowed transition-all duration-300"
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
    <div className="w-full flex md:items-center gap-7">
      <ControlQuantity />
      <div className="flex-1 flex items-center gap-x-5 w-full">
        <button
          type="button"
          onClick={() => addItem(wixClient, productId, varianId, quantity)}
          disabled={isLoading || stockNumber < 1}
          className="flex-1 bg-opacity-0  hover:bg-opacity-95 bg-slate-950 border-2 border-slate-950 hover:text-white text-base h-12 transition-all duration-300 disabled:bg-opacity-80 disabled:cursor-not-allowed"
        >
          {name}
        </button>
      </div>
    </div>
  )
}

export default Add
