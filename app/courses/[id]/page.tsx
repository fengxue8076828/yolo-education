import React,{useState,useEffect} from 'react'
import ListHeader from '@/app/components/ListHeader'
import PriceBox from '@/app/components/PriceBox'
import Image from 'next/image'
import course from '@/public/course.png'
import { CourseType, getCourseById,getChaptersByCourse } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import defaultCoursePicture from "@/public/course.png"
import CourseDetailTagsContainer from '@/app/components/CourseDetailTagsContainer'
import RegisterForm from '@/app/components/RegisterForm'
import CourseDetailBody from '@/app/components/CourseDetailBody'

const CourseDetail = async({params}:{params:{id:string}}) => {
    const course = await getCourseById(params.id)
    const chapters = await getChaptersByCourse(params.id)
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text='COURSE DETAIL' />
        <CourseDetailBody course={course} chapters={chapters} />
        {/* <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
            <div className='w-full lg:w-[80%] bg-white p-5 md:p-16 rounded flex flex-col '>
                <Image className='w-full mb-10' src={urlFor(course.image).url()} alt='course' width={800} height={800} />
                <CourseDetailTagsContainer course={course} chapters={chapters} />
                <div>

                <div className='flex flex-col gap-1  my-16'>
                  <h1 className='text-2xl font-extrabold mb-3'>Register this course</h1>
                  <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                </div>
                  <RegisterForm />
              </div>
            </div>           
            <PriceBox price={course.price} />
        </div> */}
    </div>
  )
}

export default CourseDetail