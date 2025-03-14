// "use client"

// import { usePathname, useRouter, useSearchParams } from "next/navigation"

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

// export default Pagination
