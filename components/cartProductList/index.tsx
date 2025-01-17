'use client'

import Link from "next/link";
import { ControlQuantity } from "../ControlQuantity";
import Image from "next/image";
import { useCart} from "@/context/CartContext";

export const CartProductList = () => {
    const { cart, removeFromCart } = useCart()
    return ( 
        <section>
        {cart.length === 0 ? 
            ( <p className=""> The Cart is empty </p> ) : 
            
            (<> 
                <header className='h-20 border-b-2 border-slate-100 flex items-center '>
                    <p className='flex-1 text-left'>Product</p>
                    <div className="flex justify-between w-[50%]">
                        <p className='md:hidden'>Details</p>
                        <p className='hidden md:block'>Price</p>
                        <p className='hidden md:block'>Quantitiy</p>
                        <p className='hidden md:block'>Total</p>
                    </div>
                </header>

                <div className="">
                    {cart.map(item => (
                        <div key={item.id} className="flex py-7 border-b-2 border-slate-100">
                            <figure className='flex flex-col md:flex-row gap-x-4 w-[50%]'>
                                <Image width={100} height={100} src={item.images[0]}  alt={item.title} quality={100} className='bg-[#F5F5F5] object-cover' />
                                <figcaption className="space-y-2">
                                    {/* Title */}
                                    <Link href={`/products/shoes/${item.title}`} className="hover:underline text-xs md:text-sm lg:text-base underline-offset-2">
                                        {item.title}
                                    </Link>
                                    <button
                                        onClick={() => removeFromCart(item.id, true)}
                                        className="block underline text-xs text-slate-600 cursor-pointer">
                                        Remove
                                    </button>
                                </figcaption>
                            </figure>
                            {/* Right side */}
                            <div className="flex flex-col md:flex-row gap-4 md justify-end md:justify-between w-[50%]">
                                <p className="text-slate-700 text-sm order-1"><span className="md:hidden">Price:</span> GMD{item.price}.00</p>
                                <div className="order-3 md:order-2"><ControlQuantity product={item} /></div>
                                <p className="text-slate-700 text-sm order-2 md:order-3"><span className="md:hidden">Total price:</span> GMD{item.price * item.quantity}.00</p>
                            </div>
                        </div>
                    ))
                        
                    }

                </div>
            </>) 
        }
        </section>
    );
}