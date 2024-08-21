import React from 'react'
import ProductCart from '../productCart'
import { products } from '@/constants'
import FilterComponent from '../filterComponent'

const ShopCollection = () => {
    return (
        <section className="w-[95%] mx-auto py-8 space-y-2 md:space-y-4">
            <FilterComponent />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
                {
                    products.map(({ id, name, imageURl, price }) => (
                        <ProductCart key={id} name={name} imageUrl={imageURl} price={price} />
                    ) )
                }
            </div>
        </section>
  )
}

export default ShopCollection