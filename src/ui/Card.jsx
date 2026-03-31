import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'


export const Card = ({tool,select , setSelect}) => {
  const isToogle = select.some(item => item.id === tool.id)
  
  const buttonHandler = ()=>{
   
    toast.success(`${tool.title} tool has purchase`)
    setSelect([...select , tool])
  }
  return (
    <div>
<div className="card  bg-base-100 min-h-[400px] shadow-sm">
  <div className="card-body">
  
    <div className="flex justify-between">
       <img src={tool.icon} alt={tool.title} className='object-contain' />
      <span className={` ${tool.badge === 'Popular'? 'bg-amber-400/30 text-amber-700': tool.badge  === 'New'? 'bg-blue-600/30 text-blue-700' : 'bg-green-400/30 text-green-700'}  p-2 rounded-4xl`}>{tool.badge}</span>
    </div>

      <h2 className="text-3xl font-bold">{tool.title}</h2>
      <h2 className=" font-light text-zinc-500">{tool.description}</h2>
       <h2 className="text-xl font-bold">${tool.price}/<span className='font-light to-zinc-500'>{tool.billing_cycle}</span></h2>

      
 
    <ul className="mt-6 flex flex-col gap-2 text-xs">
         {tool.features.map(el =>{
            return <div className='flex items-center gap-4 '><FaCheck className='text-green-300' /><li>{el}</li></div>
         })}
    </ul>
    <div className="mt-auto">
      <button onClick={buttonHandler} className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white btn-block" disabled={isToogle } >{isToogle  ? 'Subscribed': 'Subscribe Now'}</button>
    </div>
  </div>
</div>
    </div>
  )
}
