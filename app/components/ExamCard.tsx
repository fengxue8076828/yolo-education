"use client"
import React from 'react'
import teacher1 from '@/public/teacher1.png'
import Image from 'next/image'
import {motion} from "framer-motion"
import { ExamType } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import PortableTextComponent from './PortableTextComponent'
import Link from 'next/link'

const ExamCard = ({exam,lang}:{exam:ExamType,lang:string}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
     className='max-w-full mt-10'>
        <Link className='block text-lg md:text-xl lg:text-2xl font-extrabold mb-3 ml-3 hover:text-middle-blue' href={exam.link?exam.link:""}>{exam.name.find((item)=>item._key===lang)?.value}</Link>
        {/* <h3 className='text-lg md:text-xl lg:text-2xl font-extrabold mb-3 ml-3'>{exam.name}</h3> */}
        <div className='bg-middle-blue relative rounded-lg'>
            <div className='absolute top-[-50px] right-[30px] w-[80px] h-[80px] rounded-lg overflow-hidden outline outline-8 outline-white'>
                <Image src={urlFor(exam.logo).url()}  layout='fill' alt='exam' />
            </div>
            <div className='p-7 text-sm min-h-36 pt-16'>
              <p>{exam.description.find((item)=>item._key===lang)?.value}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default ExamCard