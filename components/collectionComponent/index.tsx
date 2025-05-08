import React from "react"
import { CollectionProps } from "@/types"
import Crousel from "../crousel"
import {
  queryProducts,
  querySingleCollectionById,
} from "@/model/store/store-api"
import { NetworkError } from "../Erros/networkErro"
import { SkeletonCollection } from "../ui/Skeleton/SkeletonCollection"
import Link from "next/link"

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
      <section className="mt-6 md:mt-10 flex items-center justify-between">
        {/* Header */}
        <div className=" max-w-[100rem] w-[95%] mx-auto ">
          <header className="py-5 font-bold px-2">
            <h1 className="my-3 font-extrabold text-slate-900 text-xl md:text-2xl lg:text-3xl uppercase">
              {name}
            </h1>
          </header>
          <div className="">
            <Crousel
              products={products.items.map((item) => ({ product: item }))}
              categoryId={categoryId}
            />
          </div>
          <Link
              href={`/products?category=all-products`}
              className="block mx-auto w-fit font-semibold border-b-2 border-b-slate-500 hover:border-primary px-5 md:px-8 py-3 uppercase hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"
            >
              View More
            </Link>
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
