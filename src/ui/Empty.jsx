import React from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md'

export const Empty = () => {
  return (
    <div className='flex flex-col min-h-60 justify-center items-center border-1' >
        <MdRemoveShoppingCart className='text-4xl font-bold' />
          <h1 className='text-4xl '>No Cart Found</h1>
    </div>
  )
}
