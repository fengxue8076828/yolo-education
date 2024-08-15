import React from 'react'
import TeacherCard from './TeacherCard'
import { ExamCategoryType } from '@/sanity/lib/queries'
import { getExamsByCategory } from '@/sanity/lib/queries'
import ExamCard from './ExamCard'

export const revalidate = 60

const ExamListContainer = async({category}:{category:ExamCategoryType}) => {
  const exams = await getExamsByCategory(category._id)
  return (
    <div id={category.name} className='mb-16'>
      <div className='flex flex-col gap-3 items-center md:items-start'>
        <h2 className='text-xl md:text-3xl'>{category.name}</h2>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='w-full flex flex-col px-10 md:px-0 mt-7 md:mt-10'>
        {exams.map(exam=>(
          <ExamCard key={exam._id} exam={exam} />
        ))}
      </div>
      
    </div>
  )
}

export default ExamListContainer