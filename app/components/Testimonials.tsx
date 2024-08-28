"use client"

import React,{useState,useEffect} from 'react'
import TestimonialCard from './TestimonialCard'
import { getTestimonials } from '@/sanity/lib/queries'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper'
import 'swiper/css';
import { TestimonialType } from '@/sanity/lib/queries';

const Testimonials = ({lang}:{lang:string}) => {
  
  const [testimonialChunks,setTestimonialChunks] = useState<TestimonialType[][]|null>(null)
  const [swiper,setSwiper] = useState<SwiperClass | null>(null)
  useEffect(()=>{
    const fetchTestimonials = async() => {
      const testimonials = await getTestimonials()
      let chunks:TestimonialType[][] = []
      if(testimonials && testimonials.length > 0){
        for(let i=0;i<testimonials.length;i+=2){
          chunks.push(testimonials.slice(i,i+2))
        }
      }
      setTestimonialChunks(chunks)
    }
    fetchTestimonials()
  },[])
  return (
    <div id='testimonials' className='py-8 px-5 flex flex-col items-center md:px-10 sm:py-20 md:py-25'>
      
      <div className='flex w-full justify-between'>
        {/* <div className='flex gap-3'>
          <BsArrowLeftSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=> swiper?.slidePrev()} />
          <BsArrowRightSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=>swiper?.slideNext()} />
        </div> */}
        <div className='flex flex-col gap-1 md:gap-5 w-full items-end'>
            <h1 className='text-2xl md:text-4xl font-bold mt-1'>
            {lang==="hu"?"Mit ":lang==="en"?"What ":"我们的"}
              <span className='text-ternary-color'>{lang==="hu"?"mondanak ":lang==="en"?"Our students  ":"学生"}</span>{lang==="hu"?"diákjaink":lang==="en"?"say":"见证"}
              </h1>
            <span className='w-[50px] h-[2px] md:w-[70px] md:h-[5px] bg-ternary-color'></span>
        </div>
      </div>

      <div className='w-full mt-10 sm:px-5 md:px-20 md:mt-20 z-10 flex'>
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            breakpoints={{
                320: {
                slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                slidesPerView: 1,
                },
                // when window width is >= 1024px
                1024: {
                slidesPerView: 2,
                },
            }}
        >
        {
          testimonialChunks && testimonialChunks.map((testimonialChunk,index)=>{
            return (
              <SwiperSlide key={index}>
                <div className='flex flex-col gap-5'>
                  {
                    testimonialChunk.map(testimonial=>(
                      <TestimonialCard key={testimonial._id} testimonial={testimonial} lang={lang} />
                    ))
                  }
                </div>
              </SwiperSlide>
            )
            
          })
        }
        </Swiper> 
      </div>
      <div className='flex justify-center w-full items-center sm:mt-10 md:mt-5 lg:mt-10'>
        <div className='flex gap-3'>
          <BsArrowLeftSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=> swiper?.slidePrev()} />
          <BsArrowRightSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=>swiper?.slideNext()} />
        </div>
      </div>
  </div>
  )
}

export default Testimonials