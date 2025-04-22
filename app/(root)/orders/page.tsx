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
    const searchParamProps = await searchParams
    if (!searchParamProps.orderNumber) {
      return notFound()
    }
    const order = await redis.hgetall(`order:${searchParamProps.orderNumber}`) as OrderInfo

    if (!order) {
      return notFound()
    }
    return (
      <>
        <Gutter />
=        <div className="w-full min-h-screen py-4 flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-3xl w-11/12  mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>

            <div className="">
              <div className=" border-[1.5px] border-slate-200 rounded-md text-sm">
                <div className=" py-4 px-3 space-y-2  border-b-[1.5px] border-slate-200">
                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <h3 className="">Order Number</h3>
                      <p className="text-green-700 text-sm">
                        {" "}
                        {String(order.orderNumber)}{" "}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="flex flex-col">
                        Order Date{" "}
                        <span className="">
                          {
                            new Date(Number(order.orderDate) * 1000)
                              .toLocaleString()
                              .split(",")[0]
                          }
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <p>
                      Status:{" "}
                      <span className="ml-2 text-green-700">
                        {" "}
                        {String(order.status)}
                      </span>
                    </p>
                    <div className="">
                      <div className="space-y-1">
                        <p>Total Amount</p>
                        <p className="text-end font-bold">
                          {formatCurrency(Number(order.totalPrices))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-200 bg-opacity-30 rounded-md p-3 space-y-2">
                    <h2 className="text-sm text-red-800 font-semibold">
                      Discount Applied: {formatCurrency(Number(order.amountDiscount))}
                    </h2>
                    <h2 className="text-sm font-semibold">
                      Original Subtotal: {formatCurrency(Number(order.totalPrices))}
                    </h2>
                  </div>
                </div>

                <div className="mb-6 py-4 px-3">
                  <h3 className="text-xl font-semibold mb-4">Order items</h3>
                  <div className="space-y-4">
                    {order.products.map((product, index) => (
                      <div
                        key={product._key}
                        className="flex items-center gap-4  p-3 rounded-md"
                      >
                        <Image
                          src={product.product.image || IMAGE_PLACEHOLDER}
                          alt={"Product Image"}
                          width={50}
                          height={50}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-slate-700">
                            Product_name
                          </p>
                          <p className="text-sm text-gray-8text-green-700">
                            Quantity: {product.product.quantity}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold">
                            {formatCurrency(convertToStandardcurrency(Number(product.product.price))) } each
                          </p>
                          <p className="text-sm">
                            Subtotal: 
                            {formatCurrency(convertToStandardcurrency(Number(product.product.price) *
                              order.products[index].product.quantity))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mb-4 justify-center items-center">
                  <Link
                    href={`/`}
                    className="btn btn-primary"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/products"}
                    className="btn btn-secondary"
                  >
                    Go shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } catch (error) {}
}
