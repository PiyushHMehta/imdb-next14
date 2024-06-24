'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Searchbox() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    function handleSubmit(ev) {
        ev.preventDefault()
        router.push(`/search/${search}`)    
    }

    return (
        <form onSubmit={handleSubmit} 
        className='flex justify-between px-5 max-w-6xl mx-auto'>
            <input type="text" placeholder='Search keyword...' 
            className='w-full h-14 rounded-md placeholder:gray-500 outline-none bg-transparent flex-1' 
            value={search} onChange={ev => setSearch(ev.target.value)} />
            <button type='submit' className='text-amber-600 disabled:text-gray-400' disabled={search === ''}>Search</button>
        </form>
    )
}
