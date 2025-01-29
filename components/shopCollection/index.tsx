// import React from "react"
// import ProductCart from "../ui/productCart"
// import CustomNav from "../CustomNav"
// import { products } from "@wix/stores"
// import Pagination from "../pagination"

// const ShopCollection = async ({
//   products,
//   collectionName,
//   currentPage,
//   hasPrev,
//   hasNext,
// }: {
//   products: products.Product[]
//   collectionName: string
//   currentPage: number
//   hasPrev: boolean
//   hasNext: boolean
// }) => {
//   return (
//     <>
//       <div className="flex gap-x-4 w-[85%] mx-auto py-8">
//         {/* <SideBarFilter /> */}
//         <section className="space-y-5 md:space-y-4">
//           <CustomNav name={collectionName} />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
//             {products.map((product) => (
//               <ProductCart key={product._id} product={product} />
//             ))}
//           </div>
//         </section>
//       </div>
//       <Pagination
//         currentPage={currentPage}
//         hasPrev={hasPrev}
//         hasNext={hasNext}
//       />
//     </>
//   )
// }

// export default ShopCollection
