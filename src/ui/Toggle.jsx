import React from 'react'

export const Toggle = ({tab , setTab,select , setSelect}) => {
  console.log(tab)
  return (
    <div className=''>
        <div className="tabs tabs-box justify-center gap-2 bg-transparent border-none">
  <input type="radio" onClick={()=> setTab('Products')} name="my_tabs_1" className={`tab w-40 rounded-xl  ${tab === 'Products' ? 'bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white'  : 'bg-gray-100 text-gray-600'} tab rounded-4xl w-40`} aria-label="Products" defaultChecked />
  <input type="radio" onClick={()=> setTab('Cart')} name="my_tabs_1" className={`tab w-40 rounded-xl  ${tab === 'Cart' ? 'bg-gradient-to-r  from-[#4f39f6] to-[#9514fa] text-white'  : 'bg-gray-100 rounded-4xl text-gray-600'} tab w-40`} aria-label={`Cart (${select.length})`} />
</div>
    </div>
  )
}
