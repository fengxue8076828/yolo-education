import React from 'react'
import ListHeader from '../../../components/ListHeader'
import Search from '../../../components/Search'
import Tagbox from '../../../components/Tagbox'
import { getProgramsByName } from '@/sanity/lib/queries'
import ProgramCard from '@/app/components/ProgramCard'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'


const CoursesQuery = async({params,searchParams}:{params:{keyword:string,index:string},searchParams:{lang?:string}}) => {
  const language = searchParams.lang?searchParams.lang:"hu"
  const decodedKeyword = decodeURIComponent(params.keyword);
  const programs = await getProgramsByName(decodedKeyword,language)
  return (
    <>
    <Menubar lang={language}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text={language==="hu"?"PROGRAMJAINK":language==="en"?"Our Programs":"我们的活动"} />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox index={params.index} type='program' lang={language} />
            <div className='flex w-full flex-col gap-10 mt-7 bg-white p-10'>
                {programs.map(program=>(
                <ProgramCard key={program._id} program={program} lang={language} />
                ))}
            </div>
          </div>           
          <Search type='program' lang={language} />
        </div>
    </div>
    <Footer lang={language} />
    </>
  )
}

export default CoursesQuery