'use client'
import ShopCollection from '@/components/shopCollection'
import SubHero from '@/components/ui/subHero'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      <SubHero title={'Products'} />
      <ShopCollection />
    </>
  )
}

export default Page 