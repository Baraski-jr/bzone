import { navLinks } from '@/constants'
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinkProps {
    label: string;
    url: string;
}

interface DesktopHeaderProps {
    colour: string;
    logoUrl: string;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ colour, logoUrl }) => {

    const pathname = usePathname()

    const isHomePage = pathname === '/'
    const headerClass = isHomePage && 'absolute top-0'
    return (
        <div className={`${headerClass} hidden md:block w-full px-8`}>
            <div className="flex items-center justify-between h-16">
                {/* logo */}
                <Link href='/' className="inline-block">
                    <img className='' src={ logoUrl } alt="Logo" width={130}/>
                </Link>
                {/* navs */} 
                <nav className="flex gap-5">
                    {
                        navLinks.map((navLink: NavLinkProps) => {
                            const isActive = pathname === navLink.url
                            const linkClass = isActive ? `font-semibold text-green-600` : `text-base font-medium text-${[colour]}`
                            return (
                                <Link
                                    key={navLink.label}
                                    className={`inline-block capitalize text-base  ${linkClass}`} href={navLink.url}>
                                    {navLink.label}
                                </Link>
                            )
                        })
                    }
    
                </nav>
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
