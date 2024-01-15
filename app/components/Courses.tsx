"use client"
import React,{useState,useEffect} from 'react'
import CourseCard from './CourseCard'
import Button from './Button'
import { getCoursesOnWindow } from '@/sanity/lib/queries'
import { useRouter } from 'next/navigation'
import { CourseType } from '@/sanity/lib/queries'
import {motion} from "framer-motion"

const Courses = () => {
  const [courses,setCourses] = useState<CourseType[] | null>(null)
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
     id='courses' className='bg-shallow-blue py-8 px-3 flex flex-col items-center md:px-10 md:py-20'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex flex-col gap-1 md:gap-5'>
          <h1 className='text-2xl md:text-4xl font-bold mt-1'>Our <span className='text-ternary-color'>Courses</span></h1>
          <span className='w-[50px] h-[2px] md:w-[70px] md:h-[5px] bg-ternary-color'></span>
        </div>
        
        <Button text='View All Courses' clickHandler={navigateToCourses} />
      </div>
          
        <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 md:px-0 mt-10 md:mt-20'>
          {
            courses?.map(course=>(
              <CourseCard key={course._id} course={course} />
            ))
          }
        </div>
    </motion.div>
    
  )
}

export default Courses