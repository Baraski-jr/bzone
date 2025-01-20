import Link from "next/link"
import React from "react"
import Image from "next/image"
import slugify from "slugify"

// const productSlug = slugify(product.title, { lower: true })

import { ProductsType } from "@/types"
import Add from "@/components/AddToCart"
import { ImageHover } from "@/components/HoverImage"

const ProductCart = ({ product }: { product: ProductsType }) => {
  const ProductImage: React.FC = () => (
    <Link
      href={`/products/shoes/${slugify(product.title)}`}
      className="overflow-hidden bg-[#F5F5F5] block h-60"
    >
      {product.images.length > 1 ? (
        <ImageHover
          url={product.images[0]}
          hoverUrl={product.images[1]}
          alt={product.title}
        />
      ) : (
        <div className="relative h-full">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="80vw"
            className=" object-contain transition-opacity duration-500 "
          />
        </div>
      )}
    </Link>
  )

  return (
    <>
      <div className="relative py-5 mb-1 md:py-0 h-full md:h-96 rounded-md hover:bg-slate-50 transition-all duration-200">
        <div className="block overflow-hidden bg-[#F5F5F5]">
          <ProductImage />
        </div>
        <div className="space-y-[12px] pt-3 px-2">
          <h2 className="text-sm capitalize line-clamp-1">{product.title}</h2>
          <p className="text-sm font-semibold text-slate-500">
            GMD{product.price}.00
          </p>
          {product.inventory === 0 ? (
            <Add product={product} disable={true} />
          ) : (
            <Add product={product} />
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCart
