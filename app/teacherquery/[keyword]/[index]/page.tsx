import React from 'react'
import ListHeader from '../../../components/ListHeader'
import Search from '../../../components/Search'
import Tagbox from '../../../components/Tagbox'
import { getTeachersByTitle } from '@/sanity/lib/queries'
import TeacherCard from '@/app/components/TeacherCard'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'


const TeachersQuery = async({params,searchParams}:{params:{keyword:string,index:string},searchParams:{lang?:string}}) => {
  const language = searchParams.lang?searchParams.lang:"hu"
  const decodedKeyword = decodeURIComponent(params.keyword);
  const teachers = await getTeachersByTitle(decodedKeyword,language)
  return (
    <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text={language==="hu"?"TANÁR":language==="en"?"Our Teachers":"我们的老师"} />
        <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
          <div className='w-full lg:w-[80%]'>
            <Tagbox index={params.index} type='teacher' lang={language} />
            <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 py-10 md:px-10 mt-7 md:mt-10 bg-white'>
                {teachers.map(teacher=>(
                <TeacherCard key={teacher._id} teacher={teacher} lang={language} />
                ))}
            </div>
          </div>           
          <Search type='teacher' lang={language} />
        </div>
    </div>
    <Footer lang={language} />
    </>
  )
}

export default TeachersQuery