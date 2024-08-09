
import Link from 'next/link'
import React from 'react'

const DesktopHeader = () => {
    return (
        <div className="hidden md:block w-full absolute top-0 h-[6rem] px-8 py-8 ">
            <div className="flex justify-between">
                {/* logo */}
                <div className="logo ">
                    <img className='' src="/icons/logo.png" alt="Logo" width={130}/>
                </div>
                {/* navs */}
                <nav className="flex gap-5">
                    <Link className='text-white text-base font-semibold ' href='/'>Home</Link>
                    <Link className='text-white text-base font-semibold ' href='/shop'>Shop</Link>
                    <Link className='text-white text-base font-semibold ' href='/products'>Products</Link>
                    <Link className='text-white text-base font-semibold ' href='/about'>About</Link>
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
