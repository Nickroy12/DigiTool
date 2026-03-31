import React from 'react'
import { Empty } from '../ui/Empty'
import { toast } from 'react-toastify'

export const Selection = ({select , setSelect}) => {
    const Total = select.reduce((sum , item)=> sum + item.price , 0)
    if(select.length == 0 ){
        return <Empty/>
    }
    const allDeleteHandler = ()=>{
        setSelect([])
        toast.error(`All Item has removed`)
    }
    const deleteHandler =(id)=>{
        const filterTool = select.filter(item => item.id !== id )
        toast.error(`Selected Item has removed`)
        setSelect(filterTool)
    }
  return (
    <div className='space-y-4'>
        {select.map(el =>{
            return <div className='flex justify-between bg-gray-100 p-5 rounded-3xl shadow-md'>
            <div className='flex gap-2'>
                <img src={el.icon} className='object-contain' alt={el.title} />
                <div>
                    <h2 className=' font-semibold '>{el.title}</h2>
                    <h2 className='font-semibold'>${el.price}</h2>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <span onClick={() => deleteHandler(el.id)} className='bg-red-600/30 px-3 rounded-md btn '>Remove</span>
            </div>
            </div>
        })}
        <div className='bg-black rounded-4xl p-2 flex text-white justify-between'>
            <h3>Total</h3>
            <h3>${Total}</h3>
        </div>
        <button onClick={allDeleteHandler} className='btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl w-full'>Process To Checkout</button>
    </div>
  )
}
