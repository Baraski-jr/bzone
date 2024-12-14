
import { CartProductList } from '@/components/cartProductList'
import { EstimateCard } from '@/components/ui/EstimateCard'
import ShippingCard from '@/components/ui/shippingCard'
import SubHero from '@/components/ui/subHero'
import React from 'react'

function CartPage() {
  return (
    <div className=''>
      <SubHero title={'Shopping Cart'} />
      <section className="w-[90%] mx-auto lg:flex justify-between gap-x-5 mt-20">
        <div className="flex-1">
          <CartProductList />
          {/* Add Order Note */}
          <div className="space-y-8 py-5">
            <h4 className="">Add Order Note</h4>
            <textarea className='border-2 text-slate-600 text-sm rounded-md p-3 h-32 w-2/3 resize-none focus:outline-none' placeholder='How can we help you?' maxLength={200} name="comment" id=""></textarea>
          </div>
        </div>
        <div className="space-y-5">
          <ShippingCard padding={'6'} border={'[1.5px]'} />
          <EstimateCard />
        </div>
      </section>
    </div>
  )
}

export default CartPage
