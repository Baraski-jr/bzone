"use client"
import { products } from "@wix/stores"
import React, { useEffect, useMemo, useState } from "react"
import Add from "../AddToCart"
import { ControlQuantity } from "../Quantity"

const CustomizeProduct = ({
  productId,
  variants,
  productOptions,
  product,
}: {
  product: products.Product
  productId: string
  variants: products.Variant[]
  productOptions: products.ProductOption[]
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string
  }>({})

  const [selectedVariant, setselectedVariant] = useState<products.Variant>()

  const isAvailableForPurchase = useMemo(() => {
    if (!product.manageVariants && product.stock?.inStock) {
      return true
    }
    if (!product.manageVariants && !product.stock?.inStock) {
      return false
    }

    return selectedVariant?.stock?.inStock
  }, [selectedVariant, product])

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices
      if (!variantChoices) return false
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      )
    })
    setselectedVariant(variant)
  }, [selectedOptions, variants])

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }))
  }

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices
      if (!variantChoices) return false
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      )
    })
  }

  return (
    <div className="flex flex-col s gap-6">
      {/* Size */}
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium  lowercase text-slate-800">
            select a {option.name}
          </h4>
          <div className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              })

              const selected =
                selectedOptions[option.name!] === choice.description

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!)

              return option.name === "Color" ? (
                <div
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              ) : (
                <div
                  className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </div>
              )
            })}
          </div>
        </div>
      ))}
      <ControlQuantity />

      {isAvailableForPurchase ? (
        <div className="flex flex-col md:flex-row md:gap-3">
          <Add productId={productId} product={product} />
          {/* <Add productId={productId} product={product} /> */}
        </div>
      ) : (
        <Add productId={productId} disable={true} product={product} />
      )}
    </div>
  )
}

export default CustomizeProduct
