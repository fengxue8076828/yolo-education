import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { getFeatures } from '@/sanity/lib/queries';
import { FaStar } from "react-icons/fa";

export const revalidate = 60


const Feathers = async() => {
    const features = await getFeatures()
  return (
    <div className='flex gap-3 items-center justify-around px-2 py-5 bg-gray-color md:py-8'>
        {
            features.map((feature,index)=>(
                <div key={feature._id} className='flex gap-2 items-start flex-col-reverse lg:flex-row lg:items-center lg:gap-5'>
                    <div>
                        <h3 className='text-sm font-bold lg:text-xl'>{feature.title}</h3>
                        <p className='text-xs mt-1 md:text-sm'>{feature.content}</p>
                    </div>
                    <FaStar className='text-2xl md:text-4xl text-golden' />
                </div>                
            ))
        }
    </div>
  )
}

export default Feathers