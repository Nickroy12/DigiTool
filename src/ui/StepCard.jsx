import React from 'react'

export const StepCard = ({step}) => {
  return (
    <div>
        <div className="card bg-white shadow-sm">
            <div className='flex justify-end p-4'>
              <div className='rounded-full bg-gradient-to-r w-5 text-center h-5 from-[#4f39f6] to-[#9514fa] text-white '>{step.id}</div>
            </div>
  <div className="card-body items-center text-center">
    <img src={step.icon} alt="" />
    <h2 className="card-title">{step.title}</h2>
    <p className='text-zinc-500'>{step.description}</p>

  </div>
</div>
    </div>
  )
}
