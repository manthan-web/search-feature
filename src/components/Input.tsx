"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

const SearchProductsInput = async () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    
    const handleSearch = (value: string) => {

        const params = new URLSearchParams(searchParams)

       
    if (value) {
        params.set('query', value)
      } else {
        params.delete('query')
      }

        router.replace(`${pathname}?${params.toString()}`)

    }
    



  return (
    <>
        <Input
        className='my-8'
        onChange={(e) => handleSearch(e.target.value)} 
        placeholder='Search Products...' 
        defaultValue={searchParams.get('query')?.toString()}
        />
    </>
  )
}

export default SearchProductsInput