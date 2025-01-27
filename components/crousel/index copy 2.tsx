// // "use client"

// import React from "react"
// // import { Navigation, Pagination, Scrollbar } from "swiper/modules"
// import { CrouselType } from "@/types"
// import ProductCart from "../ui/productCart"

// // import { Swiper, SwiperSlide } from "swiper/react"
// // import "swiper/css"
// // import "swiper/css/navigation"
// // import "swiper/css/pagination"
// // import "swiper/css/scrollbar"
// import { wixClientServer } from "@/lib/wix/ClientServer"
// import { products } from "@wix/stores"

// const PRODUCT_PER_PAGE = 8

// const Crousel: React.FC<CrouselType> = async ({
//   categoryId,
//   slidePerView = 2,
//   navigation = false,
// }) => {
//   // Added wixClient Temporary
//   const wixClient = await wixClientServer()
//   const response = await wixClient.products
//     .queryProducts()
//     .eq("collectionIds", categoryId)
//     .limit(PRODUCT_PER_PAGE)
//     .find()

//   // End of wixClient Temporary

//   return (
//     <div className="h-full flex gap-5">
//       {response.items.map((product: products.Product) => (
//         <ProductCart key={product._id} product={product} />
//       ))}
//     </div>
//     // <Swiper
//     //   className="h-full"
//     //   modules={[Navigation, Pagination, Scrollbar]}
//     //   spaceBetween={10}
//     //   slidesPerView={slidePerView}
//     //   navigation={navigation}
//     // >
//     //   {/* {response.items.map((product) => (
//     //     <SwiperSlide key={product.id}>
//     //       <ProductCart product={product} />
//     //     </SwiperSlide>
//     //   ))} */}
//     // </Swiper>
//   )
// }

// export default Crousel
