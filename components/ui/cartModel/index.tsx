"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckoutBtn } from "@/components/CheckoutButton"
import { useEffect, useState } from "react"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { media as wixMedia } from "@wix/sdk"
import { Quantity } from "@/components/Quantity"
import { SkeletonCartModal } from "../Skeleton/SkeletonCartModal"

export const CartModel = ({
  setIsOpenCart,
  isOpenCart,
}: {
  isOpenCart: boolean
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [totalPrice, setTotalPrice] = useState(0)

  const animation = isOpenCart ? "right-0" : "-right-[100%]"

  const wixClient = useWixClient()

  const { cart, counter, isLoading, removeItem } = useCartStore()

  useEffect(() => {
    cart?.lineItems &&
      setTotalPrice(
        cart!.lineItems!.reduce(
          (sum, item) =>
            sum + Number.parseFloat(item.fullPrice?.amount!) * item.quantity!,
          0
        )
      )
  }, [cart])

  return (
    <div
      className={`fixed top-0 ${animation} w-10/12 lg:w-2/4 z-50 transition-all ease-linear duration-300`}
    >
      <div className=" bg-white min-h-dvh px-5 md:px-12 shadow-xl">
        {/* header section */}
        <header className="text-lg font-semibold flex justify-between items-center border-b-2 border-slate-300 h-24">
          <h2 className="">Shopping cart ({counter})</h2>
          <button
            type="button"
            onClick={() => setIsOpenCart((prev) => !prev)}
            className="p-2 cursor-pointer transition-all hover:rotate-180 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </header>
        {!cart || counter === 0 ? (
          <div className="flex flex-col justify-center items-center  space-y-4 min-h-[60dvh]">
            <p className="">Your cart is empty</p>
            <Link
              href={"/products"}
              className="border-b-2 hover:shadow-primary hover:shadow-sm border-b-primary block w-1/2 text-center py-2 px-3 rounded-full transition-all duration-300"
            >
              Go Shopping
            </Link>
          </div>
        ) : (
          <div className="overflow-y-scroll h-[50dvh] md:min-h-[60dvh] divide-y-2 divide-slate-100 ">
            <ul className="pb-8">
              {cart.lineItems?.map((item) => (
                <li
                  key={item._id}
                  className="py-7 border-b-2 border-slate-100 w-full"
                >
                  <figure className="flex gap-x-4 w-full">
                    <Link href={`/products/${item.url}`}>
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
                    </Link>
                    <figcaption className="space-y-1 w-full">
                      <Link
                        href={item.url ?? ""}
                        className="hover:underline underline-offset-2"
                      >
                        {item.productName?.original ?? ""}
                      </Link>
                      <p className="text-slate-700 text-sm">
                        {new Intl.NumberFormat("GAM", {
                          style: "currency",
                          currency: "GMD",
                        }).format(parseFloat(item.fullPrice?.amount!))}
                      </p>
                      <div className="flex justify-between pr-2">
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => removeItem(wixClient, item._id!)}
                          className="underline text-xs text-slate-600 cursor-pointer disabled:cursor-not-allowed"
                        >
                          Remove
                        </button>
                        <Quantity
                          isLoading={isLoading}
                          stockNumber={
                            item.availability?.quantityAvailable || 0
                          }
                          productId={item._id || ""}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Sub footer */}
        <div className="py-6 pr-2 space-y-3 mb-auto absolute bottom-0 w-[85%] bg-white">
          {/* Total */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl">Subtotal</h3>
            <h3 className="font-bold text-xl">
              {new Intl.NumberFormat("GAM", {
                style: "currency",
                currency: "GMD",
              }).format(totalPrice)}
            </h3>
          </div>
          <div className="border-b-2 border-slate-200 pb-3">
            <p className="text-sm text-slate-700">
              Taxes and{" "}
              <Link className="underline underline-offset-2" href="#">
                shipping
              </Link>{" "}
              calculated at checkout
            </p>
          </div>
          <div className="flex gap-x-2">
            <input
              className="checked:rounded-full"
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-sm">
              I agree with the{" "}
              <Link href="#" className="font-semibold underline">
                terms and condition
              </Link>
            </p>
          </div>
          {/* Button */}
          <div className="flex gap-x-5">
            <Link
              onClick={() => setIsOpenCart((prev) => !prev)}
              href={"/cart"}
              className="grid place-content-center border-2 flex-1 "
            >
              View cart
            </Link>
            <div
              className="flex-1"
              onClick={() => setIsOpenCart((prev) => !prev)}
            >
              <CheckoutBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
