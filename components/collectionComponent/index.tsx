import React from "react"
import { CollectionProps } from "@/types"
import Crousel from "../crousel"
import {
  queryProducts,
  querySingleCollectionById,
} from "@/model/store/store-api"
import { NetworkError } from "../Erros/networkErro"
import { SkeletonCollection } from "../ui/Skeleton/SkeletonCollection"

const Collection: React.FC<CollectionProps> = async ({
  categoryId,
  name,
  limit,
}) => {
  try {
    const products = await queryProducts({
      collectionId: categoryId,
      limit: limit,
    })

    return (
      <section className="mt-6 md:mt-10 flex items-center">
        {/* Header */}
        <div className=" max-w-[100rem] w-[95%] mx-auto ">
          <header className="py-5 font-bold px-2">
            <h1 className="font-extrabold text-slate-900 text-xl md:text-2xl lg:text-3xl uppercase">
              {name}
            </h1>
          </header>

          <Crousel
            products={products.items.map((item) => ({ product: item }))}
            categoryId={categoryId}
          />
        </div>
      </section>
    )
  } catch (error) {
    return (
      <section className="relative">
        <SkeletonCollection />
        <NetworkError opacity={70} link={"/"} message={"Network Error"} />
      </section>
    )
  }
}

export default Collection
