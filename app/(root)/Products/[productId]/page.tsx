export const runtime = 'edge';
'use client'

import Image from 'next/image';
import React from 'react'

const ProductDetail = ({ params }: { params: { productId: number }}) => {
  console.log(params)

  return (
    <section className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-[95%] mx-auto">
        {/* product image display section*/}
        <div className="md:flex">
          <div className="hidden md:flex flex-col gap-y-1 pr-1 pt-5">
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src="/products/a1.png" alt="shoes" />
            </button>
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src="/products/a2.png" alt="shoes" />
            </button>
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src="/products/a1.png" alt="shoes" />
            </button>
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src="/products/a2.png" alt="shoes" />
            </button>
          </div>
          <div className="bg-[#F5F5F5] h-fit size-full">
            <img width={200} height={200} className='max-w-full w-full' src="/products/a1.png" alt='Products image' ></img>
          </div>
          {/* More option images visibel only on mobile view */}
          {/* Main product image */}
          <div className="md:hidden flex gap-x-2 py-2 overflow-hidden">
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src="/products/a1.png" alt="shoes" />
            </button>
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src="/products/a2.png" alt="shoes" />
            </button>
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src="/products/a1.png" alt="shoes" />
            </button>
            <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
              <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src="/products/a2.png" alt="shoes" />
            </button>
          </div>
        </div>
        {/* Product detaisls right  */}
        <div className="border-2 w-full size-full">
          <div className=""></div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
