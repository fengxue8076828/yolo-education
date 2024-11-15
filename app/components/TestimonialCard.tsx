"use client"
import React from 'react'
import teacher1 from '@/public/teacher1.png'
import Image from 'next/image'
import {motion} from "framer-motion"
import { TestimonialType } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import PortableTextComponent from './PortableTextComponent'

enum Content {
  descHu="contenthu",
  descEn="contenten",
  descCn="contentcn"
}

const TestimonialCard = ({testimonial,lang}:{testimonial:TestimonialType,lang:string}) => {
  const contentName:Content="content".concat(lang) as Content
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
     className='max-w-full'>
        <h3 className='text-xl font-extrabold'>{testimonial.name}</h3>
        <div className='w-full h-[40px] relative'>
            <div className='absolute w-[30px] h-[40px] bg-middle-blue left-[70px] bottom-0'>
            </div>
            <div className='absolute w-[100px] h-[40px] bg-white skew-x-[45deg] left-[70px] bottom-0'>
            </div>
        </div>
        <div className='bg-middle-blue relative rounded-lg'>
            <div className='absolute top-[-50px] right-[30px] w-[80px] h-[80px] rounded-lg overflow-hidden outline outline-8 outline-white'>
              <div className='relative w-[100%] h-[100%]'>
                <Image className='absolute object-cover object-top' src={urlFor(testimonial.image).url()}  layout='fill' alt='testimonial' />
              </div>
            </div>
            <div className='p-10 pt-14 text-sm max-w-full min-h-36'>
              <PortableText  
                value={testimonial[contentName]}
                components={PortableTextComponent}
               />
            </div>
        </div>
    </motion.div>
  )
}

export default TestimonialCard