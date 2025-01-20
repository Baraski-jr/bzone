import React, { useState } from "react"
import Thumbnails from "../thumbnails"
import { ProductsType } from "@/types"
import Image from "next/image"
import "react-medium-image-zoom/dist/styles.css"
import Zoom from "react-medium-image-zoom"

function ProductGallary({ product }: { product: ProductsType }) {
  const [SelectedImage, setSelectedImage] = useState(0)

  return (
    <div className="md:flex">
      {/* Thumbnails for larger screens */}
      <div className="hidden md:block">
        <Thumbnails
          direction={"flex-col"}
          id={product.id}
          images={product.images}
          setSelectedImage={setSelectedImage}
        />
      </div>
      {/* Main product image */}
      <div className="flex gap-2">
        <div className="bg-[#F5F5F5] min-h-[15rem] md:min-h-fit flex items-center overflow-hidden">
          <Zoom>
            <Image
              width={700}
              height={700}
              quality={100}
              src={product.images[SelectedImage]}
              alt={product.title}
              title="Click to zoom"
              className="w-10/12 md:w-full max-w-full md:max-w-none mx-auto hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            />
          </Zoom>
        </div>
      </div>
      {/* Thumbnails for mobile view */}
      <div className="md:hidden pt-5">
        <Thumbnails
          id={product.id}
          images={product.images}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  )
}

export default ProductGallary
