import React from 'react'
import CourseCard from './CourseCard'
import { CategoryType } from '@/sanity/lib/queries'
import { getCoursesByCategory } from '@/sanity/lib/queries'

const CourseListContainer = async({category}:{category:CategoryType}) => {
  const courses = await getCoursesByCategory(category._id)
  return (
    <div className='mb-16'>
      <div className='flex flex-col gap-3 items-center md:items-start'>
        <h2 className='text-xl md:text-3xl'>{category.name}</h2>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 md:px-0 mt-7 md:mt-10'>
        {courses.map(course=>(
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
      
    </div>
  )
}

export default CourseListContainer