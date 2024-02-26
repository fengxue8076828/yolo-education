import React from 'react'
import ListHeader from '../../../components/ListHeader'
import Search from '../../../components/Search'
import Tagbox from '../../../components/Tagbox'
import { getProgramsByName } from '@/sanity/lib/queries'
import ProgramCard from '@/app/components/ProgramCard'


const CoursesQuery = async({params}:{params:{keyword:string,index:string}}) => {
  const programs = await getProgramsByName(params.keyword)
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text="OUR COURSES" />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox index={params.index} type='program' />
            <div className='flex w-full flex-col gap-10 mt-7 bg-white p-10'>
                {programs.map(program=>(
                <ProgramCard key={program._id} program={program} />
                ))}
            </div>
          </div>           
          <Search type='program' />
        </div>
    </div>
  )
}

export default CoursesQuery