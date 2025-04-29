"use client"
import ProductCart from "../ui/productCart"
import { CrouselType } from "@/types"

const Crousel: React.FC<CrouselType> = ({ products }) => {
 
  return (
    <div
      id="multi-slide"
      data-carousel='{ "loadingClasses": "isDraggable": "true", "opacity-0", "slidesQty": { "xs": 1, "md": 3, "lg": 4, "xl":5 } }'
      className="relative h-full w-full"
    >
      <div className="carousel h-full">
        <div className="carousel-body h-full opacity-0">
          {products.map((product) => (
            <div className="carousel-slide mx-2" key={product.product._id}>
              <ProductCart product={product.product} />
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="carousel-prev">
        <div className=" size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
        </div>
        <span className="sr-only">Previous</span>
      </button>
      <button type="button" className="carousel-next">
        <span className="sr-only">Next</span>
        <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm">
          <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </button>
    </div>
  )
}

export default Crousel
