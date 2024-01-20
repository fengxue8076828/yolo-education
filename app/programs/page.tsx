import React from 'react'
import ListHeader from '../components/ListHeader'
import Tagbox from '../components/Tagbox'
import ProgramList from '../components/ProgramList'
import Search from '../components/Search'
import { getPrograms } from '@/sanity/lib/queries'

const Programs = async() => {
  const programs = await getPrograms()
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
    <ListHeader text="OUR PROGRAMS" />
    <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
      <div className='w-full lg:w-[80%]'>
        <Tagbox index='0' />
        <ProgramList programs={programs} />
      </div>           
      <Search />
    </div>
</div>
  )
}

export default Programs