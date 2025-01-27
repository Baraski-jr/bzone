import React from "react"
import Image from "next/image"
import { products } from "@wix/stores"

type Prop = {
  direction?: string
  items: products.MediaItem[]
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

const ThumbnailImage = ({ direction = "flex-row", items, setIndex }: Prop) => {
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
              src={item.image?.url || "/product.png"}
              alt={item.image?.altText || ""}
              className="w-auto cursor-pointer"
            />
          </div>
        )
      })}
    </div>
  )
}

export default ThumbnailImage
