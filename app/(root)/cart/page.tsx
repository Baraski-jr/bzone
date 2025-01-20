import { CartProductList } from "@/components/cartProductList"
import Gutter from "@/components/Gutter"
import { EstimateCard } from "@/components/ui/EstimateCard"
import SubHero from "@/components/ui/subHero"
import React from "react"

function CartPage() {
  return (
    <div className="">
      <Gutter />
      <SubHero title={"Shopping Cart"} />
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
    </div>
  )
}

export default CartPage
