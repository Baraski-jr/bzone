'use client'
import { navLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { NavLinkProps } from '@/types';
import SearchComponent from '@/components/searchComponent';
import { QuickCartView } from '@/components/ui/QuickCartView';

const DesktopHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const pathname = usePathname()
    

    return (
        <div className={`fixed top-0 z-50 hidden md:block w-full bg-[#84BA86] shadow-sm`}>
            {
                isOpen && <QuickCartView setIsOpen={setIsOpen} />
            }
            
            {/* <AutoScroll /> */}
            <div className="flex items-center justify-between h-24 mx-8">
                {/* logo */}
                <Link href='/' className="font-bold text-3xl font-serif italic text-white"> B-ZONE </Link>
                {/* navs */} 
                <nav className="flex gap-5">
                    { navLinks.map(({url, label}: NavLinkProps) => {
                        const isActive = pathname === url
                        const linkClass = isActive ? `underline underline-offset-3` : ``
                        return (
                            <Link
                                key={label}
                                className={`inline-block capitalize font-medium text-white text-base  ${linkClass}`} href={url}>
                                {label}
                            </Link>)
                        })
                    }
                </nav>
                <SearchComponent />
                {/* chats */}
                <div className="flex gap-3">
                    <Link href="/" className="block">
                        <Image 
                            width={25} 
                            height={50} 
                            src="/icons/profile.png"
                            alt="profile" 
                            className='w-auto' 
                        />
                    </Link> 
                    <Link href="/" className="flex w-10 relative">
                        <Image
                            width={25} 
                            height={50} 
                            src="/icons/notification.png"
                            alt="Cart" 
                            className='w-auto'
                        />
                            <span className="absolute -top-2 -right-1 bg-green-400 text-white w-6 h-6 rounded-full grid place-content-center">3</span>
                    </Link>
                    <div
                        onClick={() =>setIsOpen((prev) => !prev)}
                         className="flex w-10 relative cursor-pointer">
                        <Image 
                            width={25} 
                            height={50} 
                            src="/icons/cart.png"
                            alt="Cart" 
                            className='w-auto' 
                        />
                        <span className="absolute -top-2 -right-1 bg-green-400 text-white w-6 h-6 rounded-full grid place-content-center">3</span>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default DesktopHeader
