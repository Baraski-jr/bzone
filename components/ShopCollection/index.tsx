"use client"
import { AnimatePresence, motion } from "motion/react"
import CustomNav from "../CustomNav"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { products } from "@wix/stores"
import ProductCart from "../ui/productCart"
interface ProductsType {
  products: products.Product[]
}

// const Pagination = ({
//   currentPage,
//   hasPrev,
//   hasNext,
// }: {
//   currentPage: number
//   hasPrev: boolean
//   hasNext: boolean
// }) => {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()
//   const { replace } = useRouter()

//   const createPageUrl = (pageNumber: number) => {
//     const params = new URLSearchParams(searchParams)
//     params.set("page", pageNumber.toString())
//     replace(`${pathname}?${params.toString()}`)
//   }
//   return (
//     <div className="my-12 flex justify-center gap-x-5 w-[85%] mx-auto">
//       <button
//         type="button"
//         className="rounded-md bg-green-400 p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-200"
//         disabled={!hasPrev}
//         onClick={() => createPageUrl(currentPage - 1)}
//       >
//         Previous
//       </button>
//       <button
//         type="button"
//         className="rounded-md bg-green-400 p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-200"
//         disabled={!hasNext}
//         onClick={() => createPageUrl(currentPage + 1)}
//       >
//         Next
//       </button>
//     </div>
//   )
// }

// Shop Collection
const ShopCollection = ({
  products,
  collectionName,
}: {
  collectionName: string
  products: ProductsType
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    replace(`${pathname}?${params.toString()}`)
  }
  //   console.log(products)
  return (
    <>
      <div className="flex gap-x-4 w-[85%] mx-auto py-8">
        {/* <SideBarFilter /> */}
        <section className="space-y-5 md:space-y-4">
          <CustomNav name={collectionName} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-10 gap-x-5  mt-4">
            {products.products.map((product) => (
              <AnimatePresence key={product._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <ProductCart key={product._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </section>
      </div>
      <div className="my-12 flex justify-center gap-x-5 w-[85%] mx-auto">
        <button
          type="button"
          className="rounded-md bg-green-400 p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-200"
          //   disabled={!hasPrev}
          //   onClick={() => createPageUrl(currentPage - 1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="rounded-md bg-green-400 p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-200"
          //   disabled={!hasNext}
          //   onClick={() => createPageUrl(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  )
}
export default ShopCollection

//   <AnimatePresence key={product._id}>
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
{
  /* </motion.div> */
}
{
  /* </AnimatePresence> */
}
