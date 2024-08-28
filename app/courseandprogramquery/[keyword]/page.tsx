import React from 'react'
import ListHeader from '../../components/ListHeader'
import CourseList from '../../components/CourseList'
import CourseListContainer from '../../components/CourseListContainer'
import Search from '../../components/Search'
import { getCoursesByName } from '@/sanity/lib/queries'
import { getProgramsByName } from '@/sanity/lib/queries'
import CourseCard from '@/app/components/CourseCard'
import ProgramCard from '@/app/components/ProgramCard'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'


const CourseAndProgramQuery = async({params,searchParams}:{params:{keyword:string},searchParams:{lang?:string}}) => {
  const language = searchParams.lang?searchParams.lang:"hu"
  const decodedKeyword = decodeURIComponent(params.keyword);
  const courses = await getCoursesByName(decodedKeyword,language)
  const programs = await getProgramsByName(decodedKeyword,language)
  
  return (
    <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text={language==="hu"?"TANFOLYAMAINK és PROGRAMJAINK":language==="en"?"Courses and Programs":"课程和活动"} />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
            <div className='w-full lg:w-[80%]'>
                <div className='flex flex-col gap-3 items-center md:items-start'>
                    <h2 className='text-xl md:text-3xl'>{language==="hu"?"TANFOLYAMAINK":language==="en"?"Courses":"课程"}</h2>
                    <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                </div>
                <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 md:px-0 mt-7 md:mt-10'>
                    {courses.map(course=>(
                    <CourseCard key={course._id} course={course} lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
                    ))}
                </div>
                <div className='flex flex-col gap-3 items-center md:items-start mt-12'>
                    <h2 className='text-xl md:text-3xl'>{language==="hu"?"PROGRAMJAINK":language==="en"?"Programs":"活动"}</h2>
                    <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                </div>
                <div className='flex w-full flex-col gap-10 mt-7 bg-white p-10'>
                    {programs.map(program=>(
                        <ProgramCard key={program._id} program={program} lang={language} />
                    ))}
                </div>
            </div>           
            <Search type='courseandprogram' lang={language} />
        </div>
    </div>
    <Footer lang={language} />
    </>
  )
}

export default CourseAndProgramQuery