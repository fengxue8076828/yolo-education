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
    return (
      <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
      <div className='bg-shallow-blue min-h-[100vh]'>
      <ListHeader text="Vizsgák" />
      <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%]'>
          <ExamList categories={categories} lang={searchParams.lang?searchParams.lang:"hu"} />
        </div>           
        <Search type='courseandprogram' />
      </div>
  </div>
  <Footer />
  </>
    )
}

export default Exams