import Image from 'next/image'
import React from 'react'

const FilterComponent = () => {
    return (
      <div className="flex justify-between">
        {/* Filter */}
        <button className="flex items-center gap-2 border-2 px-4 py-2 text-base uppercase hover:border-slate-700 transition-all duration-300">
          <Image width={50} height={50} className='size-4' src="/icons/filter-icon.png" alt="" />
          Filter
        </button>
        <div className="">
          <select name="type" id="" className='space-y-2 border-2 px-3 py-2 text-base uppercase hover:border-slate-700 transition-all duration-300'>
            <option >Sort By</option>
            <option value="">Price (low to high)</option>
            <option value="">Price (high to low)</option>
            <option value="">Newest</option>
            <option value="">Oldest</option>
          </select>
          </div>
      </div>
  )
}

export default FilterComponent