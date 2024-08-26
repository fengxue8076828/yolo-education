"use client"

import React from 'react'
import Image from 'next/image'
import course from '@/public/course.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import Button from './Button';
import { TeacherType } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client';
import { useRouter } from 'next/navigation';
const TeacherCard = (
  {
    teacher,
    setSelectedTeacher,
    setShowTeacherDetail,
    lang
  }:{
    teacher:TeacherType,
    setSelectedTeacher?:(t:TeacherType)=>void,
    setShowTeacherDetail?:(s:boolean)=>void,
    lang:string
  }
  ) => {
  const handleSelectTeacher = () => {
    if (setSelectedTeacher && setShowTeacherDetail) {
      setSelectedTeacher(teacher)
      setShowTeacherDetail(true)
    }
  }
  const router = useRouter()
  const handleTeacherDetail = () => {
    router.push(`/teachers/${teacher._id}?lang=${lang}`)
  }
  return (
    <div className='group flex-1 cursor-pointer my-5 h-[300px] relative [perspective:50rem]' onClick={handleSelectTeacher}>
        <div className='w-full group-hover:[transform:rotateY(180deg)] transition-all duration-700  bg-white absolute [backface-visibility:hidden] rounded-xl h-[300px]'>
          <div className='w-full rounded-xl h-[170px] overflow-hidden relative'>
            <Image className='object-cover object-top' src={urlFor(teacher.image).url()} alt={teacher.title.find((item)=>item._key===lang)?.value || "teacher"} layout='fill' />
          </div>  
          <div className='py-8'>
              <h4 className='font-bold text-xl'>{teacher.name}</h4>
              <p className='font-thin'>{teacher.title.find((item)=>item._key===lang)?.value}</p>
          </div>
          <div className='w-[100px] h-[2px] bg-dark-ternary-color'></div>
        </div>
        <div className='[transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)] transition-all duration-700  bg-middle-blue absolute w-full h-[300px] [backface-visibility:hidden] rounded-xl overflow-hidden p-5'>
          <div className='flex flex-col gap-7 justify-between'>
            <div className='flex gap-3 items-center'>
              <div className='w-[70px] h-[70px] rounded-full relative overflow-hidden'>
                <Image className='object-cover object-top' src={urlFor(teacher.image).url()} alt={teacher.title.find((item)=>item._key===lang)?.value || "teacher"} layout='fill' />
              </div>
              
              <div>
                <h3 className='font-extrabold text-lg'>{teacher.name}</h3>
                <p className='text-sm'>{teacher.title.find((item)=>item._key===lang)?.value}</p>
              </div>
            </div>
            <p className='w-full h-[80px]'>{teacher.charactor.find((item)=>item._key===lang)?.value}</p>
            <Button text={lang==="hu"?"Több":lang==="en"?"See More":"查看详细信息"} clickHandler={()=>handleTeacherDetail()} />
          </div>
        </div>
    </div>
  )
}

export default TeacherCard