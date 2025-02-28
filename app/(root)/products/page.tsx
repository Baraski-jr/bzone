import SubHero from "@/components/ui/subHero"
import React, { Suspense } from "react"
import Gutter from "@/components/Gutter"
import SkeletonShopCollection from "@/components/ui/Skeleton/SkeletonShopCollection"
import Filter from "@/components/Filter"
import {
  queryProducts,
  querySingleCollectionBySlug,
} from "@/model/store/store-api"
import { Metadata } from "next"
import { NetworkError } from "@/components/Erros/networkErro"
import ShopCollection from "@/components/ShopCollection"

const PRODUCT_PER_PAGE = 12

export const metadata: Metadata = {
  title: "Product listing",
  description: "",
}
type SearchParams = {
  category: string
  min: string
  max: string
  collectionId: string
  limit: string
  // sort: string
  page: string
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const searchParamProps = await searchParams

  try {
    const collection = await querySingleCollectionBySlug({
      slug: searchParamProps.category || "all-products",
    })

    const collectionId =
      collection?._id || process.env.ALL_PRODUCTS_CATEGORY_ID!

    const collectionName = collection?.name || ""
    // let Sort
    // if (searchParamProps?.sort) {
    //   Sort = searchParamProps.sort
    // }

    const products = await queryProducts({
      min: parseInt(searchParamProps?.min),
      max: parseInt(searchParamProps?.max),
      collectionId: collectionId,
      limit: PRODUCT_PER_PAGE,
      // sort: Sort ?? "",
      pageNumber: parseInt(searchParamProps?.page)
        ? parseInt(searchParamProps.page) * PRODUCT_PER_PAGE
        : 0,
    })

    // console.log(products)
    // // Shop Collection
    // const ShopCollection = async () => {
    //   return (
    //     <>
    //       <div className="flex gap-x-4 w-[85%] mx-auto py-8">
    //         {/* <SideBarFilter /> */}
    //         <section className="space-y-5 md:space-y-4">
    //           <CustomNav name={collectionName} />
    //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-9">
    //             {products.items.map((product) => (
    //               <AnimatePresence key={product._id}>
    //                 <motion.div
    //                   initial={{ opacity: 0 }}
    //                   animate={{ opacity: 1 }}
    //                   exit={{ opacity: 0 }}
    //                   transition={{ duration: 0.5 }}
    //                 >
    //                   <ProductCart key={product._id} product={product} />
    //                 </motion.div>
    //               </AnimatePresence>
    //             ))}
    //           </div>
    //         </section>
    //       </div>
    //       <Pagination
    //         currentPage={products?.currentPage ?? 0}
    //         hasPrev={products?.hasPrev()!}
    //         hasNext={products?.hasNext()!}
    //       />
    //     </>
    //   )
    // }

    return (
      <>
        <Gutter />
        <SubHero title={collectionName!} />
        <Suspense fallback={<SkeletonShopCollection />}>
          <Filter />
          <ShopCollection
            collectionName={collectionName}
            products={{ products: products.items }}
          />
        </Suspense>
      </>
    )
  } catch (error) {
    console.log(error)
    return (
      <div className="relative">
        <Gutter />
        <SkeletonShopCollection err={true} />
        <NetworkError
          top={1 / 3}
          link={"/products"}
          message={" Network Error"}
        />
      </div>
    )
  }
}
