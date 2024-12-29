import Gutter from '@/components/Gutter'
import { SubHeroPropType } from '@/types'
import Link from 'next/link'
import React from 'react'

const SubHero = ({title, links}: SubHeroPropType) => {
  return (
      <>
      <Gutter />
      <section className='bg-subHero-bg bg-cover bg-center h-[13dvh] md:h-40 w-full grid place-content-center'> 
        <h1 className="text-center text-base text-slate-200 md:font-semibold pb-2">{title}</h1>
        <div className="text-center font-semibold text-sm text-slate-100">
          <Link href='/'> Home </Link> /
          <Link href='/collection/shoes'> Collections </Link> /
          <Link href='/collection/shoes'> Shoe </Link>
       </div>
      </section>
      </>
  )
}

export default SubHero