import React from 'react'
import ListHeader from '../components/ListHeader'
import CourseList from '../components/CourseList'
import CourseListContainer from '../components/CourseListContainer'
import Search from '../components/Search'
import Tagbox from '../components/Tagbox'
import { getCategories } from '@/sanity/lib/queries'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'

export const revalidate = 60

const Courses = async({searchParams}:{searchParams:{lang?:string}}) => {
  const language = searchParams.lang?searchParams.lang:"hu"
  const categories = await getCategories()
  return (
    <>
    <Menubar lang={language}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text={language==="hu"?"TANFOLYAMAINK":language==="en"?"Our Courses":"我们的课程"} />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox index={"-1"} type='course' lang={language} />
            <CourseList categories={categories} lang={language} />
          </div>           
          <Search type='course' lang={language} />
        </div>
    </div>
    <Footer lang={language} />
    </>
  )
}

export default Courses