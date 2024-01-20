import React from 'react'
import TestimonialCard from './TestimonialCard'
import { getTestimonials } from '@/sanity/lib/queries'

const Testimonials = async() => {
  const testimonials = await getTestimonials()
  return (
    <div id='testimonials' className='py-8 px-5 flex flex-col items-center md:px-10 md:py-20'>
      <div className='flex justify-center w-full items-center'>
        <div className='flex flex-col gap-1 md:gap-5 items-center'>
            <h1 className='text-2xl md:text-4xl font-bold mt-1'>What do our <span className='text-ternary-color'>students</span> say</h1>
            <span className='w-[50px] h-[2px] md:w-[70px] md:h-[5px] bg-ternary-color'></span>
        </div>
      </div>
      <div className='w-full mt-10 md:mt-20 flex justify-between flex-wrap flex-1 gap-10'>
        {
          testimonials.map(testimonial=>(
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))
        }
      </div>     
  </div>
  )
}

export default Testimonials