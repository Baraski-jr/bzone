"use client"
import { products } from "@wix/stores"
import React, { useEffect, useMemo, useState } from "react"
import Add from "../AddToCart"
import Image from "next/image"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"

const CustomizeProduct = ({
  productId,
  variants,
  productOptions,
  product,
  selectedVariant,
  setselectedVariant,
  setSelectedOptions,
  selectedOptions,
  setSelectedProduct,

} : {
  product: products.Product
  productId: string
  variants: products.Variant[]
  productOptions: products.ProductOption[]
  setSelectedProduct: React.Dispatch<React.SetStateAction<products.Choice | undefined>>
  selectedVariant: products.Variant | undefined
  setselectedVariant: React.Dispatch<React.SetStateAction<products.Variant | undefined>>
  setSelectedOptions: React.Dispatch<React.SetStateAction<{[key: string]: string}>>
  selectedOptions: { [key: string]: string}
}) => {


  // console.log("Product Options: ", productOptions[0].choices)

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
      // console.log("Variant Choices : ", variantChoices)
      
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
          <h4 className="font-medium capitalize text-slate-800">
            {option.name}: <span>{selectedVariant?.choices?.Colour || ""}</span>
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            {option.choices?.map((choice) => {
              // const disabled = !isVariantInStock({
              //   ...selectedOptions,
              //   [option.name!]: choice.description!,
              // })

              const selected = selectedOptions[option.name!] === choice.description

              // console.log("Selected: ", choice)
              // setSelectedProduct(choice)
              const clickHandler = () => {
                setSelectedProduct(choice)
                handleOptionSelect(option.name!, choice.description!)
              }
              return option.name === "Color" ? (
                <div
                  className={`
                   w-8 h-8 rounded-full ring-1 ring-gray-300 relative`}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {/* {disabled && (
                    <div className="absolute w-10 h-[2px] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )} */}
                </div>
              ) : (
                <div
                  className="hover:ring-1 ring-primary text-sm cursor-pointer"
                  key={choice.description}
                  onClick={clickHandler}
                >
                  <div className={`${selected ? "ring-1 ring-primary" : ""} flex items-center gap-2 p-1`}>
                    <Image
                      width={50}
                      height={50}
                      src={choice.media?.mainMedia?.thumbnail?.url ?? IMAGE_PLACEHOLDER} 
                      alt={choice.description ?? ""}
                      className="bg-[#F5F5F5] object-cover"
                    />
                   {/* {choice.description} */}
                </div>
              </div>
              )
            })}
          </div>
        </div>
      ))}

      {isAvailableForPurchase ? (
        <div className="flex flex-col md:flex-row md:gap-3">
          <Add
            varianId="00000000-0000-0000-0000-000000000000"
            productId={productId}
            stockNumber={product.stock?.quantity || 0}
          />
        </div>
      ) : (
        <Add
          varianId="00000000-0000-0000-0000-000000000000"
          productId={productId}
          disable={true}
          stockNumber={product.stock?.quantity || 0}
        />
      )}
    </div>
  )
}

export default CustomizeProduct
