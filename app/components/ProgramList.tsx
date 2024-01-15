import React from 'react'
import ProgramListCard from './ProgramListCard'
import { ProgramType } from '@/sanity/lib/queries'

const ProgramList = ({programs}:{programs:ProgramType[]}) => {
  return (
    <div className='flex w-full flex-col gap-10'>
      {
        programs.map(program=>(
          <ProgramListCard key={program._id} program={program} />
        ))
      }
    </div>
  )
}

export default ProgramList