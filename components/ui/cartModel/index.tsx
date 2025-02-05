"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckoutBtn } from "@/components/CheckoutButton"
import { useEffect, useState } from "react"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { media as wixMedia } from "@wix/sdk"

export const CartModel = ({
  setIsOpenCart,
  isOpenCart,
}: {
  isOpenCart: boolean
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [totalPrice, setTotalPrice] = useState(0)

  const animation = isOpenCart ? "right-0" : "-right-[100%]"
  const [closeIcon, SetCloseIcon] = useState("close-black")

  const wixClient = useWixClient()

  const { cart, counter, removeItem } = useCartStore()

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
          <div
            onMouseOver={() => SetCloseIcon("close-menu")}
            onMouseLeave={() => SetCloseIcon("close-black")}
            onClick={() => setIsOpenCart((prev) => !prev)}
            className="p-2 cursor-pointer hover:bg-red-500 transition-all duration-200"
          >
            <Image
              width={16}
              height={16}
              src={`/icons/${closeIcon}.png`}
              alt="Cart"
              className="w-auto h-auto"
            />
          </div>
        </header>
        {!cart ? (
          <p className="">Your cart is empty</p>
        ) : (
          <div className="overflow-y-scroll h-[50dvh] md:min-h-[60dvh] divide-y-2 divide-slate-100 ">
            <ul className="pb-8">
              {cart.lineItems?.map((item) => (
                <li key={item._id} className="py-7 border-b-2 border-slate-100">
                  <figure className="flex gap-x-4">
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
                    <figcaption className="space-y-2">
                      <Link
                        href={item.url ?? ""}
                        className="hover:underline underline-offset-2"
                      >
                        {item.productName?.original ?? ""}
                      </Link>
                      <p className="text-slate-700 text-sm">
                        GMD{item.price?.amount}.00
                      </p>
                      <div
                        onClick={() => removeItem(wixClient, item._id!)}
                        className="hover:underline text-xs text-slate-600 cursor-pointer"
                      >
                        Remove
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
            <h3 className="font-bold text-xl">GMD {totalPrice}</h3>
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
