'use client'
import { navLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { NavLinkProps } from '@/types';
import { QuickCartView } from '@/components/ui/QuickCartView';
import { useCart } from '@/libs/CartContext';

const DesktopHeader = () => {
  const {cart} = useCart();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
        if (window.scrollY > 50) {
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
  
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const homePage = pathname === '/' && !isScrolled ? 'bg-opacity-0' : 'bg-[#84BA86] shadow-sm bg-opacity-100'; 

    return (
        // <div className={`fixed top-0 z-50 hidden md:block w-full bg-[#84BA86] ${homePage} shadow-sm`}>
        <div className={`fixed top-0 z-50 hidden md:block w-full ${homePage} transition-all duration-300`}>
            {/* Control for the opening and closing of QuickCartView*/}
            { isOpen && <QuickCartView setIsOpen={setIsOpen} /> }
            
            {/* <AutoScroll /> */}
            <div className="flex items-center justify-between h-24 mx-8">
                {/* logo */}
                <Link href='/' className="font-bold text-3xl font-serif italic text-white"> B-ZONE </Link>
                {/* navs */} 
                <nav className="flex gap-5">
                    { navLinks.map(({url, label}: NavLinkProps) => {
                        const isActive = pathname === url
                        const linkClass = isActive ? `font-bold underline-offset-3` : `font-light`
                        return (
                            <Link
                                key={label}
                                className={`inline-block capitalize text-white text-base  ${linkClass}`} href={url}>
                                {label}
                            </Link>)
                        })
                    }
                </nav>
                {/* chats */}
                <div
                    onClick={() =>setIsOpen((prev) => !prev)}
                     className="flex w-10 relative cursor-pointer">
                    <Image 
                        width={25} 
                        height={50} 
                        src="/icons/bag.png"
                        alt="Cart"  
                        className='w-auto' 
                    />
                    <span className="absolute -top-2 -right-1 bg-green-400 text-white w-6 h-6 rounded-full grid place-content-center">
                      {cart.length}
                    </span>
                </div>
            </div>
      </div>
  )
}

export default DesktopHeader
