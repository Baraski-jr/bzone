'use client'
import React from 'react'
import Image from 'next/image'

const QuickViewComponent = () => {
    return (
        <div className="container px-0 w-[90%] shadow-md mx-auto mt-[5rem] md:flex max-w-[50rem] relative">
            {/* Image Left */}
            <div className="md:w-1/2 w-full relative">
                <Image className='h-full object-contain' src="/phone.jpeg" alt="Phone" />
                {/* Pagination */}
                <button className="absolute left-0 top-[50%] translate-y-[-50%] px-1 text-xl bg-red-500 text-white" >-</button>
                <button className="absolute right-0 top-[50%] translate-y-[-50%] px-1 text-xl bg-red-500 text-white" >-</button>
            </div>
            {/* details Right */}
            <div className="w-full md:w-1/2 bg-slate-50 px-10 py-16 ">
                {/* close icone */}
                <div className="absolute top-0 right-0 px-4 py-2 text-white bg-red-700 cursor-pointer">x</div>
                {/* header title */}
                <div className="space-y-1 py-5 font-semibold capitalize text-slate-800">
                    <h2 className="font-semibold capitalize text-slate-800">iPhone 12</h2>
                    <p className="">$599.00</p>
                </div>
                <div className="border-y-2 border-slate-200 pt-4 pb-6 space-y-6">
                    <div className="text-slate-600">
                        <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nulla consequatur sequi suscipit, consequuntur.</p>
                    </div>
                    {/* add to cart button */}
                    <div className="flex items-center gap-2">
                        {/* Add or  item */}
                        <div className="flex border-slate-200 gap-2 items-center py-2 border-2 rounded-sm">
                            <div className="px-2 font-bold text-xl text-slate-300 cursor-pointer">-</div>
                            <div className="px-3">1</div>
                            <div className="px-2 font-bold text-xl text-slate-300 cursor-pointer">+</div>
                        </div>
                        <button className="bg-slate-900 w-full text-white font-medium text-base rounded-sm py-3 uppercase">Add to Cart</button>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <span className="w-[2rem] h-[2rem] border border-slate-900 rounded-full grid place-content-center">+</span>
                        <p className="font-semibold text-black text-sm">Login to use Wishlist</p>
                    </div>
                </div>
                <div className="pt-3">
                    <button className='font-semibold'> View full details  <span className='pl-3'>--+</span></button>
                </div>
            </div>
        </div>

  )
}

export default QuickViewComponent
