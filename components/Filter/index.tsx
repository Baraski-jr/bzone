"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Filter = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const params = new URLSearchParams(searchParams)
    params.set(name, value)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="mt-12 flex flex-wrap gap-6 w-[85%] mx-auto">
      {/* <div className="flex gap-6 jc flex-wrap"> */}
      {/* <div className="flex gap-x-6"> */}
      <input
        type="text"
        name="min"
        placeholder="min price"
        className="text-xs rounded-sm pl-2 py-1 w-24 ring-1 ring-gray-400"
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="max"
        placeholder="max price"
        className="text-xs rounded-sm pl-2 py-1 w-24 ring-1 ring-gray-400"
        onChange={handleFilterChange}
      />
      {/* </div> */}
      {/* <div className="flex gap-x-6"> */}
      {/* TODO: Filter Categories */}
      <select
        name="category"
        className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
        onChange={handleFilterChange}
        title="Category"
      >
        <option value="all-products">Category</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kid</option>
      </select>
      <select
        name="all-filters"
        id="all-filters"
        title="All Filters"
        className="py-2 px-4 rounded-sm text-xs font-medium bg-[#EBEDED]"
        aria-label="All Filters"
      >
        <option>All Filters</option>
      </select>
      {/* </div> */}
      {/* </div> */}
      {/* <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-sm text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div> */}
    </div>
  )
}

export default Filter
