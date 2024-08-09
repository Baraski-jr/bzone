
import Link from 'next/link'
import React from 'react'

const MobileHeader = () => {
    return (
        <header className="md:hidden w-full bg-white px-8 py-8 ">
            <div className="flex justify-between items-center">
                {/* navs */}
                <div className="space-y-1">
                    <div className="px-3 py-[.09rem] bg-black"></div>
                    <div className="px-3 py-[.09rem] bg-black"></div>
                    <div className="px-3 py-[.09rem] bg-black"></div>
                </div>
                {/* logo */}
                <div className="logo ">
                    <img className='' src="/icons/logo-mobile.png" alt="Logo" width={130}/>
                </div>
                {/* chats */}
                <div className="">
                    <button className="text-slate-950 rounded-full p-2">Chat</button>
                </div>
            </div>
      </header>
  )
}

export default MobileHeader
