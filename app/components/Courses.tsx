"use client"
import React,{useState,useEffect} from 'react'
import CourseCard from './CourseCard'
import Button from './Button'
import { getCoursesOnWindow } from '@/sanity/lib/queries'
import { useRouter } from 'next/navigation'
import { CourseType } from '@/sanity/lib/queries'
import {motion} from "framer-motion"
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Courses = ({lang}:{lang:string}) => {
  const [courses,setCourses] = useState<CourseType[] | null>(null)
  const [swiper,setSwiper] = useState<SwiperClass | null>(null)
  useEffect(()=>{
    const fetchCoursesOnWindow = async() => {
      const c = await getCoursesOnWindow()
      setCourses(c)
    }
    fetchCoursesOnWindow()
  },[])
  const router = useRouter()
  const navigateToCourses = () => {
    router.push("/courses")
  }
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
     id='courses' className='bg-shallow-blue py-8 px-3 flex flex-col items-center md:px-10 sm:py-20 md:py-25'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex flex-col gap-1 md:gap-5'>
          <h1 className='text-2xl md:text-4xl font-bold mt-1'>
          {lang==="hu"?"Tanfolya":lang==="en"?"Our ":"我们的"}
            <span className='text-ternary-color'>{lang==="hu"?"maink":lang==="en"?" Courses":"课程"}</span>
          </h1>
          <span className='w-[50px] h-[2px] md:w-[70px] md:h-[5px] bg-ternary-color'></span>
        </div>
        
        <Button text={lang==="hu"?"Az összes tanfolyam megtekintése":lang==="en"?"View all courses":"查看所有课程"} clickHandler={navigateToCourses} />
      </div>
          
        <div className='w-full mt-10 px-20 md:px-0 md:mt-20 z-10'>
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
            breakpoints={{
                320: {
                slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                slidesPerView: 3,
                },
                // when window width is >= 1024px
                1024: {
                slidesPerView: 5,
                },
            }}
          >
              {
                courses?.map(course=>(
                  <SwiperSlide key={course._id}>
                    <CourseCard key={course._id} course={course} lang={`${lang}`} />
                  </SwiperSlide>
                ))
              }
          </Swiper>
        </div>
        <div className='flex justify-center w-full items-center mt-10'>
                <div className='flex gap-3'>
                    <BsArrowLeftSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=> swiper?.slidePrev()} />
                    <BsArrowRightSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=>swiper?.slideNext()} />
                </div>
            </div>
    </motion.div>
    
  )
}

export default Courses