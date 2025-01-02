import ShopCollection from '@/components/shopCollection'
import SubHero from '@/components/ui/subHero'
import React from 'react'

export default async function Page( { params,}: { params: Promise<{slug: string}>} ) {
  const { slug } = await params;
  return (
      <>
        <SubHero title={'Products'} />
        <ShopCollection />
      </>
  )
}