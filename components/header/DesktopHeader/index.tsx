
import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    label: string,
    url: string,
}

const DesktopHeader = () => {

    return (
        <div className="hidden md:block w-full absolute top-0 h-[6rem] px-8 py-8 ">
            <div className="flex justify-between">
                {/* logo */}
                <Link href='/' className="inline-block">
                    <img className='' src="/icons/logo.png" alt="Logo" width={130}/>
                </Link>
                {/* navs */}
                <nav className="flex gap-5">
                    {
                        navLinks.map((navLink: NavLinkProps) => (
                            <Link key={navLink.label} className='inline-block capitalize text-white text-base font-semibold' href={navLink.url}>
                                {navLink.label}
                            </Link>
                        ))
                    }

                </nav>
                    {/* // <Link className='inline-block text-white text-base font-semibold ' href='/about'>About</Link>  */}
                {/* chats */}
                <div className="">
                    <button className="text-white rounded-full p-2">Chat</button>
                    <button className="text-white rounded-full p-2">Chat</button>
                    <button className="text-white rounded-full p-2">Chat</button>
                </div>
            </div>
      </div>
  )
}

export default DesktopHeader
