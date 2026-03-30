import React from 'react'
import banner from "../assets/banner.png"
import { CiPlay1 } from 'react-icons/ci'

export const Hero = () => {
  return (
    <div>
        <div className="w-10/12 m-auto">
           <div className="md:flex justify-between ">
            <div className="text p-4 space-y-4 flex flex-col justify-center items-start">
                <button className="  bg-[#4f39f6]/20  p-2 rounded-4xl text-[#4f39f6] font-semibold landing-snug"> <span className='status bg-[#4f39f6]'></span> New: AI-Powered Tools Available</button>
                <h1 className='text-6xl font-bold'>Supercharge Your Digital Workflow</h1>
                <p className='leading-[28px] text-zinc-500 font-semibold'>Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.
                Explore Products</p>
                <div className='flex gap-5'>
                      <button className="rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white px-4 py-2">
              Explore Products
            </button>
                      <button className="rounded-3xl btn btn-outline  btn-primary  px-4 py-2">
              <CiPlay1 />Watch Demo
            </button>
                </div>

            </div>
            <div className='flex justify-center p-4'>
                <img src={banner} alt="" />
            </div>

           </div>
        </div>
    </div>
  )
}
