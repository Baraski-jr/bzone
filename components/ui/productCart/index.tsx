"use client"
import DOMPurify from "isomorphic-dompurify"

import React from "react"
import Image from "next/image"

import { ImageHover } from "@/components/HoverImage"
import { products } from "@wix/stores"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { VARIANT_ID } from "@/lib/constants"
import { formatCurrency } from "@/lib/CurrencyFormatter"
import { CartBuyBtn } from "@/components/CartBuyButton"
import Link from "next/link"
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
    <div className="overflow-hidden bg-[#F5F5F5] relative block h-full">
      {/* To show the product is sold out */}
      {product.stock?.quantity! < 1 && (
        <div className="bg-red-500 bg-opacity-0 hover:bg-opacity-10 w-full flex items-center justify-center rounded-full aspect-square absolute transition-all ease-in-out duration-150 z-10">
          <div className="w-1/4 aspect-square rounded-full bg-red-500 flex items-center justify-center px-2">
            <p className="text-lg font-bold font-mono text-white tracking-wide">
              Sold
            </p>
          </div>
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
    </div>
  )

  return (
    <div className="">
      <figure>
        <Link
          href={`/products/${product.slug}`}
          className="card group hover:shadow sm:max-w-sm"
        >
          <ProductImage />
        </Link>
      </figure>
      <div className="card-body">
        <Link
          href={`/products/${product.slug}`}
          className="link link-animated w-fit mb-2.5"
        >
          {product.name}
        </Link>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {formatCurrency(product.priceData?.price || 0)}
        </h3>
        <div
          className="mb-6 text-sm text-clip line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description || ""),
          }}
        ></div>
        <div className="card-actions z-10">
          <CartBuyBtn product={product} />
          <button
            type="button"
            onClick={haddleAddToCart}
            disabled={product.stock?.quantity! < 1}
            className="w-full btn btn-secondary btn-soft disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
