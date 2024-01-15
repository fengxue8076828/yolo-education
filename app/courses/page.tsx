import React from 'react'
import ListHeader from '../components/ListHeader'
import CourseList from '../components/CourseList'
import CourseListContainer from '../components/CourseListContainer'
import Search from '../components/Search'
import Tagbox from '../components/Tagbox'
import { getCategories } from '@/sanity/lib/queries'


const Courses = async() => {
  const categories = await getCategories()
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text="OUR COURSES" />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox />
            <CourseList categories={categories} />
          </div>           
          <Search />
        </div>
    </div>
  )
}

export default Courses