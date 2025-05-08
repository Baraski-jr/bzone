import Gutter from "@/components/Gutter"
import { IMAGE_PLACEHOLDER } from "@/lib/constants"
import { convertToStandardcurrency } from "@/lib/ConvertToSubcurrency"
import { formatCurrency } from "@/lib/CurrencyFormatter"
import { redis } from "@/lib/redis"
import { OrderInfo } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type SearchParams = {
  orderNumber: string
}

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  try {
    // const searchParamProps = await searchParams
    // if (!searchParamProps.orderNumber) {
    //   return notFound()
    // }
    // const order = await redis.hgetall(`order:${searchParamProps.orderNumber}`) as OrderInfo
    // const order = await redis.hgetall(`order:${searchParamProps.orderNumber}`) as OrderInfo
    // const order = await redis.hkeys("key");

    // console.log(order)

    // if (!order) {
    //   return notFound()
    // }
    return (
      <div className=" max-w-[100rem] w-[95%] mx-auto ">
        <Gutter />
        <h1 className="my-5 ">My orders</h1>
        {/* Order card */}
        <section className="flex flex-wrap items-center gap-4">
          {/* Order 1 */}
          <div className="bg-white rounded-lg shadow-md p-3 border-2 border-transparent hover:border-primary cursor-pointer transition-all duration-200">
            <div className="flex items-start justify-between gap-x-2">
              <div className="mb-2">
                <h2 className="text-slate-500 font-semibold text-lg">Order nr. 2344x13</h2>
                <p className="text-sm font-medium text-slate-500 ">Placed on Dec. 18, 2024</p>
              </div>
              {/* icon */}
              <div className="">
                <h3 className="text-xl font-bold text-primary px-1">I</h3>
              </div>
            </div>
            <div className="text-xl font-bold text-primaryPlus pb-6">
              <h2 className="">Total: {formatCurrency(248)}</h2>
            </div>
          </div>
          {/* Order 2 */}
          <div className="bg-white rounded-lg shadow-md p-3 border-2 border-transparent hover:border-primary cursor-pointer transition-all duration-200">
            <div className="flex items-start justify-between gap-x-2">
              <div className="mb-2">
                <h2 className="text-slate-500 font-semibold text-lg">Order nr. 2344x13</h2>
                <p className="text-sm font-medium text-slate-500 ">Placed on Dec. 18, 2024</p>
              </div>
              {/* icon */}
              <div className="">
                <h3 className="text-xl font-bold text-primary px-1">I</h3>
              </div>
            </div>
            <div className="text-xl font-bold text-primaryPlus pb-6">
              <h2 className="">Total: {formatCurrency(248)}</h2>
            </div>
          </div>
          {/* Order 3 */}
          <div className="bg-white rounded-lg shadow-md p-3 border-2 border-transparent hover:border-primary cursor-pointer transition-all duration-200">
            <div className="flex items-start justify-between gap-x-2">
              <div className="mb-2">
                <h2 className="text-slate-500 font-semibold text-lg">Order nr. 2344x13</h2>
                <p className="text-sm font-medium text-slate-500 ">Placed on Dec. 18, 2024</p>
              </div>
              {/* icon */}
              <div className="">
                <h3 className="text-xl font-bold text-primary px-1">I</h3>
              </div>
            </div>
            <div className="text-xl font-bold text-primaryPlus pb-6">
              <h2 className="">Total: {formatCurrency(248)}</h2>
            </div>
          </div>
          {/* Order 4 */}
          <div className="bg-white rounded-lg shadow-md p-3 border-2 border-transparent hover:border-primary cursor-pointer transition-all duration-200">
            <div className="flex items-start justify-between gap-x-2">
              <div className="mb-2">
                <h2 className="text-slate-500 font-semibold text-lg">Order nr. 2344x13</h2>
                <p className="text-sm font-medium text-slate-500 ">Placed on Dec. 18, 2024</p>
              </div>
              {/* icon */}
              <div className="">
                <h3 className="text-xl font-bold text-primary px-1">I</h3>
              </div>
            </div>
            <div className="text-xl font-bold text-primaryPlus pb-6">
              <h2 className="">Total: {formatCurrency(248)}</h2>
            </div>
          </div>
          {/* Order 5 */}
          <div className="bg-white rounded-lg shadow-md p-3 border-2 border-transparent hover:border-primary cursor-pointer transition-all duration-200">
            <div className="flex items-start justify-between gap-x-2">
              <div className="mb-2">
                <h2 className="text-slate-500 font-semibold text-lg">Order nr. 2344x13</h2>
                <p className="text-sm font-medium text-slate-500 ">Placed on Dec. 18, 2024</p>
              </div>
              {/* icon */}
              <div className="">
                <h3 className="text-xl font-bold text-primary px-1">I</h3>
              </div>
            </div>
            <div className="text-xl font-bold text-primaryPlus pb-6">
              <h2 className="">Total: {formatCurrency(248)}</h2>
            </div>
          </div>
        </section>

        {/* Order status */}
        <section className="py-4 space-y-4 min-h-dvh">
          <header>
            <h2 className="uppercase font-bold text-xl text-slate-500">Order Status</h2>
          </header>
          {/* Order 1 */}
          <article className="min-h-full flex gap-2 overflow-y-hidden">
            {/* Left */}
            <div className="pt-1">
              {/* round icon */}
              <div className="w-4 aspect-square border border-blue-200 rounded-full flex items-center justify-center">
                <div className="w-3 aspect-square rounded-full bg-primary"></div>
              </div>
              {/* stright line */}
              <div className="my-2 h-full w-[1px] mx-auto rounded-full bg-slate-500"></div>
            </div>
            {/* Right */}
            <div className="h-full">
              <h2 className="text-primary text-xl font-semibold">
                Order received 
                <span className="text-primary ml-2">c</span>
              </h2>
              <p className="text-sm text-slate-500 min-h-14"> Dec. 29, 2024 14:30 </p>
            </div>
          </article>

          {/* Order 2 */}
          <article className="min-h-full flex gap-2 overflow-y-hidden">
            {/* Left */}
            <div className="pt-1">
              {/* round icon */}
              <div className="w-4 aspect-square border border-blue-200 rounded-full flex items-center justify-center">
                <div className="w-3 aspect-square rounded-full bg-primary"></div>
              </div>
              {/* stright line */}
              <div className="my-2 h-full w-[1px] mx-auto rounded-full bg-slate-500"></div>
            </div>
            {/* Right */}
            <div className="h-full">
              <h2 className="text-primary text-xl font-semibold">
                Payment received 
                <span className="text-primary ml-2">c</span>
              </h2>
              <p className="text-sm text-slate-500 min-h-14"> Dec. 29, 2024 14:30 </p>
            </div>
          </article>

          {/* Order 3 */}
          <article className="min-h-full flex gap-2 overflow-y-hidden">
            {/* Left */}
            <div className="pt-1">
              {/* round icon */}
              <div className="w-4 aspect-square border border-blue-200 rounded-full flex items-center justify-center">
                <div className="w-3 aspect-square rounded-full bg-purple-500"></div>
              </div>
              {/* stright line */}
              <div className="my-2 h-full w-[1px] mx-auto rounded-full bg-slate-500"></div>
            </div>
            {/* Right */}
            <div className="h-full">
              <h2 className="text-purple-500 text-xl font-semibold">
                Processing 
              </h2>
              <p className="text-sm text-slate-500 min-h-14"> Dec. 29, 2024 14:30 </p>
            </div>
          </article>
          {/* Order 4 */}
          <article className="min-h-full flex gap-2 overflow-y-hidden">
            {/* Left */}
            <div className="pt-1">
              {/* round icon */}
              <div className="w-4 aspect-square border border-blue-200 rounded-full flex items-center justify-center">
                <div className="w-3 aspect-square rounded-full bg-primary"></div>
              </div>
              {/* stright line */}
              <div className="my-2 h-full w-[1px] mx-auto rounded-full bg-slate-500"></div>
            </div>
            {/* Right */}
            <div className="h-full">
              <h2 className="text-slate-500 text-xl font-semibold">
                All shipped 
              </h2>
            </div>
          </article>
        </section>
      </div>
    )
  } catch (error) {}
}
