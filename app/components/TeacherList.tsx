import React from 'react'
import { TeacherCategoryType } from '@/sanity/lib/queries'
import TeacherListContainer from './TeacherListContainer'

const TeacherList = ({categories}:{categories:TeacherCategoryType[]}) => {
  return (
    <div className='flex w-full flex-col gap-10 bg-white p-10'>
      {
        categories.map(category=>(
          <TeacherListContainer key={category._id} category={category} />
        ))
      }
    </div>
  )
}

export default TeacherList