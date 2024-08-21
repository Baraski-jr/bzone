'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const SubHero = () => {

  const pathname = usePathname()
  console.log(pathname)
    return (
      <section className='bg-subHero-bg bg-cover bg-center h-24 md:h-40 w-full grid place-content-center'> 
        <h1 className="text-center text-base text-slate-300 md:font-semibold pb-2">Products</h1>
        <h3 className="text-center font-semibold text-sm text-slate-100"> Home / Collections / Shoes </h3>
      </section>
  )
}

export default SubHero