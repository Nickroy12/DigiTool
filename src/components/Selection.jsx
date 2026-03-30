import React from 'react'

export const Selection = ({select , setSelect}) => {
    if(select.length == 0 ){
        return 
    }
  return (
    <div className='space-y-4'>
        {select.map(el =>{
            return <div className='flex justify-between bg-gray-100 p-3 rounded-3xl shadow-md'>
            <div className='flex gap-2'>
                <img src={el.icon} className='object-contain' alt={el.title} />
                <div>
                    <h2 className='text-xl font-semibold '>{el.title}</h2>
                    <h2 className='font-semibold'>{el.price}</h2>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <span className='bg-red-600/30 px-3 '>Remove</span>
            </div>
            </div>
        })}
    </div>
  )
}
