"use client"
import React from 'react'
import Image from 'next/image'
import {FaRegCalendarAlt} from "react-icons/fa"
import course from '@/public/course.png'
import teacher from '@/public/teacher.png'
import { ProgramType } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import { useRouter } from 'next/navigation'
import {format} from "date-fns"

const ProgramListCard = ({program}:{program:ProgramType}) => {
    const router = useRouter()
    const gotoDetail = () => {
        router.push(`/programs/${program._id}`)
    }
    const programTime = new Date(program.time)
    const formattedDate = format(programTime,"yyyy-MM-dd")
    const formattedTime = format(programTime,"HH:mm")
  return (
    <div className='min-w-64 rounded bg-white hover:shadow-xl hover:scale-105 hover:transition cursor-pointer flex' onClick={()=>gotoDetail()}>
        <div className='w-[60%] md:w-[40%] lg:w-[30%] relative'>
            <Image className='object-cover' fill src={urlFor(program.image).url()} alt='course' />
        </div>
        <div className='p-10 flex flex-col gap-7 items-start'>
            <div>
                <h4 className='font-extrabold text-xl'>{program.name}</h4>
                <p className='font-thin'>{program.subject}</p>
            </div>
            <div className='flex justify-between items-center gap-2'>
                <FaRegCalendarAlt />
                <p>{formattedDate} {formattedTime}</p>
            </div>
            <div className='flex items-center gap-3 rounded-full pr-5 bg-ternary-color overflow-hidden w-[150px]'>
                <div className='rounded-full overflow-hidden'>
                    <Image src={urlFor(program.teacher.image).url()} width={40} height={40} alt='teacher' /> 
                </div>
                <h3 className='text-white text-base'>{program.teacher.name}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProgramListCard