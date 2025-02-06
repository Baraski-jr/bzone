"use client"
import Gutter from "@/components/Gutter"
import PaymentComponent from "@/components/PaymentComponent"
import { useCartStore } from "@/hooks/useCartStore"
import Image from "next/image"
import { useEffect, useState } from "react"
import { media as wixMedia } from "@wix/sdk"

export default function Page() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const SHIPINGCOST = 200
  const { cart } = useCartStore()

  useEffect(() => {
    cart?.lineItems &&
      setTotalPrice(
        cart!.lineItems!.reduce(
          (sum, item) =>
            sum + Number.parseFloat(item.fullPrice?.amount!) * item.quantity!,
          0
        )
      )

    cart?.lineItems &&
      setTotalItems(
        cart!.lineItems!.reduce((sum, item) => sum + item.quantity!, 0)
      )
  }, [cart])

  return (
    <section className="w-[85%] mx-auto">
      <Gutter />
      {!cart ? (
        <p className="Cart is empty"></p>
      ) : (
        <section className="flex flex-col lg:flex-row gap-x-3">
          {/* Customer information */}
          <section className="w-full py-12 order-2 lg:order-1">
            {/* Express Checkout section*/}
            <div className="space-y-2 text-center">
              <p className="text-center text-slate-400 text-sm">
                Express checkout
              </p>
              <button className="bg-yellow-400 py-2 w-full lg:w-60 rounded-sm">
                <Image
                  width={70}
                  height={50}
                  src={
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                  }
                  data-v-fd53f700=""
                  alt="PayPal"
                  className="mx-auto"
                />
              </button>
            </div>
            {/* OR design section */}
            <div className="py-3 flex items-center gap-x-2">
              <div className="w-full py-[.1rem] rounded-full bg-slate-200"></div>
              <p className="text-slate-500 text-sm">OR</p>
              <div className="w-full py-[.1rem] rounded-full bg-slate-200"></div>
            </div>
            {/* Contact form section */}
            <div className="py-3 space-y-3">
              <div className="flex justify-between">
                <h3 className="font-semibold text-2xl">Contact</h3>
                {/* <Link href={'sing-up'} className='text-blue-500 underline text-sm' >Log in</Link> */}
              </div>
              <div className="">
                <input
                  className="border-b-2 border-slate-300 py-2 w-full rounded-sm focus:outline-none focus:border-slate-900"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email or mobile phone number"
                />
              </div>
              <div className="flex gap-x-2">
                <input type="checkbox" name="offer" id="" />
                <p className="text-sm ">Email me with news and offers</p>
              </div>
            </div>
            {/* Delivery section posponded */}
            <div className=""></div>
            {/* Payment section */}
            <PaymentComponent />
          </section>

          {/* Product information */}
          <section className="mt-5 w-full h-fit bg-slate-100 space-y-4 px-6 py-12 order-1 lg:order-2">
            {/* product items */}
            <section className="space-y-4">
              {cart?.lineItems?.map((item) => (
                <article key={item._id} className="flex items-center gap-x-3">
                  <div className="relative">
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
                        className="bg-white border-2 rounded-md object-cover"
                      />
                    )}
                    <p className="absolute -top-2 -right-2 w-6 h-6 bg-slate-500 text-white text-sm rounded-full grid place-content-center">
                      {item.quantity}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-sm">{item.productName?.original}</p>
                    <p className="text-sm">GMD{item.fullPrice?.amount}.00</p>
                  </div>
                </article>
              ))}
            </section>
            {/* Discount Code */}
            <section className="flex gap-x-3 items-center">
              <input
                type="text"
                placeholder="Discount code"
                className="text-sm border-b-2 border-slate-300 py-3 px-3 text-slate-700 w-[90%] rounded-sm focus:outline-none focus:border-blue-500 hover:border-blue-200"
              />
              <button
                type="submit"
                className="w-[20%] text-sm py-3 px-3 bg-slate-200 hover:bg-slate-300 transition-all duration-300 "
              >
                APPLY
              </button>
            </section>
            {/* Calculated product information */}
            <div className="space-y-2 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm">
                  Subtotal • <span> {totalItems} items</span>
                </p>
                <p className="text-sm">GMD {totalPrice}.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Shipping &copy;</p>
                <p className="text-sm">GMD{SHIPINGCOST}.00</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="font-bold text-lg">Total Amount</p>
                <p className="font-bold text-lg">
                  GMD{totalPrice + SHIPINGCOST}.00
                </p>
              </div>
            </div>
          </section>
        </section>
      )}
    </section>
  )
}
