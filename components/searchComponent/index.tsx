'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const SearchComponent = () => {

    const router = useRouter();
    
    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if(name) { router.push(`/collection/shoes/?name=${name}`) }
    }
    return (
        <form
            className='bg-slate-200 space-x-1 rounded-md pr-2 flex '
            onSubmit={handleSearch}>
            <input
                className='bg-transparent text-white placeholder:text-slate-900 outline-none  px-2 py-2 '
                type="text"
                name='name'
                placeholder='Search' /> 
            <button type='submit'>Q</button>
      </form>
  )
}

export default SearchComponent