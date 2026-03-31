import React from 'react'
import { CiPlay1 } from 'react-icons/ci'

export const Join = () => {
  return (
    <div className='bg-gradient-to-r from-[#4f39f6] p-8 to-[#9514fa] text-white  '>
        <div className="w-10/12 m-auto">
          <div className="flex flex-col md:justify-center  items-center space-y-5">
             <h1 className="text-5xl font-semibold  mb-2">Ready to Transform Your Workflow?</h1>
             <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div className='flex gap-5 '>
                            <button className="rounded-3xl bg-white px-6 py-2   text-black ">
  Explore Products
</button>
                              <button className="rounded-3xl btn btn-outline    px-4 py-2">
                      <CiPlay1 />Watch Demo
                    </button>
                        </div>
                        <p>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
    </div>
  )
}
