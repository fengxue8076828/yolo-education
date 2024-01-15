"use client"
import React from 'react'
import Image from 'next/image'
import course from '@/public/course.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import Button from './Button';
import teacher from '@/public/teacher.png'
import { CourseType } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/client';
import { useRouter } from 'next/navigation';
const CourseCard = ({course}:{course:CourseType}) => {
  const router = useRouter()
  const navigateToCourse = (id:string) => {
    router.push(`/courses/${id}`)
  }
  return (
    <div className='min-w-64 rounded bg-white hover:shadow-xl hover:scale-105 hover:transition cursor-pointer' onClick={()=>navigateToCourse(course._id)}>
        <Image className='w-full' src={urlFor(course.image).url()} alt='course' width={100} height={60} />
        <div className='px-5 py-8'>
            <h4 className='font-bold'>{course.name}</h4>
            <p className='font-thin'>{course.title}</p>
        </div>
        <div className='px-5 pt-8 pb-3 flex justify-between items-center'>
            <div className='flex justify-between items-center gap-1'>
                <FaRegCalendarAlt />
                <p>{course.startDate.toString()}</p>
            </div>
            <div className='flex items-center gap-3 rounded-full pr-5 bg-ternary-color overflow-hidden'>
              <div className='rounded-full overflow-hidden'>
                <Image src={urlFor(course.teacher.image).url()} width={40} height={40} alt='teacher' /> 
              </div>
              <h3 className='text-white'>{course.teacher.name}</h3>
            </div>

        </div>
    </div>
  )
}

export default CourseCard