import React from 'react'
import ProgramListCard from './ProgramListCard'
import { ProgramType,ProgramCategoryType } from '@/sanity/lib/queries'
import { Category } from '@/sanity/schemas/Category'
import ProgramListContainer from './ProgramListContainer'

const ProgramList = ({categories}:{categories:ProgramCategoryType[]}) => {
  return (
    <div className='flex w-full flex-col gap-10 bg-white p-10'>
      {
        categories.map(category=>(
          <ProgramListContainer key={category._id} category={category} />
        ))
      }
    </div>
  )
}

export default ProgramList