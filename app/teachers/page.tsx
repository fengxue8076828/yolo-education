import React from 'react'
import { getTeacherCategories } from '@/sanity/lib/queries'
import ListHeader from '../components/ListHeader'
import Tagbox from '../components/Tagbox'
import Search from '../components/Search'
import TeacherList from '../components/TeacherList'

export const revalidate = 60

const Teachers = async() => {
    const categories = await getTeacherCategories()
    return (
      <div className='bg-shallow-blue min-h-[100vh]'>
      <ListHeader text="TANÁR" />
      <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%]'>
          <Tagbox index='-1' type='teacher' />
          <TeacherList categories={categories} />
        </div>           
        <Search type='teacher' />
      </div>
  </div>
    )
}

export default Teachers