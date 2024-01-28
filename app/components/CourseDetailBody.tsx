"use client"
import React,{useState} from 'react'
import { CourseType,ChapterType } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import CourseDetailTagsContainer from './CourseDetailTagsContainer'
import RegisterForm from './RegisterForm'
import PriceBox from './PriceBox'

const CourseDetailBody = ({course,chapters}:{course:CourseType,chapters:ChapterType[]}) => {
    const [selectedDate,setSelectedDate] = useState("")
  return (
    <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
    <div className='w-full lg:w-[80%] bg-white p-5 md:p-16 rounded flex flex-col '>
        <div className='w-full h-[450px] mb-10 relative'>
          <Image className='object-cover' src={urlFor(course.image).url()} alt='course' layout='fill' />
        </div>
        
        <CourseDetailTagsContainer course={course} chapters={chapters} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <div>

        <div id='course-register' className='flex flex-col gap-1  my-16'>
          <h1 className='text-2xl font-extrabold mb-3'>Register this course</h1>
          <span className='w-[50px] h-[2px] bg-ternary-color'></span>
        </div>
          <RegisterForm selectedDate={selectedDate} type='course' activityName={course.name} />
      </div>
    </div>           
    <PriceBox price={course.price} />
</div>
  )
}

export default CourseDetailBody