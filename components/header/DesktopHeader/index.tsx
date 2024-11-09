import { navLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'
import { NavLinkProps } from '@/types';
import SearchComponent from '@/components/searchComponent';

const DesktopHeader = () => {

    const pathname = usePathname()

    return (
        <div className={`fixed top-0 z-50 hidden md:block w-full bg-[#84BA86] shadow-sm`}>
            {/* <AutoScroll /> */}
            <div className="flex items-center justify-between h-24 mx-8">
                {/* logo */}
                <Link href='/' className="font-bold text-3xl font-serif italic text-white"> B-ZONE </Link>
                {/* navs */} 
                <nav className="flex gap-5">
                    { navLinks.map(({url, label}: NavLinkProps) => {
                        const isActive = pathname === url
                        const linkClass = isActive ? `font-semibold text-green-600` : `text-base text-white`
                        return (
                            <Link
                                key={label}
                                className={`inline-block capitalize font-medium  text-base  ${linkClass}`} href={url}>
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
                    <div className="flex w-10 relative">
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
