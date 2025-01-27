import Link from "next/link"
import React from "react"
import Image from "next/image"

import { ImageHover } from "@/components/HoverImage"
import { products } from "@wix/stores"

interface ProductCartProps {
  product: products.Product
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const ProductImage: React.FC = () => (
    <Link
      href={`/products/${product.slug}`}
      className="overflow-hidden bg-[#F5F5F5] block h-60"
    >
      {product.media?.items?.length ?? 0 > 1 ? (
        <ImageHover
          url={product.media?.items?.[0]?.image?.url || "/product.png"}
          hoverUrl={product.media?.items?.[1]?.image?.url || "/product.png"}
          alt={product.media?.items?.[0]?.image?.altText || ""}
        />
      ) : (
        <div className="relative h-full">
          <Image
            src={product.media?.mainMedia?.image?.url || "/product.png"}
            alt={product.media?.mainMedia?.image?.altText || ""}
            width={600}
            height={400}
            sizes="80vw"
            className=" object-contain w-auto transition-opacity duration-500 "
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
          <h2 className="text-sm capitalize line-clamp-1">{product.name}</h2>
          <p className="text-sm font-semibold text-slate-500">
            {product.priceData?.currency}
            {product.priceData?.price}.00
          </p>
          {/* {product.stock?.quantity && (
            <Add product={product} disable={true} />
          ) : (
            <Add product={product} />
          )} */}
        </div>
      </div>
    </>
  )
}

export default ProductCart
