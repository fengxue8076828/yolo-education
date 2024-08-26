import React from 'react'
import ListHeader from '../components/ListHeader'
import Tagbox from '../components/Tagbox'
import ProgramList from '../components/ProgramList'
import Search from '../components/Search'
import { getPrograms,getProgramCategories } from '@/sanity/lib/queries'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'

export const revalidate = 60

const Programs = async({searchParams}:{searchParams:{lang?:string}}) => {
  //const programs = await getPrograms()
  const language = searchParams.lang?searchParams.lang:"hu"
  const categories = await getProgramCategories()
  return (
    <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
    <ListHeader text={language==="hu"?"PROGRAMJAINK":language==="en"?"Programs":"我们的活动"} />
    <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
      <div className='w-full lg:w-[80%]'>
        <Tagbox index='-1' type='program' lang={language} />
        <ProgramList categories={categories} lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
      </div>           
      <Search type='program' lang={language} />
    </div>
</div>
<Footer lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
</>
  )
}

export default Programs