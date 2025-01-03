import Link from 'next/link'
import React from 'react'

const CustomNav = ({title}: {title?: string}) => {
  return (
      <div className='font-mono font-semibold text-sm text-slate-600 pb-3'>
          <Link href={'/'}>Home</Link> /
          <Link href={'/products/shoes'}> Shoes</Link> 
          { title &&  <span className="pl-2"> / { title }</span> }
      </div>
  )
}

export default CustomNav