import React from 'react'
import ListHeader from '../../../components/ListHeader'
import CourseList from '../../../components/CourseList'
import CourseListContainer from '../../../components/CourseListContainer'
import Search from '../../../components/Search'
import Tagbox from '../../../components/Tagbox'
import { getCoursesByName } from '@/sanity/lib/queries'
import CourseCard from '@/app/components/CourseCard'


const CoursesQuery = async({params}:{params:{keyword:string,index:string}}) => {
  const courses = await getCoursesByName(params.keyword)
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text="OUR COURSES" />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox index={params.index} />
            <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 md:px-0 mt-7 md:mt-10'>
                {courses.map(course=>(
                <CourseCard key={course._id} course={course} />
                ))}
            </div>
          </div>           
          <Search />
        </div>
    </div>
  )
}

export default CoursesQuery