"use client"
import { useCartStore } from "@/hooks/useCartStore"
import { useWixClient } from "@/hooks/useWixCient"
import { useSearchParams, useRouter } from "next/navigation"
import React, { useEffect, Suspense } from "react"

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("orderNumber")
  const { emptyCart } = useCartStore()
  const wixClient = useWixClient()
  const router = useRouter()

  useEffect(() => {
    const handleOrderSuccess = async () => {
      if (orderNumber) {
        try {
          emptyCart(wixClient)
          console.log("Cart emptied successfully.")
          // Optionally store order if needed
          // await storeOrder(orderNumber)
        } catch (error) {
          console.error("Failed to empty cart:", error)
        }
      }
    }

    handleOrderSuccess()
  }, [orderNumber, wixClient, emptyCart]) // Add storeOrder to the dependency array

  if (!orderNumber) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Invalid order number. Please try again.</p>
      </div>
    )
  }

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
            Your order number is <b className="text-green-600">{orderNumber}</b>
            .
          </p>
          <p className="text-slate-700 text-sm">
            We appreciate your business and hope you enjoy your purchase.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 justify-center gap-4">
          <button
            aria-label="View Your Orders"
            type="button"
            className="bg-green-600 hover:bg-green-700 py-1 px-3 text-base rounded-sm text-white"
            onClick={() => router.push(`/orders?orderNumber=${orderNumber}`)}
          >
            View Your Orders
          </button>
          <button
            aria-label="Continue Shopping"
            type="button"
            className="border-2 border-slate-100 py-1 px-3 text-base rounded-sm"
            onClick={() => router.push("/products")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}

export default Page
