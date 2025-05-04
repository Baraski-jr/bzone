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
import { usePathname, useRouter } from "next/navigation"
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
    <div className="overflow-hidden relative block h-full">
      {/* To show the product is sold out */}
      {(product.stock?.quantity ?? 0) < 1 && (
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
            className="object-cover w-full transition-opacity duration-500 "
          />
        </div>
      )}
    </div>
  )

  return (
    <div className="p-2 hover:shadow-sm transition-all duration-300 hover:bg-white">
      <Link
        href={`/products/${product.slug}`}
        className="block"
      >
        <ProductImage />
      </Link>
      <div className="pt-3">
        <Link
          href={`/products/${product.slug}`}
          className="link link-animated text-sm line-clamp-1 w-fit mb-2"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            {formatCurrency(product.priceData?.price || 0)}
          </h3>
            {/* <CartBuyBtn product={product} /> */}
            <button
              type="button"
              onClick={haddleAddToCart}
              disabled={product.stock?.quantity! < 1}
              className="py-1 px-3 rounded-full bg-opacity-0 hover:bg-opacity-95 bg-primary border-[1px] border-primary text-slate-950 hover:text-white transition-all duration-300 disabled:bg-opacity-80 disabled:text-white disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>

        </div>
      </div>
    </div> 
    )
  }
export default ProductCart
