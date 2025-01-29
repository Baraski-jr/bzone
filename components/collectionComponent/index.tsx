import React from "react"
import { CollectionProps } from "@/types"
import CollectionBanner from "../ui/CollectionBanner"
import Crousel from "../crousel"
import {
  queryProducts,
  querySingleCollectionById,
} from "@/model/store/store-api"

const Collection: React.FC<CollectionProps> = async ({
  categoryId,
  subTitle,
  limit,
}) => {
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
      <div className="w-[95%] mx-auto">
        <header className="text-center space-y-2 py-5 px-2">
          <h1 className="font-bold text-slate-700 text-xl md:text-2xl capitalize">
            {caterory.name}
          </h1>
          {/* Temporal */}
          <p className="text-slate-500 text-sm md:text-base">{subTitle}</p>
        </header>
        <div className="sm:flex sm:items-center md:items-start lg:gap-4 gap-2 gap-y-3 sm:gap-y-0 md:space-x-4">
          <CollectionBanner
            url={`/products?category=${caterory.slug}`}
            bgUrl={caterory.media?.items[0].image?.url || ""}
          />
          <div className="overflow-hidden sm:w-full h-fit gap-5 md:gap-0 relative">
            <div className="md:hidden">
              <Crousel
                products={products.items.map((item) => ({ product: item }))}
                categoryId={categoryId}
                slidePerView={2}
                navigation={true}
              />
            </div>
            <div className="hidden md:block lg:hidden">
              <Crousel
                products={products.items.map((item) => ({ product: item }))}
                categoryId={categoryId}
                slidePerView={3}
                navigation={true}
              />
            </div>
            <div className="hidden lg:block">
              <Crousel
                products={products.items.map((item) => ({ product: item }))}
                categoryId={categoryId}
                slidePerView={4}
                navigation={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection
