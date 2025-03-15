"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckoutBtn } from "@/components/CheckoutButton"
import { useEffect, useRef, useState } from "react"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { media as wixMedia } from "@wix/sdk"
import { Quantity } from "@/components/Quantity"
import { usePathname } from "next/navigation"
import { formatCurrency } from "@/lib/CurrencyFormatter"

export const CartModel = ({
  setIsOpenCart,
  isOpenCart,
}: {
  isOpenCart: boolean
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const pathname = usePathname()
  const isActive = pathname.split("?")[0].toLowerCase() === "/cart"
  const [totalPrice, setTotalPrice] = useState(0)
  const cartModelRef = useRef<HTMLDivElement>(null)

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
    // Prevent the user from clicking on the body when the menu is open
    const CartButton = () => {
      if (isOpenCart) {
        document.body.classList.add("overflow-hidden")
      } else {
        document.body.classList.remove("overflow-hidden")
      }
    }
    CartButton()
  }, [cart, isOpenCart])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartModelRef.current &&
        !cartModelRef.current.contains(event.target as Node)
      ) {
        setIsOpenCart(false)
      }
    }

    if (isOpenCart) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpenCart, setIsOpenCart])

  return (
    <div
      className={`${
        isOpenCart
          ? " cursor-pointer translate-x-0 "
          : "translate-x-[100%] delay-500 "
      } fixed z-50 top-0 left-0 min-h-screen w-full bg-slate-900 bg-opacity-40 transition-transform ease-linear duration-0`}
    >
      <div
        ref={cartModelRef}
        className={`${
          isOpenCart ? " translate-x-0 " : "translate-x-[100%] "
        } cursor-default w-10/12 lg:w-2/4 min-h-screen ml-auto rounded-l-xl drop-shadow-xl bg-white px-5 md:px-12  flex flex-col gap-6 justify-between transition-all ease-in-out duration-500`}
      >
        <div className="py-2">
          {/* header section */}
          <header className="py-2 text-lg font-semibold flex justify-between items-center border-b-2 border-slate-300">
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
                onClick={() => setIsOpenCart((prev) => !prev)}
                href={"/products"}
                className="border-b-2 hover:shadow-primary hover:shadow-sm border-b-primary block w-1/2 text-center py-2 px-3 rounded-full transition-all duration-300"
              >
                Go Shopping
              </Link>
            </div>
          ) : (
            <div className="divide-y-2 divide-slate-100 ">
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
                          {formatCurrency(parseFloat(item.fullPrice?.amount!))}
                        </p>
                        <div className="flex justify-between pr-2">
                          <button
                            type="button"
                            disabled={isLoading}
                            onClick={() => removeItem(wixClient, item._id!)}
                            className="underline text-xs text-slate-600 cursor-pointer disabled:cursor-not-allowed"
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
        </div>
        {/* Sub footer */}
        <div className="py-6 pr-2 space-y-3 sticky bottom-0">
          {/* Total */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl">Subtotal</h3>
            <h3 className="font-bold text-xl">{formatCurrency(totalPrice)}</h3>
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
            {!isActive && (
              <Link
                onClick={() => setIsOpenCart((prev) => !prev)}
                href={"/cart"}
                className="grid place-content-center border-2 flex-1 "
              >
                View cart
              </Link>
            )}
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
