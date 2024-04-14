import React from 'react'
import ListHeader from '../../../components/ListHeader'
import Search from '../../../components/Search'
import Tagbox from '../../../components/Tagbox'
import { getTeachersByName } from '@/sanity/lib/queries'
import TeacherCard from '@/app/components/TeacherCard'


const TeachersQuery = async({params}:{params:{keyword:string,index:string}}) => {
  const teachers = await getTeachersByName(params.keyword)
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text="TANÁR" />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox index={params.index} type='teacher' />
            <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 py-10 md:px-10 mt-7 md:mt-10 bg-white'>
                {teachers.map(teacher=>(
                <TeacherCard key={teacher._id} teacher={teacher} />
                ))}
            </div>
          </div>           
          <Search type='teacher' />
        </div>
    </div>
  )
}

export default TeachersQuery