import React, { use } from 'react'
import { StepCard } from '../ui/StepCard'

export const Step = ({ stepPromise }) => {
  const steps = use(stepPromise)

  return (
  <div className='p-10 bg-zinc-200'>
    <h1 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h1>
        <p className='text-center text-zinc-600'>Start using premium digital tools in minutes, not hours.</p> 
      <div className="grid   w-10/12 m-auto md:grid-cols-3 gap-6 p-6">
      
      {steps.map(step => (
        <StepCard step={step}/>
      ))}
    </div>
  </div>
  )
}