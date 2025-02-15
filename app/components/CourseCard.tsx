"use client"
import React from 'react'
import Image from 'next/image'
import course from '@/public/course.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import Button from './Button';
import teacher from '@/public/teacher.png'
import { CourseType } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/client';
import { useRouter } from 'next/navigation';
import { HiMiniCurrencyDollar } from "react-icons/hi2";

const CourseCard = ({course,lang}:{course:CourseType,lang:string}) => {
  const router = useRouter()
  const navigateToCourse = (id:string) => {
    router.push(`/courses/${id}?lang=${lang}`)
  }
  return (
    <div className='flex-1 rounded bg-white hover:shadow-xl hover:scale-105 hover:transition cursor-pointer' onClick={()=>navigateToCourse(course._id)}>
        <div className='w-full h-[160px] relative'>
          <Image className='object-cover' src={urlFor(course.image).url()} alt='course' layout='fill' />
        </div>
        
        <div className='px-5 pt-8 pb-4 min-h-[130px] flex flex-col'>
            <h4 className='font-bold'>{course.name.find((item)=>item._key===lang)?.value}</h4>
            <p className='font-thin text-xs min-h-[50px]'>{course.subTitle.find((item)=>item._key===lang)?.value}</p>
            {
              course.status?
              <div className='bg-green-500 px-3 py-2 rounded text-xs mt-3 self-start'>{lang==="hu"?"Regisztráció":lang==="en"?"Enrollment in progress":"报名中"}</div>
              :
              <div className='bg-gray-300 px-3 py-2 rounded text-xs text-gray-500 mt-3 self-start'>{lang==="hu"?"A regisztráció véget ért":lang==="en"?"Enrollment ended":"报名已结束"}</div>
          }
        </div>

        <div className='px-5 min-h-[60px]'>
          <h4 className='font-bold text-sm'>
            <span className='font-extrabold'>{lang==="hu"?"Osztály ideje":lang==="en"?"Class Time":"上课时间"} :</span>
            {course.classTime.find((item)=>item._key===lang)?.value || course.classTime[0].value}
          </h4>
          <h4 className='font-bold text-sm'>
            <span className='font-extrabold'>{lang==="hu"?"Alkalmak":lang==="en"?"Lectures":"课程次数"} : </span>
            {course.lectures}
          </h4>
        </div>

        <div className='px-5 pt-8 pb-3 flex justify-between items-center'>
            <div className='flex justify-between items-center gap-1'>
                <HiMiniCurrencyDollar className="text-3xl text-golden" />
                <p className='text-xs'>{course.price} HUF</p>
            </div>
            <div className='flex items-center gap-3 rounded-full pr-5 bg-ternary-color overflow-hidden'>
              <div className='rounded-full overflow-hidden relative w-[40px] h-[40px]'>
                <Image className='absolute object-cover object-top' src={urlFor(course.teacher.image).url()} alt='teacher' layout='fill' /> 
              </div>
              <h3 className='text-white'>{course.teacher.name}</h3>
            </div>

        </div>
    </div>
  )
}

export default CourseCard