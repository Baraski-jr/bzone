'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { NavLinkProps } from '@/types'
import { usePathname } from 'next/navigation'
import { QuickCartView } from '@/components/ui/QuickCartView'
import { useCart } from '@/context/CartContext'

const MobileHeader = () => {

    const {cart} = useCart();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
        if (window.scrollY > 30) {
          setIsScrolled(true); // Change the background color when scrolled more than 50px
        } else {
          setIsScrolled(false); // Reset the background when scrolled back up
        }
      };
    
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
    
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
      
        
    const [openMenu, setOpenMenu] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const pathname = usePathname()

    const handleMenue = () => {
        setOpenCart(false)
        setOpenMenu((prev) => !prev)
    }

    const menu = openMenu ? '/icons/close-menu.png': '/icons/open-menu.png';
    const animation = openMenu ? 'translate-y-0' : 'translate-y-[100rem]';
    const homePage = pathname === '/' && !isScrolled ? 'bg-opacity-0' : 'bg-[#84BA86] shadow-md bg-opacity-100'; 

    return (
        <div className={`z-50 md:hidden w-full flex drop-shadow-md items-center h-20 fixed ${homePage} top-0 transition-all duration-300`}>
            <div className="flex justify-between items-center mx-auto w-[95%] ">
                {/* Menu */}
                <Image
                    width={40}
                    height={40}
                    src={menu}
                    alt="menu"
                    className='cursor-pointer '
                    onClick={() => handleMenue()}
                />
                {/* logo */} 
                <Link href='/' className="font-bold text-2xl )font-serif italic text-slate-50"> B-ZONE </Link>
                {/* Cart icons */}
                {!openMenu && (
                  <div
                      onClick={() =>setOpenCart((prev) => !prev)}
                      className="flex w-10 relative cursor-pointer">
                      <Image 
                        width={40}
                        height={40}
                        src="/icons/bag.png"
                        alt="Cart"
                        className='cursor-pointer'
                        />
                        <span className="absolute -top-2 -right-1 bg-green-400 text-white w-6 h-6 rounded-full grid place-content-center">
                          {cart.length}
                        </span>
                      </div>
                    )
                }
                {/* Open the quick cart view */}
                {/* { openCart && <QuickCartView setIsOpen={setOpenCart} /> } */}
                <QuickCartView openCart={openCart} setIsOpen={setOpenCart} />

                <div className={`z-30 border-t-2 border-slate-300 flex flex-col items-center gap-5 px-5 pt-[40%] min-h-dvh w-full bg-[#84BA86] absolute top-[5rem] left-0 transition-transform ease-in-out duration-500 ${animation}`}>
                    { navLinks.map(({label, url}: NavLinkProps) => {
                        const isActive = pathname === url
                        const linkClass = isActive ? `font-bold underline-` : `font-light`
                        return (
                            <Link
                                key={label}
                                className={`inline-block capitalize text-white text-xl  ${linkClass}`} href={url}>
                                {label}
                            </Link>
                            )
                        }) }
                </div>
            </div>
      </div>
  )
}

export default MobileHeader

