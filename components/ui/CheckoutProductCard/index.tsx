import Image from 'next/image'
import React from 'react'

export default function CheckoutProductCard() {
  return (
    <div>
        <article className="flex items-center gap-x-3">
            {/* image */}
            <div className="relative">
              <Image width={100} height={180} src="/products/c1.png"  alt=''  className='bg-white border-2 rounded-md object-cover' />
              <p className="absolute -top-2 -right-2 w-6 h-6 bg-slate-500 text-white text-sm rounded-full grid place-content-center">1</p>
            </div>
            <div className="flex justify-between w-full">
              {/* Title */}
              <p className="text-sm">Prime Super Nike</p>
              {/* Price */}
              <p className="text-sm">GMD200.00</p>
            </div>      
        </article>
    </div>
  )
}
