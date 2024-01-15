"use client"
import React from 'react'
import teacher1 from '@/public/teacher1.png'
import Image from 'next/image'
import {motion} from "framer-motion"

const TestimonialCard = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
     className='max-w-full lg:max-w-less-half'>
        <h3 className='text-xl font-extrabold'>Martin</h3>
        <div className='w-full h-[40px] relative'>
            <div className='absolute w-[30px] h-[40px] bg-middle-blue left-[70px] bottom-0'>
            </div>
            <div className='absolute w-[100px] h-[40px] bg-white skew-x-[45deg] left-[70px] bottom-0'>
            </div>
        </div>
        <div className='bg-middle-blue relative rounded-lg'>
            <div className='absolute top-[-50px] right-[30px] w-[80px] rounded-lg overflow-hidden outline outline-8 outline-white'>
                <Image src={teacher1} width={100} height={100} alt='testimonial' />
            </div>
            <p className='p-7 text-sm max-w-three-quarter'>Lorem ipsum dolor sit,amet,consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit,amet,consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut</p>
        </div>
    </motion.div>
  )
}

export default TestimonialCard