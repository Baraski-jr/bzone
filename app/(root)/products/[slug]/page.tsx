import ShopCollection from '@/components/shopCollection'
import SubHero from '@/components/ui/subHero'
import React from 'react'

export default async function Page( { params,}: { params: Promise<{slug: string}>} ) {
  return (
      <>
        <SubHero title={'Products'} />
        <ShopCollection />
      </>
  )
}