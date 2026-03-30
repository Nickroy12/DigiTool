import React, { use, useState } from 'react'
import { Card } from '../ui/Card'
import { Toggle } from '../ui/Toggle'
import { Selection } from './Selection'

export const Tools = ({dataPromise , select , setSelect}) => {
    const [tab , setTab] = useState('Products')
    const data = use(dataPromise)
  return (
    <div className='w-10/12 m-auto p-7 space-y-6 '>
        <h1 className='text-6xl font-bold text-center'>Premium Digital Tools</h1>
        <p className='text-center text-zinc-600'>Choose from our curated collection of premium digital products designed
 <br />to boost your productivity and creativity.</p>
           <Toggle tab={tab} setTab={setTab} select={select} setSelect={setSelect}/>
      { tab === 'Products' ?  <div className='grid md:grid-cols-3 gap-8'>
            {data.map(tool => {
        return <Card tool={tool} select={select} setSelect={setSelect} />
    })}
        </div> : <Selection select={select} setSelect={setSelect}/>}
    </div>
  )
}
