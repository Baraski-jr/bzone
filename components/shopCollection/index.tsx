import React from "react"
import ProductCart from "../ui/productCart"
import CustomNav from "../CustomNav"
import { getProducts } from "@/lib/actions"

const ShopCollection = async ({ categoryId }: { categoryId: string }) => {
  const products = await getProducts({
    categoryId: categoryId,
  })

  return (
    <div className="flex gap-x-4 w-[85%] mx-auto py-8">
      {/* <SideBarFilter /> */}
      <section className="space-y-5 md:space-y-4">
        <CustomNav />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
          {products.items.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ShopCollection
