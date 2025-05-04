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

  const ThumbnailImage = () => {
    return (
      <>
        {product.product.media?.items?.map((item: any, imgIndex: number) => {
          return (
            <div
              onMouseOver={() => setIndex(imgIndex)}
              key={imgIndex}
              className={`overflow-hidden bg-[#F5F5F5] p-1 border-2 border-transparent hover:border-slate-300 transition-all duration-300`}
              >
              <Image
                width={60}
                height={60}
                priority
                src={item.image?.url || IMAGE_PLACEHOLDER}
                alt={item.image?.altText || ""}
                className="min-w-8 aspect-square cursor-pointer"
                />
            </div>
          )
        })}
      </>
    )
  }

  return (
    <>
      {product.product.media?.items?.length ?? 0 > 1 ? (
        <div className="sm:flex">
          {/* Thumbnails for larger screens */}
          <div className="space-y-1 mr-3 hidden sm:block sm:h-[80dvh] lg:h-dvh overflow-y-scroll" >
            {(product.product.media?.items?.length ?? 0) != 1 && (
                <ThumbnailImage  />
            )}
          </div>
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
                  className="align-middle object-cover  md:max-h-[50rem]  mx-auto w-auto hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                />
              </Zoom>
            </div>
          </div>
          {/* Thumbnails for mobile view */}
          <div className="flex items-center min-h-15 sm:hidden w-full" >
            {(product.product.media?.items?.length ?? 0) != 1 && (
                <ThumbnailImage />
            )}
          </div>
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
