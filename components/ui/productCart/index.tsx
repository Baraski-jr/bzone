"use client"
import Link from "next/link"
import React from "react"
import Image from "next/image"

import { ImageHover } from "@/components/HoverImage"
import { products } from "@wix/stores"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { VARIANT_ID } from "@/lib/constants"
import { formatCurrency } from "@/lib/CurrencyFormatter"
import { CheckoutBtn } from "@/components/CheckoutButton"
interface ProductCartProps {
  product: products.Product
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const haddleAddToCart = () => {
    addItem(wixClient, product._id ?? "", VARIANT_ID, 1)
  }

  const wixClient = useWixClient()

  const { addItem } = useCartStore()

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
      <div className="relative mt-2 md:mt-0 flex flex-col justify-between h-full rounded-md hover:shadow-lg bg-white transition-all duration-200">
        <div className="block overflow-hidden bg-[#F5F5F5]">
          <ProductImage />
        </div>
        <div className="flex flex-col justify-between  gap-3">
          <div className="space-y-2 text-center">
            <Link
              href={`/products/${product.slug}`}
              className="hover:underline text-slate-700 pt-2"
            >
              <h2 className="">{product.name}</h2>
            </Link>
            {product.priceData?.price === product.priceData?.discountedPrice ? (
              <h3 className="text-sm font-semibold text-slate-900  mx-2">
                {formatCurrency(product.priceData?.price || 0)}
              </h3>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <h2 className="text-sm  text-slate-500">
                  {formatCurrency(product.priceData?.discountedPrice || 0)}
                </h2>
                <h2 className="text-xs text-red-500 line-through">
                  {formatCurrency(product.priceData?.price || 0)}
                </h2>
              </div>
            )}
          </div>
          {/* Add to cart button */}{" "}
          <button
            type="button"
            onClick={haddleAddToCart}
            disabled={product.stock?.quantity! < 1}
            className="flex-1 bg-opacity-0  hover:bg-opacity-95  bg-primary border-2 py-2 border-primary hover:text-white text-base h-20 transition-all duration-300 disabled:bg-opacity-80 disabled:text-white disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
          <CheckoutBtn name="Buy Now" />
        </div>
      </div>
    </>
  )
}

export default ProductCart
