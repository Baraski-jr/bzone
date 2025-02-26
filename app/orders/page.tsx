import { IMAGE_PLACEHOLDER } from "@/lib/constants"
import { formatCurrency } from "@/lib/CurrencyFormatter"
import { OrderInfo } from "@/types"
import { Redis } from "@upstash/redis"
import Image from "next/image"
import Link from "next/link"

type SearchParams = {
  orderNumber: string
}

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const searchParamProps = await searchParams

  try {
    const redis = Redis.fromEnv()
    const cacheKey = `order:${searchParamProps.orderNumber}`
    // Check cache
    const order = (await redis.get(cacheKey)) as OrderInfo | null
    if (!order) {
      return null
    }

    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-4">
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
                      {order.orderNumber}
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
                      {order.status}{" "}
                    </span>
                  </p>
                  <div className="">
                    <div className="space-y-1">
                      <p>Total Amount</p>
                      <p className="text-end font-bold">
                        {formatCurrency(order.totalPrices)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-200 bg-opacity-30 rounded-md p-3 space-y-2">
                  <h2 className="text-sm text-red-800 font-semibold">
                    Discount Applied: {formatCurrency(order.amountDiscount)}
                  </h2>
                  <h2 className="text-sm font-semibold">
                    Original Subtotal: {formatCurrency(order.totalPrices)}
                  </h2>
                </div>
              </div>

              {/* Cards */}
              <div className="mb-6 py-4 px-3">
                <h3 className="text-xl font-semibold mb-4">Order items</h3>
                <div className="space-y-4">
                  {order.products.map((product, index) => (
                    <div
                      key={order.products[index]._key}
                      className="flex items-center gap-4  p-3 rounded-md"
                    >
                      <Image
                        src={IMAGE_PLACEHOLDER}
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
                          Quantity: {product.quantity}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          ${order.totalPrices / 100} each
                        </p>
                        <p className="text-sm">
                          Subtotal: $
                          {(order.totalPrices / 100) *
                            order.products[index].quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mb-4 justify-center items-center">
                <Link
                  href={`/orders/${searchParamProps.orderNumber}/invoice`}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Home
                </Link>
                <Link
                  href={"/products"}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Go shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {}
  // if (!order) {
  //   return <p>No order data found.</p>
  // }
}
