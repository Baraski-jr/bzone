"use client"
import Link from "next/link"
import React from "react"
import Image from "next/image"

import { ImageHover } from "@/components/HoverImage"
import { products } from "@wix/stores"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { VARIANT_ID } from "@/lib/constants"
import { priceFormatter } from "@/lib/CurrencyFormatter"

interface ProductCartProps {
  product: products.Product
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
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
              {priceFormatter(product.priceData?.price || 0)}
            </h3>
          ) : (
            <div className="flex items-center gap-2">
              <h3 className="text-xs text-red-500 line-through">
                {priceFormatter(product.priceData?.price || 0)}
              </h3>
              <h2 className="text-sm  text-slate-500">
                {priceFormatter(product.priceData?.discountedPrice || 0)}
              </h2>
            </div>
          )}

          {/* Add to cart button */}
          <div className="flex-1 flex items-center gap-x-5 w-full">
            {/* Add Cart button */}
            <button
              onClick={() =>
                addItem(wixClient, product._id ?? "", VARIANT_ID, 1)
              }
              disabled={isLoading || product.stock?.quantity! < 1}
              className="flex-1 bg-opacity-0  hover:bg-opacity-95 bg-slate-950 border-2 border-slate-950 hover:text-white text-base h-12 transition-all duration-300 disabled:bg-opacity-80 disabled:cursor-not-allowed"

              // className="flex-1 bg-slate-950 text-base text-white h-12 transition-colors duration-300 disabled:bg-opacity-80 disabled:cursor-not-allowed hover:bg-opacity-95"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCart
