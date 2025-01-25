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
          title={product.title}
          images={product.images}
          setSelectedImage={setSelectedImage}
        />
      </div>
      {/* Main product image */}
      <div className="relative bg-[#F5F5F5]  flex items-center justify-center md:w-full overflow-hidden">
        <div className="min-h-[15rem] md:min-h-fit">
          <Zoom>
            <Image
              width={600}
              height={700}
              src={product.images[SelectedImage]}
              alt={product.title}
              title="Click to zoom"
              className="align-middle mx-auto max-w-max hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            />
          </Zoom>
        </div>
      </div>
      {/* Thumbnails for mobile view */}
      <div className="md:hidden pt-5">
        <Thumbnails
          title={product.title}
          id={product.id}
          images={product.images}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  )
}

export default ProductGallary
