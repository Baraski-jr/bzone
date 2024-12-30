import { ProductsType } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function CheckoutProductCard(item: ProductsType) {
  return (
      <article className="flex items-center gap-x-3">
          <div className="relative">
            <Image width={100} height={180} src={item.images[0]}  alt={item.title}  className='bg-white border-2 rounded-md object-cover' />
            <p className="absolute -top-2 -right-2 w-6 h-6 bg-slate-500 text-white text-sm rounded-full grid place-content-center">1</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-sm">{item.title}</p>
            <p className="text-sm">GMD{item.price}.00</p>
          </div>      
      </article>
  )
}
