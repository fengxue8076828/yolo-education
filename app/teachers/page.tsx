import React from 'react'
import { getTeacherCategories } from '@/sanity/lib/queries'
import ListHeader from '../components/ListHeader'
import Tagbox from '../components/Tagbox'
import Search from '../components/Search'
import TeacherList from '../components/TeacherList'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'

export const revalidate = 60

const Teachers = async({searchParams}:{searchParams:{lang?:string}}) => {
    const categories = await getTeacherCategories()
    const language = searchParams.lang?searchParams.lang:"hu"
    return (
      <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
      <div className='bg-shallow-blue min-h-[100vh]'>
      <ListHeader text={language==="hu"?"TANÁR":language==="en"?"Teachers":"我们的老师"} />
      <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%]'>
          <Tagbox index='-1' type='teacher' lang={language} />
          <TeacherList categories={categories} lang={language} />
        </div>           
        <Search type='teacher' lang={language} />
      </div>
  </div>
  <Footer lang={language} />
  </>
    )
}

export default Teachers