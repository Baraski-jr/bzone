"use client"
import Link from "next/link"
import React, { useState } from "react"
import Image from "next/image"

import { ImageHover } from "@/components/HoverImage"
import { products } from "@wix/stores"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { VARIANT_ID } from "@/lib/constants"
import { CartModel } from "../cartModel"

interface ProductCartProps {
  product: products.Product
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const [isOpenCart, setIsOpenCart] = useState(false)

  const haddleAddToCart = () => {
    addItem(wixClient, product._id ?? "", VARIANT_ID, 1)
  }

  const wixClient = useWixClient()

  const { addItem, isLoading } = useCartStore()

  const ProductImage: React.FC = () => (
    <Link
      href={`/products/${product.slug}`}
      className="overflow-hidden bg-[#F5F5F5] block h-full"
    >
      {(product.media?.items?.length || 0) > 1 ? (
        <ImageHover
          url={product.media?.items?.[0]?.image?.url || "/product.png"}
          hoverUrl={product.media?.items?.[1]?.image?.url || "/product.png"}
          alt={product.media?.items?.[0]?.image?.altText || ""}
        />
      ) : (
        <div className="relative h-full">
          <Image
            width={2500}
            height={2500}
            src={product.media?.items?.[0]?.image?.url || "/product.png"}
            alt={product.media?.items?.[0]?.image?.altText || ""}
            sizes="80vw"
            className=" object-contain w-auto transition-opacity duration-500 "
          />
        </div>
      )}
    </Link>
  )

  return (
    <>
      <div className="relative py-5 mb-1 md:py-0 h-full rounded-md hover:bg-slate-50 transition-all duration-200">
        <div className="block overflow-hidden bg-[#F5F5F5]">
          <ProductImage />
        </div>
        <div className="space-y-[12px] pt-3 px-2">
          <h2 className="text-sm capitalize line-clamp-1">{product.name}</h2>
          {product.priceData?.price === product.priceData?.discountedPrice ? (
            <h3 className="text-sm font-semibold text-slate-500">
              {new Intl.NumberFormat("GAM", {
                style: "currency",
                currency: "GMD",
              }).format(product.priceData?.price || 0)}
              {/* {priceFormatter(product.priceData?.price || 0)} */}
            </h3>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="text-sm  text-slate-500">
                {new Intl.NumberFormat("GAM", {
                  style: "currency",
                  currency: "GMD",
                }).format(product.priceData?.discountedPrice || 0)}
                {/* {priceFormatter(product.priceData?.discountedPrice || 0)} */}
              </h2>
              <h3 className="text-xs text-red-500 line-through">
                {new Intl.NumberFormat("GAM", {
                  style: "currency",
                  currency: "GMD",
                }).format(product.priceData?.price || 0)}
                {/* {priceFormatter(product.priceData?.price || 0)} */}
              </h3>
            </div>
          )}

          {/* Add to cart button */}
          <div className="flex-1 flex items-center gap-x-5 w-full">
            {/* Add Cart button */}
            <button
              type="button"
              onClick={() => haddleAddToCart()}
              disabled={product.stock?.quantity! < 1}
              className={`${
                product.stock?.quantity! < 1 ||
                (isLoading && "cursor-not-allowed")
              } 
                flex-1 bg-opacity-0 hover:bg-opacity-95 bg-slate-950 border-2 border-slate-800 hover:text-white text-base h-12 transition-all duration-300`}
            >
              Add to cart
            </button>
            <CartModel isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCart
