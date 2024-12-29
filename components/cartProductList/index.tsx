'use client'
import Link from "next/link";
import { ControlQuantity } from "../ControlQuantity";
import Image from "next/image";


export const CartProductList = () => {
    return ( 
        <>
          {/* Product list */}
            <header className='h-20 border-b-2 border-slate-100 flex items-center '>
              <p className='flex-1 text-left'>Product</p>
              <div className="flex justify-between w-[50%]">
                <p className=''>Price</p>
                <p className=''>Quantitiy</p>
                <p className=''>Total</p>
              </div>
            </header>
            {/* Products lists */}
            {/* 1 */}
            <ul className="">
                <li className="flex py-7 border-b-2 border-slate-100">
                    <figure className='flex gap-x-4 w-[50%]'>
                        <Image width={100} height={180} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                        <figcaption className="space-y-2">
                            {/* Title */}
                            <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>
                            {/* Colour & size */}
                            <p className="text-xs text-slate-600">Colour: white</p>
                            <p className="text-xs text-slate-600">Size: L</p>
                            {/* Remove button */}
                            <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                        </figcaption>
                    </figure>
                    {/* Right side */}
                    <div className=" flex flex-col md:flex-row items-center gap-4 md md:justify-between w-[50%]">
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                        <ControlQuantity inventory={6} />
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                    </div>
                </li>
            </ul>
            {/* 1 */}
            <ul className="">
                <li className="flex py-7 border-b-2 border-slate-100">
                    <figure className='flex gap-x-4 w-[50%]'>
                        <Image width={100} height={180} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                        <figcaption className="space-y-2">
                            {/* Title */}
                            <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>
                            {/* Colour & size */}
                            <p className="text-xs text-slate-600">Colour: w</p>
                            <p className="text-xs text-slate-600">Size: L</p>
                            {/* Remove button */}
                            <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                        </figcaption>
                    </figure>
                    {/* Right side */}
                    <div className=" flex flex-col md:flex-row items-center gap-4 md md:justify-between w-[50%]">
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                        <ControlQuantity inventory={6} />
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                    </div>
                </li>
            </ul>
            {/* 1 */}
            <ul className="">
                <li className="flex py-7 border-b-2 border-slate-100">
                    <figure className='flex gap-x-4 w-[50%]'>
                        <Image width={100} height={180} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                        <figcaption className="space-y-2">
                            {/* Title */}
                            <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>
                            {/* Colour & size */}
                            <p className="text-xs text-slate-600">Colour: while</p>
                            <p className="text-xs text-slate-600">Size: L</p>
                            {/* Remove button */}
                            <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                        </figcaption>
                    </figure>
                    {/* Right side */}
                    <div className=" flex flex-col md:flex-row items-center gap-4 md md:justify-between w-[50%]">
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                        <ControlQuantity inventory={6} />
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                    </div>
                </li>
            </ul>
            {/* 1 */}
            <ul className="">
                <li className="flex py-7 border-b-2 border-slate-100">
                    <figure className='flex gap-x-4 w-[50%]'>
                        <Image width={100} height={180} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                        <figcaption className="space-y-2">
                            {/* Title */}
                            <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>
                            {/* Colour & size */}
                            <p className="text-xs text-slate-600">Colour: while</p>
                            <p className="text-xs text-slate-600">Size: L</p>
                            {/* Remove button */}
                            <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                        </figcaption>
                    </figure>
                    {/* Right side */}
                    <div className=" flex flex-col md:flex-row items-center gap-4 md md:justify-between w-[50%]">
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                        <ControlQuantity inventory={6} />
                        <p className="text-slate-700 text-sm">GMD110.00</p>
                    </div>
                </li>
            </ul>
        </>
    );
}