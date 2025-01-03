'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

interface FilterComponentProps {
  onFilter: (filterVisible: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const router = useRouter();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
    onFilter(value);
    if (value === 'all') {
      router.push('/products/shoes');
    } else {
      router.push(`/products/shoes?category=${value}`);
    }
  };

  return (
    <>
      {/* Filter */}
      <select
        name="category"
        id="category"
        className="space-y-2 border-2 px-3 py-2 text-base uppercase hover:border-slate-700 transition-all duration-300"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="all">All Categories</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kid</option>
      </select>
    </>
  )
}

export default FilterComponent