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
        type="number"
        name="min"
        placeholder="Min price"
        className="border-b-[1px] border-slate-500 hover:border-blue-300 focus-visible::border-blue-700 focus-visible::border-b-2 text-base w-2/5 max-w-24 sm:w-fit pb-1 pl-1 transition-all duration-150 ease-in-out"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="max"
        placeholder="Max price"
        className="border-b-[1px] border-slate-500 hover:border-blue-300 focus-visible::border-blue-700 focus-within:border-b-2 text-base w-2/5 max-w-24 sm:w-fit pb-1 pl-1 transition-all duration-150 ease-in-out"
        onChange={handleFilterChange}
      />
      {/* </div> */}
      {/* <div className="flex gap-x-6"> */}
      {/* TODO: Filter Categories */}
      <div className="relative w-full md:w-1/2 md:max-w-60">
        <select
          className="select select-filled "
          aria-label="Filled select"
          id="selectFilled"
          onChange={handleFilterChange}
          title="Category"
          name="category"
        >
          <option value="all-products">Category</option>
          <option value="men">Men' Shoe</option>
          <option value="women">Women' Shoe</option>
          <option value="kid">Kid' Shoe</option>
          <option value="watches">Watches</option>
          <option value="laptops">Laptops</option>
        </select>
        <span className="select-filled-focused"></span>
        {/* <label className="select-filled-label" htmlFor="selectFilled">
          Category
        </label> */}
      </div>
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
