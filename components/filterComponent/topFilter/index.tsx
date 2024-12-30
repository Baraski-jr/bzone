'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface FilterComponentProps {
  onFilter: (filterVisible: string) => void;
  onSort: (sortOption: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter, onSort }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [category, setCategory] = useState('');



  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOption(value);
    onSort(value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
    onFilter(value);
  };

    return (
      <div className="flex justify-between">
        {/* Filter */}

        {/* Filter */}
        <select
          name="category"
          id="category"
          className="space-y-2 border-2 px-3 py-2 text-base uppercase hover:border-slate-700 transition-all duration-300"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
        {/* Sorting */}
        <div className="">
          <select 
            value={sortOption}
            onChange={handleSortChange}
            name="type" 
            id="" 
            className='space-y-2 border-2 px-3 py-2 text-base uppercase hover:border-slate-700 transition-all duration-300'
            >
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