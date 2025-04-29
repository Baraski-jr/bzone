"use client"

import Link from "next/link"
import Image from "next/image"
import { useWixClient } from "@/hooks/useWixCient"
import { media as wixMedia } from "@wix/sdk"
import { useCartStore } from "@/hooks/useCartStore"
import { formatCurrency } from "@/lib/CurrencyFormatter"
import { Quantity } from "../Quantity"

export const CartProductList = () => {
  const wixClient = useWixClient()

  const { cart, isLoading, removeItem } = useCartStore()

  return (
    <section>
      <header className="h-20 border-b-2 border-slate-100 flex items-center ">
        <p className="flex-1 text-left">Product</p>
        <div className="flex justify-between w-[50%]">
          <p className="md:hidden">Details</p>
          <p className="hidden md:block">Price</p>
          <p className="hidden md:block">Quantitiy</p>
          <p className="hidden md:block">Total</p>
        </div>
      </header>

      <div className="">
        {cart &&
          cart.lineItems?.map((item: any) => (
            <div
              key={item._id}
              className="flex py-7 border-b-2 border-slate-100"
            >
              <figure className="flex flex-col md:flex-row gap-x-4 w-[50%]">
                {item.image && (
                  <Image
                    width={100}
                    height={100}
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      100,
                      100,
                      {}
                    )}
                    alt={item.productName?.original ?? ""}
                    className="bg-[#F5F5F5] object-cover"
                  />
                )}
                <figcaption className="space-y-2">
                  {/* Title */}
                  <Link
                    href={`/products/shoes/${item.url || ""}`}
                    className="hidden md:block hover:underline text-xs md:text-sm lg:text-base underline-offset-2"
                  >
                    {item.productName?.original}
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeItem(wixClient, item._id || "")}
                    className="hidden md:block underline text-xs text-slate-600 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash-2 hover:text-red-500 transition-colors duration-100"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </button>
                </figcaption>
              </figure>
              {/* Right side */}
              <div className="flex flex-col md:items-center h-fit md:flex-row gap-2 md:gap-4 md justify-start md:justify-between w-[50%]">
                <p className="text-slate-700 text-sm order-1 hidden md:block">
                  <span className="md:hidden">Price: </span>
                  {formatCurrency(Number(item.fullPrice?.amount!))}
                </p>
                <Link
                  href={`/products/shoes/${item.url || ""}`}
                  className="md:hidden hover:underline text-xs md:text-sm lg:text-base underline-offset-2"
                >
                  {item.productName?.original}
                </Link>
                <div className="order-3 md:order-2 flex items-center justify-between gap-2">
                  <Quantity
                    isLoading={isLoading}
                    stockNumber={item.availability?.quantityAvailable || 0}
                    productId={item._id || ""}
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(wixClient, item._id || "")}
                    className="md:hidden block underline text-xs text-slate-600 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash-2 hover:text-red-500 transition-colors duration-100"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-700 text-base order-2 md:order-3">
                  <span className="md:hidden">Total price:</span>
                  {formatCurrency(Number(item.fullPrice?.amount!)) }
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
