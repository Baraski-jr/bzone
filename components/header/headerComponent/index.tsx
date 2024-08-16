'use client'
import React from 'react'
import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'



const HeaderComponent = () => {
    return (
        <header className=''>
            <div className="relative">
                <MobileHeader />
                <DesktopHeader />
            </div>
        </header>
  )
}

export default HeaderComponent
