import ShopCollection from '@/components/shopCollection'
import { QuickCartView } from '@/components/ui/QuickCartView'
import SubHero from '@/components/ui/subHero'
import React from 'react'
const Page: React.FC<{ params: { slug: string } }>  = async ({ params }) => {
  return (
    <>
      <SubHero title={'Products'} />
      <ShopCollection />
    </>
  )
}

export default Page 