import React from 'react'
import { getExamCategories } from '@/sanity/lib/queries'
import ListHeader from '../components/ListHeader'
import Search from '../components/Search'
import ExamList from '../components/ExamList'

export const revalidate = 60

const Exams = async() => {
    const categories = await getExamCategories()
    return (
      <div className='bg-shallow-blue min-h-[100vh]'>
      <ListHeader text="Vizsgák" />
      <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%]'>
          <ExamList categories={categories} />
        </div>           
        <Search type='courseandprogram' />
      </div>
  </div>
    )
}

export default Exams