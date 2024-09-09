import React from 'react'
import { getExamCategories } from '@/sanity/lib/queries'
import ListHeader from '../components/ListHeader'
import Search from '../components/Search'
import ExamList from '../components/ExamList'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'

export const revalidate = 60

const Exams = async({searchParams}:{searchParams:{lang?:string}}) => {
    const categories = await getExamCategories()
    const language = searchParams.lang?searchParams.lang:"hu"
    return (
      <>
    <Menubar lang={language}  />
      <div className='bg-shallow-blue min-h-[100vh]'>
      <ListHeader text={language==="hu"?"Vizsgák":language==="en"?"Exams":"考试"} />
      <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%]'>
          <ExamList categories={categories} lang={language} />
        </div>           
        <Search type='courseandprogram' lang={language} />
      </div>
  </div>
  <Footer lang={language} />
  </>
    )
}

export default Exams