import React from 'react'
import ProgramCard from './ProgramCard'
import { ProgramCategoryType } from '@/sanity/lib/queries'
import { getProgramsByCategory } from '@/sanity/lib/queries'

export const revalidate = 60

const ProgramListContainer = async({category}:{category:ProgramCategoryType}) => {
  const programs = await getProgramsByCategory(category._id)
  return (
    <div id={category.name} className='mb-16'>
      <div className='flex flex-col gap-3 items-center md:items-start'>
        <h2 className='text-xl md:text-3xl'>{category.name}</h2>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='flex w-full flex-col gap-10 mt-7'>
        {programs.map(program=>(
          <ProgramCard key={program._id} program={program} />
        ))}
      </div>
      
    </div>
  )
}

export default ProgramListContainer