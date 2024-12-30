'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface FilterComponentProps {
  onFilter: (filterVisible: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
    onFilter(value);
  };

    return (
      <div className="">
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
      </div>
  )
}

export default FilterComponent