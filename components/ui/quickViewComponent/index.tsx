'use client'
import React from 'react'
import Image from 'next/image'
import { products } from '@/constants'
import Add from '@/components/AddToCart'

const QuickViewComponent = () => {
    const image = products[4].images[0]
    return (
        <div className="px-0 w-[90%] shadow-md mx-auto mt-[5rem] md:flex max-w-[50rem]">
            {/* Image Left */}
            <div className="md:w-1/2 w-full relative">
                <Image
                    width={100}
                    height={100}
                    className='h-full w-auto object-contain' src={image} alt={products[4].title} />
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
                    <Add inventory={4} />
                </div>
                <div className="pt-3">
                    <button className='font-semibold'> View full details  <span className='pl-3'>--+</span></button>
                </div>
            </div>
        </div>

  )
}

export default QuickViewComponent
