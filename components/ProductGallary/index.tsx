"use client"
import React, { useState } from "react"
import Image from "next/image"
import "react-medium-image-zoom/dist/styles.css"
import Zoom from "react-medium-image-zoom"
import { products } from "@wix/stores"

import { IMAGE_PLACEHOLDER } from "@/lib/constants"

interface ProductGallaryProps {
  product: products.Product
}

function ProductGallary(product: ProductGallaryProps) {
  const [index, setIndex] = useState(0)

  const ThumbnailImage = ({
    direction = "flex-row",
  }: {
    direction?: string
  }) => {
    return (
      <div className={`flex ${direction} gap-3 pr-3`}>
        {product.product.media?.items?.map((item: any, imgIndex: number) => {
          return (
            <div
              onMouseOver={() => setIndex(imgIndex)}
              key={imgIndex}
              className={`overflow-hidden bg-[#F5F5F5] px-2 border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300`}
            >
              <Image
                width={60}
                height={60}
                priority
                src={item.image?.url || IMAGE_PLACEHOLDER}
                alt={item.image?.altText || ""}
                className="w-auto cursor-pointer"
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      {product.product.media?.items?.length ?? 0 > 1 ? (
        <div className="md:flex">
          {/* Thumbnails for larger screens */}
          {(product.product.media?.items?.length ?? 0) != 1 && (
            <div className="hidden md:block">
              <ThumbnailImage direction="flex-col" />
            </div>
          )}
          {/* Main product image */}
          <div className="relative md:w-full overflow-hidden">
            <div className="">
              <Zoom>
                <Image
                  priority
                  width={600}
                  height={700}
                  src={
                    product.product.media?.items
                      ? product.product.media.items[index]?.image?.url ||
                        IMAGE_PLACEHOLDER
                      : IMAGE_PLACEHOLDER
                  }
                  alt={
                    product.product.media?.items?.[index]?.image?.altText ||
                    "product image"
                  }
                  title="Click to zoom in"
                  className="align-middle mx-auto w-auto hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                />
              </Zoom>
            </div>
          </div>
          {/* Thumbnails for mobile view */}
          {(product.product.media?.items?.length ?? 0) != 1 && (
            <div className="md:hidden pt-5">
              <ThumbnailImage />
            </div>
          )}
        </div>
      ) : (
        <div className="relative md:w-full overflow-hidden">
          <div className="">
            <Zoom>
              <Image
                priority
                width={600}
                height={700}
                src={
                  product.product.media?.mainMedia?.image?.url ||
                  IMAGE_PLACEHOLDER
                }
                alt={
                  product.product.media?.mainMedia?.image?.altText ||
                  "product image"
                }
                title="Click to zoom in"
                className="align-middle mx-auto w-auto hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              />
            </Zoom>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductGallary
