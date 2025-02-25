"use client"
import { CartProductList } from "@/components/cartProductList"
import Gutter from "@/components/Gutter"
import { EstimateCard } from "@/components/ui/EstimateCard"
import SubHero from "@/components/ui/subHero"
import { useCartStore } from "@/hooks/useCartStore"
import Link from "next/link"
import React from "react"

function CartPage() {
  const { cart, counter } = useCartStore()

  return (
    <div className="">
      <Gutter />
      <SubHero title={"Shopping Cart"} />
      {!cart || counter === 0 ? (
        <div className="flex flex-col justify-center items-center  space-y-4 min-h-[60dvh]">
          <p className="">Your cart is empty</p>
          <Link
            // onClick={() => setIsOpenCart((prev) => !prev)}
            href={"/products"}
            className="border-b-2 hover:shadow-primary hover:shadow-sm border-b-primary block w-1/2 text-center py-2 px-3 rounded-full transition-all duration-300"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <section className="w-[90%] mx-auto lg:flex justify-between gap-x-5 mt-20">
          <div className="flex-1">
            <CartProductList />
            {/* Add Order Note */}
            <div className="space-y-8 py-5">
              <h4 className="">Add Order Note</h4>
              <textarea
                className="border-2 text-slate-600 text-sm rounded-md p-3 w-full h-32 md:w-2/3 resize-none focus:outline-none"
                placeholder="How can we help you?"
                maxLength={200}
                name="comment"
                id=""
              ></textarea>
            </div>
          </div>
          <div className="space-y-5">
            <EstimateCard />
          </div>
        </section>
      )}
    </div>
  )
}

export default CartPage
