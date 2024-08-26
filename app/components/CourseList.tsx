import React from 'react'
import CourseCard from './CourseCard'
import CourseListContainer from './CourseListContainer'
import { CategoryType } from '@/sanity/lib/queries'

const CourseList = ({categories,lang}:{categories:CategoryType[],lang:string}) => {
  return (
    <div className='flex w-full flex-col'>
      {
        categories.map(category=>(
          <CourseListContainer key={category._id} category={category} lang={lang} />
        ))
      }
    </div>
  )
}

export default CourseList