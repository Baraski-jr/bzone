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
                <p className='md:hidden'>Details</p>
                <p className='hidden md:block'>Price</p>
                <p className='hidden md:block'>Quantitiy</p>
                <p className='hidden md:block'>Total</p>
              </div>
            </header>
            {/* Products lists */}
            <ul className="">
                {/* 1 */}
                <li className="flex py-7 border-b-2 border-slate-100">
                    <figure className='flex flex-col md:flex-row gap-x-4 w-[50%]'>
                        <Image width={100} height={180} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                        <figcaption className="space-y-2">
                            {/* Title */}
                            <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>

                            <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                        </figcaption>
                    </figure>
                    {/* Right side */}
                    <div className="flex flex-col md:flex-row gap-4 md justify-end md:justify-between w-[50%]">
                        <p className="text-slate-700 text-sm order-1"><span className="md:hidden">Price:</span> GMD110.00</p>
                        <div className="order-3 md:order-2"><ControlQuantity inventory={6} /></div>
                        <p className="text-slate-700 text-sm order-2 md:order-3"><span className="md:hidden">Total price:</span>GMD110.00</p>
                    </div>
                </li>
                {/* 1 */}
                <li className="flex py-7 border-b-2 border-slate-100">
                    <figure className='flex flex-col md:flex-row gap-x-4 w-[50%]'>
                        <Image width={100} height={180} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                        <figcaption className="space-y-2">
                            {/* Title */}
                            <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>

                            <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                        </figcaption>
                    </figure>
                    {/* Right side */}
                    <div className="flex flex-col md:flex-row gap-4 md justify-end md:justify-between w-[50%]">
                        <p className="text-slate-700 text-sm order-1"><span className="md:hidden">Price:</span> GMD110.00</p>
                        <div className="order-3 md:order-2"><ControlQuantity inventory={6} /></div>
                        <p className="text-slate-700 text-sm order-2 md:order-3"><span className="md:hidden">Total price:</span>GMD110.00</p>
                    </div>
                </li>
                {/* 1 */}
                <li className="flex py-7 border-b-2 border-slate-100">
                    <figure className='flex flex-col md:flex-row gap-x-4 w-[50%]'>
                        <Image width={100} height={180} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                        <figcaption className="space-y-2">
                            {/* Title */}
                            <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>

                            <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                        </figcaption>
                    </figure>
                    {/* Right side */}
                    <div className="flex flex-col md:flex-row gap-4 md justify-end md:justify-between w-[50%]">
                        <p className="text-slate-700 text-sm order-1"><span className="md:hidden">Price:</span> GMD110.00</p>
                        <div className="order-3 md:order-2"><ControlQuantity inventory={6} /></div>
                        <p className="text-slate-700 text-sm order-2 md:order-3"><span className="md:hidden">Total price:</span>GMD110.00</p>
                    </div>
                </li>
            </ul>
        </>
    );
}