import React from 'react'
import { ExamCategoryType } from '@/sanity/lib/queries'
import ExamListContainer from './ExamListContainer'

const ExamList = ({categories}:{categories:ExamCategoryType[]}) => {
  return (
    <div className='flex w-full flex-col gap-10 bg-white p-10'>
      {
        categories.map(category=>(
          <ExamListContainer key={category._id} category={category} />
        ))
      }
    </div>
  )
}

export default ExamList