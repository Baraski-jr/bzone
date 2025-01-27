"use client"
import { coloursType, sizesType } from "@/types"
import { products } from "@wix/stores"
import React, { useState } from "react"

const CustomizeProduct = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string
  variants: products.Variant[]
  productOptions: products.ProductOption[]
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string
  }>({})

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }))
  }

  return (
    <div className="flex flex-col s gap-6">
      {/* Size */}
      {productOptions.map((option) => (
        <div className="space-y-4 py-3" key={option.name}>
          <h3 className="font-normal">{option.name}: </h3>
          <div className="flex gap-x-2 pl-4">
            {option.choices?.map((choice) => (
              <div
                className={
                  "border-slate-600 flex gap-x-3 text-slate-800 font-medium px-4 py-2 cursor-pointer rounded-sm border-2 "
                }
              >
                <div className="size-6 rounded-full flex items-center justify-center cursor-pointer">
                  <span
                    className={`h-5 w-5 bg-${name}-500 rounded-full `}
                  ></span>
                  {choice.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomizeProduct
