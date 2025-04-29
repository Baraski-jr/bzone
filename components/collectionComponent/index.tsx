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
  subTitle,
  limit,
}) => {
  try {
    const products = await queryProducts({
      collectionId: categoryId,
      limit: limit,
    })

    const caterory = await querySingleCollectionById({
      collectionId: categoryId,
    })

    return (
      <section className="mt-6 md:mt-10 flex items-center">
        {/* Header */}
        <div className=" max-w-[100rem] w-[95%] mx-auto ">
          <header className="text-center space-y-2 py-5 px-2">
            <h1 className="font-bold text-slate-700 text-xl md:text-2xl capitalize">
              {caterory.name}
            </h1>
            {/* Temporal */}
            <p className="text-slate-500 text-sm md:text-base">{subTitle}</p>
          </header>

          <Crousel
            products={products.items.map((item) => ({ product: item }))}
            categoryId={categoryId}
          />
        </div>
        {/* </div> */}
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
