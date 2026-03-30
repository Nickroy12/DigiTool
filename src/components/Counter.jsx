import React from 'react'

export const Counter = () => {
  return (
    <div className='bg-gradient-to-r from-[#4f39f6] p-8 to-[#9514fa] text-white'>
        <div className="w-10/12 m-auto">
          <div className="grid grid-cols-3">
            <div className="box border-r-2 border-white text-center">
                <h2 className='text-4xl font-bold'>50K +</h2>
                <h2 className=''>Active User</h2>
            </div>
            <div className="box border-r-2 border-white text-center">
                <h2 className='text-4xl font-bold'>200 +</h2>
                <h2 className=''>Premium Tools</h2>
            </div>
            <div className="box  text-center">
                <h2 className='text-4xl font-bold'>4.9</h2>
                <h2 className=''>Rating</h2>
            </div>
          </div>
        </div>
    </div>
  )
}
