import React from 'react'
import ListHeader from '../../../components/ListHeader'
import CourseList from '../../../components/CourseList'
import CourseListContainer from '../../../components/CourseListContainer'
import Search from '../../../components/Search'
import Tagbox from '../../../components/Tagbox'
import { getCoursesByName } from '@/sanity/lib/queries'
import CourseCard from '@/app/components/CourseCard'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'


const CoursesQuery = async({params,searchParams}:{params:{keyword:string,index:string},searchParams:{lang?:string}}) => {
  const language = searchParams.lang?searchParams.lang:"hu"
  const decodedKeyword = decodeURIComponent(params.keyword);
  const courses = await getCoursesByName(decodedKeyword,language)
  
  return (
    <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text={language==="hu"?"TANFOLYAMAINK":language==="en"?"Our Courses":"我们的课程"} />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox index={params.index} type='course' lang={language} />
            <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 md:px-0 mt-7 md:mt-10'>
                {courses.map(course=>(
                <CourseCard key={course._id} course={course} lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
                ))}
            </div>
          </div>           
          <Search type='course' lang={language} />
        </div>
    </div>
    <Footer lang={language} />
    </>
  )
}

export default CoursesQuery