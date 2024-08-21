import Image from 'next/image'
import React from 'react'

const FilterComponent = () => {
    return (
      <div className="flex justify-between">
        {/* Filter */}
        <button className="flex items-center gap-2 border-2 px-4 py-2 text-base uppercase hover:border-slate-700 transition-all duration-300">
          <Image className='size-4' src="/icons/filter-icon.png" alt="" />
          Filter
        </button>
        <select name="" id="" className='space-y-2 border-2 px-3 py-2 text-base uppercase hover:border-slate-700 transition-all duration-300'>
          <option value="Feature">Feature</option>
          <option value="Best selling">Best selling</option>
          <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
          <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
          <option value="Price, low to high">Price, low to high</option>
          <option value="Price, high to low">Price, high to low</option>
        </select>
      </div>
  )
}

export default FilterComponent