"use client"
import ProductCart from "../ui/productCart"
import { CrouselType } from "@/types"

const Crousel: React.FC<CrouselType> = ({ products }) => {
 
  return (

    <div className="h-full pb-5 overflow-x-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-flow-col-6 gap-2 gap-y-15">
      {products.map((product) => (
        <div className="mx-2" key={product.product._id}>
          <ProductCart product={product.product} />
        </div>
      ))}
    </div>

  )
}

export default Crousel
