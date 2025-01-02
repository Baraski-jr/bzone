'use client'


import Image from "next/image";
import Link from "next/link";
import { ControlQuantity } from "@/components/ControlQuantity";
import { CheckoutBtn } from "@/components/CheckoutButton";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";


export const QuickCartView = ({setIsOpen, openCart}: {openCart:boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    const { cart, removeFromCart } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);
    const animation = openCart ? 'right-0' : '-right-[100%]';


    useEffect (() => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, [cart])


    return ( 
        <div className={`fixed top-0 ${animation} w-full md:w-10/12 lg:w-2/4 z-50 bg-pink-300 transition-all duration-500`}>
            <div className=" bg-white min-h-dvh px-5 md:px-12 shadow-xl">
                {/* header section */}
                <header className="text-lg font-semibold flex justify-between items-center border-b-2 border-slate-300 h-24">
                    <h2 className="">Shopping cart</h2>
                    <Image
                        onClick={() =>setIsOpen((prev) => !prev)}
                        width={25} 
                        height={50} 
                        src="/icons/close-black.png"
                        alt="Cart"  
                        className='cursor-pointer w-auto h-auto hover:bg-red-700 transition-all duration-200' 
                    />
                </header>
                {cart.length === 0 ? 
                    ( <p className="">Your cart is empty</p> ):
                    (<div className="overflow-y-scroll h-[50dvh] md:min-h-[60dvh] divide-y-2 divide-slate-100 ">
                        {/* 1 */}
                        <ul className="pb-8">
                            {cart.map(item => (
                                <li key={item.id} className="py-7 border-b-2 border-slate-100">
                                    <figure className='flex gap-x-4'>
                                        <Image width={100} height={130} src={item.images[0]}  alt={item.title} className='bg-[#F5F5F5] object-cover' />
                                        <figcaption className="space-y-2">
                                            {/* Title */}
                                            <Link
                                                href={`/collection/shoes/${item.title}`} 
                                                className="hover:underline underline-offset-2">
                                                {item.title}
                                            </Link>
                                            {/* Colour & size */}
                                            <p className="text-slate-700 text-sm"> GMD{item.price * item.quantity}.00 </p>
                                            {/* Remove button */}
                                            <p 
                                                onClick={() => removeFromCart(item.id, true)}
                                                className="underline text-xs text-slate-600 cursor-pointer">
                                                Remove
                                            </p>
                                            <ControlQuantity product={item} />
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </div>
                    )
                }
                {/* Sub footer */}
                <div className="py-6 pr-2 space-y-3 mb-auto absolute bottom-0 w-[85%] bg-white">
                {/* Total */}
                <div className="flex justify-between items-center">
                    <h3 className="text-xl">Subtotal</h3>
                    <h3 className="font-bold text-xl">GMD{totalPrice}.00</h3>
                    </div>
                    <div className="border-b-2 border-slate-200 pb-3">
                        <p className="text-sm text-slate-700">Taxes and <Link className="underline underline-offset-2" href='#'>shipping</Link> calculated at checkout</p>
                    </div>
                    <div className='flex gap-x-2'>
                        <input className="checked:rounded-full" type="checkbox" name="" id="" />
                        <p className="text-sm">I agree with the <Link href='#' className="font-semibold underline">terms and condition</Link></p>
                    </div>
                    {/* Button */}
                    <div className="flex gap-x-5">
                        <Link
                            onClick={() =>setIsOpen((prev) => !prev)}
                            href={'/cart'} 
                            className="grid place-content-center border-2 flex-1 ">
                            View cart
                        </Link>
                        <div className="flex-1"
                            onClick={() =>setIsOpen((prev) => !prev)}
                            >
                            <CheckoutBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}