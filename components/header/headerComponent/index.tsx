'use client'
import React from 'react'
import MobileHeader from '../MobileHeader'
import DesktopHeader from '../DesktopHeader'

interface HeaderComponentProps {
    colour: string;
    logoUrl: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ colour, logoUrl }) => {
    return (
        <header className=''>
            <MobileHeader />
            <DesktopHeader colour={colour} logoUrl={logoUrl} />
        </header>
  )
}

export default HeaderComponent
