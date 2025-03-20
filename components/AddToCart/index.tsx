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
      <div className="flex flex-2 justify-center items-center rounded-full border-2 border-transparent hover:border-slate-100 h-12  px-2 bg-slate-200 bg-opacity-55 transition-all duration-150">
        <button
          type="button"
          className="font-semibold rounded-full h-8 aspect-square flex items-center justify-center cursor-pointer text-white hover:scale-105 active:scale-75 bg-primary disabled:cursor-not-allowed disabled:bg-opacity-70 transition-transform duration-100"
          onClick={() => handleQuantity("d")}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className=" h-full aspect-square flex items-center justify-center">
          {quantity}
        </span>
        <button
          type="button"
          className="font-semibold rounded-full h-8 aspect-square flex items-center justify-center cursor-pointer text-white hover:scale-105 active:scale-75 bg-primary disabled:cursor-not-allowed disabled:bg-opacity-70 transition-transform duration-100"
          onClick={() => handleQuantity("i")}
          disabled={quantity === stockNumber}
        >
          +
        </button>
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
          className="flex-1 bg-opacity-0  hover:bg-opacity-95 rounded-full bg-primary border-2 border-primary !text-slate-950 hover:text-white text-base h-12 transition-all duration-300 disabled:bg-opacity-80 disabled:text-white disabled:cursor-not-allowed"
        >
          {name}
        </button>
      </div>
    </div>
  )
}

export default Add
