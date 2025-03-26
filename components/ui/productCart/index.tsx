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
    <div className="overflow-hidden bg-[#F5F5F5] block h-full">
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
    </div>
  )

  return (
    <Link
      href={`/products/${product.slug}`}
      className="card group hover:shadow sm:max-w-sm"
    >
      <figure>
        <ProductImage />
      </figure>
      <div className="card-body">
        <h2 className="link link-animated  mb-2.5">{product.name}</h2>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {formatCurrency(product.priceData?.price || 0)}
        </h3>
        <p
          className="mb-6 text-sm text-clip line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description || ""),
          }}
        ></p>
        <div className="card-actions">
          <CartBuyBtn product={product} />
          <button
            type="button"
            onClick={haddleAddToCart}
            disabled={product.stock?.quantity! < 1}
            className="btn btn-secondary btn-soft disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCart
