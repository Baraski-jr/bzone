"use client"
import Link from "next/link"
import React from "react"
import Image from "next/image"

import { ImageHover } from "@/components/HoverImage"
import { products } from "@wix/stores"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { VARIANT_ID } from "@/lib/constants"
interface ProductCartProps {
  product: products.Product
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
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
      {/* To show the product is sold out */}
      {product.stock?.quantity! < 1 && (
        <div className="bg-red-500 py-2 px-3 aspect-auto rounded-sm grid place-content-center absolute top-2 right-0 z-10">
          <p className="text-base font-mono text-white font-medium tracking-wide">
            Sold Out
          </p>
        </div>
      )}
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
      <div className="relative flex flex-col justify-between mt-2 h-full rounded-md hover:shadow-lg bg-white transition-all duration-200">
        <div className="block overflow-hidden bg-[#F5F5F5]">
          <ProductImage />
        </div>
        <div className="flex flex-col justify-between  gap-3">
          <div className="space-y-2 text-center">
            <h2 className="text-sm font-semibold capitalize line-clamp-1 mx-2">
              {product.name}
            </h2>
            {/* {product.priceData?.price === product.priceData?.discountedPrice ? ( */}
            <h3 className="text-sm font-semibold text-slate-700  mx-2">
              {new Intl.NumberFormat("GAM", {
                style: "currency",
                currency: "GMD",
              }).format(product.priceData?.price || 0)}
              {/* {priceFormatter(product.priceData?.price || 0)} */}
            </h3>
          </div>
          {/* // ) : ( */}
          {/* // <div className="flex items-center gap-2">
            //   <h2 className="text-sm  text-slate-500">
            //     {new Intl.NumberFormat("GAM", { */}
          {/* //       style: "currency",
            //       currency: "GMD",
            //     }).format(product.priceData?.discountedPrice || 0)}
            //     {/* {priceFormatter(product.priceData?.discountedPrice || 0)} */}
          {/* //   </h2>
            //   <h3 className="text-xs text-red-500 line-through">
            //     {new Intl.NumberFormat("GAM", { */}
          {/* //       style: "currency",
            //       currency: "GMD",
            //     }).format(product.priceData?.price || 0)}
            //     {/* {priceFormatter(product.priceData?.price || 0)} */}
          {/* //   </h3>
            // </div> */}
          {/* // )} */}

          {/* Add to cart button */}
          {/* Add Cart button */}
          <button
            type="button"
            onClick={() => haddleAddToCart()}
            disabled={product.stock?.quantity! < 1}
            className={`${
              product.stock?.quantity! < 1 || isLoading
                ? "cursor-not-allowed bg-slate-300"
                : "cursor-pointer bg-slate-950 hover:text-white"
            } 
                flex-1 bg-opacity-0 hover:bg-opacity-95 py-2 border-2 border-slate-400  text-base h-12 transition-all duration-500`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCart
