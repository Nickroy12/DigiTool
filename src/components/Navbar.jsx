import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

export const Navbar = () => {
  return (
    <div className='shadow-sm'>
      <div className='w-10/12 m-auto'>
        <div className='flex justify-between items-center p-5'>
      
          <div>
            <h2 className='text-3xl font-bold text-[#4f39f6]'>DigiTool</h2>
          </div>

          
          <ul className="hidden md:flex gap-5">
            <li>Products</li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>


          <div className='flex items-center gap-4'>
            <div className='relative'>
              <CiShoppingCart className='text-2xl' />
              <span className='absolute -top-2 -right-2 text-xs px-1 rounded-full text-white bg-red-600'>
                0
              </span>
            </div>

            <h2 className='cursor-pointer'>Login</h2>

            <button className="rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-4 py-2">
              GET START
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}