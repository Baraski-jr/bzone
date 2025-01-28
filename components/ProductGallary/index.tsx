"use client"
import React, { useState } from "react"
import Image from "next/image"
import "react-medium-image-zoom/dist/styles.css"
import Zoom from "react-medium-image-zoom"
import { products } from "@wix/stores"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"

function ProductGallary({ items }: { items: products.MediaItem[] }) {
  const [index, setIndex] = useState(0)

  const ThumbnailImage = ({
    direction = "flex-row",
    items,
  }: {
    direction?: string
    items: products.MediaItem[]
  }) => {
    return (
      <div className={`flex ${direction} gap-3 pr-3`}>
        {items.map((item: any, imgIndex: number) => {
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
    <div className="md:flex">
      {/* Thumbnails for larger screens */}
      {items.length > 0 && (
        <div className="hidden md:block">
          <ThumbnailImage items={items} direction="flex-col" />
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
              src={items[index].image?.url || IMAGE_PLACEHOLDER}
              alt={items[index].image?.altText || "product image"}
              title="Click to zoom in"
              className="align-middle mx-auto w-auto hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            />
          </Zoom>
        </div>
      </div>
      {/* Thumbnails for mobile view */}
      {items.length > 0 && (
        <div className="md:hidden pt-5">
          <ThumbnailImage items={items} />
        </div>
      )}
    </div>
  )
}

export default ProductGallary
