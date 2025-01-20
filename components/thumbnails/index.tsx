"use client"
import React from "react"
import Image from "next/image"
import { products } from "@/lib/constants"
import { ThumbnailsType } from "@/types"

const Thumbnails = ({
  direction = "flex-row",
  id,
  images,
  setSelectedImage,
}: ThumbnailsType) => {
  return (
    <div className={`flex ${direction} gap-3 pr-3`}>
      {images.map((url: string, imgIndex: number) => (
        <div
          onMouseOver={() => setSelectedImage(imgIndex)}
          key={imgIndex}
          className="overflow-hidden bg-[#F5F5F5] p-1 px-2 border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300"
        >
          <Image
            width={60}
            height={60}
            src={url}
            alt={products[id].title}
            className="w-auto cursor-pointer"
          />
        </div>
      ))}
    </div>
  )
}

export default Thumbnails
