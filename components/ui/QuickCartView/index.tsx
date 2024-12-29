import Image from "next/image";
import ShippingCard from "../shippingCard";
import Link from "next/link";
import { ControlQuantity } from "@/components/ControlQuantity";
import { CheckoutBtn } from "@/components/CheckoutButton";

export const QuickCartView = ({setIsOpen}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return ( 
        <div className="fixed top-0 right-0 w-[90%] lg:w-2/4 z-50">
            <div className=" bg-white min-h-[100vh] px-12 shadow-xl">
                {/* header section */}
                <header className="text-lg font-semibold flex justify-between items-center border-b-2 border-slate-300 h-14 ">
                    <h2 className="">Shopping cart</h2>
                    <span className="cursor-pointer" onClick={() =>setIsOpen((prev) => !prev)}>X</span>
                </header>
                <ShippingCard />
                {/* Product Listing */}
                <div className="overflow-y-scroll h-[50dvh] md:min-h-[60dvh] ">
                {/* 1 */}
                <ul className="">
                    <li className="py-7 border-b-2 border-slate-100">
                        <figure className='flex gap-x-4'>
                            <Image width={100} height={130} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                            <figcaption className="space-y-2">
                                {/* Title */}
                                <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>
                                {/* Colour & size */}
                                <p className="text-slate-700 text-sm">GMD110.00</p>
                                {/* Remove button */}
                                <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                                <ControlQuantity inventory={6} />
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                {/* 1 */}
                <ul className="">
                    <li className="py-7 border-b-2 border-slate-100">
                        <figure className='flex gap-x-4'>
                            <Image width={100} height={130} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                            <figcaption className="space-y-2">
                                {/* Title */}
                                <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>
                                {/* Colour & size */}
                                <p className="text-slate-700 text-sm">GMD110.00</p>
                                {/* Remove button */}
                                <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                                <ControlQuantity inventory={6} />
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                {/* 1 */}
                <ul className="">
                    <li className="py-7 border-b-2 border-slate-100">
                        <figure className='flex gap-x-4'>
                            <Image width={100} height={130} src="/products/c1.png"  alt='' quality={100} className='bg-[#F5F5F5] object-cover' />
                            <figcaption className="space-y-2">
                                {/* Title */}
                                <Link href='/collection/shoes/Adidas-Ultraboost-21' className="hover:underline underline-offset-2">Puma RSX</Link>
                                {/* Colour & size */}
                                <p className="text-slate-700 text-sm">GMD110.00</p>
                                {/* Remove button */}
                                <p className="underline text-xs text-slate-600 cursor-pointer">Remove</p>
                                <ControlQuantity inventory={6} />
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                </div>
                {/* Sub footer */}
                <div className="py-6 pr-2 space-y-3 mb-auto absolute bottom-0 w-[85%] bg-white">
                {/* Total */}
                <div className="flex justify-between items-center">
                        <h3 className="text-xl">Subtotal</h3>
                        <h3 className="font-bold text-xl">GMD144.00</h3>
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
                        <Link
                            href={'/checkout'}
                            onClick={() =>setIsOpen((prev) => !prev)}
                            className="flex-1 ">
                            <CheckoutBtn />

                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}