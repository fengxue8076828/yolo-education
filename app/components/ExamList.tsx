import React from 'react'
import { ExamCategoryType } from '@/sanity/lib/queries'
import ExamListContainer from './ExamListContainer'

const ExamList = ({categories,lang}:{categories:ExamCategoryType[],lang:string}) => {
  return (
    <div className='flex w-full flex-col gap-10 bg-white px-3 md:px-10 py-10'>
      {
        categories.map(category=>(
          <ExamListContainer key={category._id} category={category} lang={lang} />
        ))
      }
    </div>
  )
}

export default ExamList