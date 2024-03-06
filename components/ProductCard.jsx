import { getDiscountedPricePercentage } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({data : {attributes: p,id} }) => {
  return (
    <Link href={`/product/${p.slug}`}
    className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'
    >
   {/* <img className='w-full' src="/product-1.webp" alt="Product Image" /> this image tag is only for frontend now we will store the data from backend i.e. Strapi */}
   <Image
   width={500}
   height={500}
   src={p.thumbnail.data.attributes.url}
   alt={p.className}
   />
   <div className='p-4 text-black/[0.9]'>
    <h2 className='text-lg font-medium'>{p.name}</h2>
    <div className='flex items-center text-black/[0.5]'>
      <p className='mr-2 text-lg font-semibold'>
        &#8377;{p.price}
        {/* &#8377; denotes rupee symbol */}
      </p>

      {p.original_price && (
        <>
        <p className='text-base font-medium line-through'>
        &#8377;{p.original_price}
 </p>
 <p className='ml-auto text-base font-medium text-green-500'>
      {getDiscountedPricePercentage(
        p.original_price,
        p.price
      )}
    % off
      </p>
      </>
      )}
    </div>
    </div>

    {/* <p className='mr-2 text-lg font-semibold '>$20.00</p>
    <p className='text-base font-medium line-through'>$25.00</p>
    <p className='ml-auto text-base font-medium text-green-500'>20% off</p>
    line through means line will cut from between */}

  
   </Link>
  )
}

export default ProductCard