import React from 'react'
import Image from 'next/image'
import { findQueryProducts } from '@/drizzle/db'

const Product = async (
    { query } : { query: string }
) => {

    
    const filteredItems = await findQueryProducts(query)
    


    return (
        <>

        {filteredItems?.map((product) => (
            <div key={product.id} className="group bg-zinc-100 dark:bg-zinc-800 p-2 rounded-sm relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                    src={`${product.image}`}
                    width={100}
                    height={100}
                    alt={`${product.name} image`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className='text-sm dark:text-white text-gray-700'>
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm dark:text-white text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium dark:text-white text-gray-900">${product.price}</p>
            </div>
            </div>
        ))}
        </>
    
  )
}

export default Product