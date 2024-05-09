import React from 'react'
import SearchProductsInput from '@/components/Input'
import Product from "@/components/product"
import { Suspense } from 'react'
import ProductSkeleton from '@/components/productsSkeleton'


const Products = async (

  {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
    };
  }
) => {
  
  const query = searchParams?.query || ''
  // console.log(query);
  

  return (


    <div className='min-h-screen w-full flex flex-col px-12 py-12'>
      <h1 className='text-4xl font-semibold'>Products</h1>


      <SearchProductsInput />


      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>

      <Suspense fallback={<ProductSkeleton />}>
        <Product query={query} />
      </Suspense>

      </div>
    
    </div>
  )
}

export default Products