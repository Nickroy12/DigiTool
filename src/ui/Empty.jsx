import React from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md'

export const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[15rem] p-8  rounded-xl shadow-md">
      <MdRemoveShoppingCart className="text-6xl text-gray-400 mb-4" />
      <h1 className="text-3xl font-semibold text-gray-700 mb-2">Your Cart is Empty</h1>
      <p className="text-gray-500 text-center">
        Looks like you haven't added anything yet. Start shopping to fill your cart!
      </p>
    
    </div>
  )
}