import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const ProductSkeleton = async () => {
  return (
     <div className='flex flex-col gap-2'>
        <Skeleton className='w-[45rem] rounded-lg h-[45rem]' />
     </div>
  )
}

export default ProductSkeleton