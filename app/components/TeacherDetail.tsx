"use client"
import React from 'react'
import { TeacherType } from '@/sanity/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import teacherPicture from "@/public/teacher.png"
import {motion} from "framer-motion"
import PortableTextComponent from './PortableTextComponent'

enum Description {
    descHu="descriptionhu",
    descEn="descriptionen",
    descCn="descriptioncn"
}

const TeacherDetail = ({teacher,setShowTeacherDetail,lang}:{teacher:TeacherType | null,setShowTeacherDetail:(s:boolean)=>void,lang:string}) => {
    const descriptionName:Description="description".concat(lang) as Description
  return (
    <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1,transition:{duration:0.3}}}
        onClick={()=>setShowTeacherDetail(false)} 
        className="fixed top-0 left-0 w-full h-[100vh] z-20 flex backdrop-blur-sm"
    >
        <div className='m-auto w-[90vw] md:w-[50vw] h-[70vh] bg-middle-blue rounded-xl p-16 flex flex-col gap-10'>
            <div className='flex items-center gap-10'>
                <div className='w-[150px] rounded-full overflow-hidden'>
                    <Image src={teacher?.image?urlFor(teacher.image).url():teacherPicture} alt={teacher?teacher.name:"teacher"} width={800} height={800} />
                </div>
                <div>
                    <h3 className='text-2xl font-extrabold'>{teacher?.name}</h3>
                    <p className='text-xl'>{teacher?.title.find((item)=>item._key===lang)?.value}</p>
                </div>
            </div>
            <div className='w-full'>
                {
                    teacher && <PortableText 
                        value={teacher[descriptionName]}
                        components={PortableTextComponent}
                     />
                }
                
            </div>
        </div>
    </motion.div>
  )
}

export default TeacherDetail