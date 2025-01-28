"use client"

import { useCart } from "@/context/CartContext"
import { products } from "@wix/stores"
import React, { useEffect } from "react"

interface ProductCartProps {
  product: products.Product
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

const Add: React.FC<{
  productId: string
  name?: string
  disable?: boolean
  product: products.Product
}> = ({ product, name = "ADD TO CART", disable = false }) => {
  const [Quantitiy, setQuantitiy] = React.useState(1)
  const { cart, addToCart } = useCart()

  // useEffect(() => {
  //   const existingProduct = cart.find((item) => item.id == product._id)
  //   if (existingProduct) {
  //     setQuantitiy(existingProduct.quantity)
  //   }
  // }, [cart, product])

  const handleAddBtn = () => {
    // if (product.inventory < 1) return
    // if (product.inventory <= Quantitiy) return
    // addToCart(product)
  }
  return (
    <div className="flex-1 flex items-center gap-x-5">
      {/* Add Cart button */}
      <button
        onClick={() => handleAddBtn()}
        disabled={disable}
        className={`flex-1 bg-slate-950 text-base text-white h-12 transition-colors duration-300 ${
          disable ? "bg-opacity-80 cursor-not-allowed" : "hover:bg-opacity-95"
        }`}
      >
        {name}
      </button>
    </div>
  )
}

export default Add
