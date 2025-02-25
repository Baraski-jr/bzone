"use client"
import { useCartStore } from "@/hooks/useCartStore"
import { useWixClient } from "@/hooks/useWixCient"
import { useSearchParams } from "next/navigation"
import React, { useEffect } from "react"

function page() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("orderNumber")
  const { emptyCart } = useCartStore()
  const wixClient = useWixClient()

  useEffect(() => {
    if (orderNumber) {
      emptyCart(wixClient)
    }
  }, [orderNumber, emptyCart])

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="drop-shadow-md bg-white p-12 rounded-xl w-[90%] max-w-2xl px-5 mx-auto">
        <div className="space-y-4 text-center">
          <div className="mx-auto bg-green-100 rounded-full p-2 w-fit">
            <svg
              className="w-6 h-6 text-green-500 rounded-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-4 border-b-2 border-b-slate-200 pb-4">
            Thank You for Your Purchase!
          </h3>
          <p className="text-slate-700 text-sm">
            Your order number is <strong>{orderNumber}</strong>.
          </p>
          <p className="text-slate-700 text-sm">
            We appreciate your business and hope you enjoy your purchase.
          </p>
        </div>
        <div className="flex items-center mt-4 justify-center gap-4">
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 py-1 px-3 text-base rounded-sm text-white"
            onClick={() => (window.location.href = "/orders")}
          >
            View Your Orders
          </button>
          <button
            type="button"
            className="border-2 border-slate-100 py-1 px-3 text-base rounded-sm"
            onClick={() => (window.location.href = "/products")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
