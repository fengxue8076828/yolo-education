import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { getFeatures } from '@/sanity/lib/queries';
import { FaStar } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

import { FiAward } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

export const revalidate = 60


const Feathers = async({lang}:{lang:string}) => {
    const features = await getFeatures()
  return (
    <div className='flex gap-3 items-center justify-around px-2 py-5 bg-gray-color md:py-8'>
        {
            features.map((feature,index)=>(
                <div key={feature._id} className='flex gap-2 items-start flex-col-reverse lg:flex-row lg:items-center lg:gap-5'>
                    <div>
                        <h3 className='text-sm font-bold lg:text-xl'>{feature.title.find((item)=>item._key===lang)?.value}</h3>
                        <p className='text-xs mt-1 md:text-sm'>{feature.content.find((item)=>item._key===lang)?.value}</p>
                    </div>
                    {
                        index == 0?<FiAward className='text-2xl md:text-4xl text-golden' />:index == 1?<LuTrophy className='text-2xl md:text-4xl text-golden' />:<FaRegStar className='text-2xl md:text-4xl text-golden' />
                    }
                    
                </div>                
            ))
        }
    </div>
  )
}

export default Feathers