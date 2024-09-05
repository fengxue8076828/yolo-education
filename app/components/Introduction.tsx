"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import student from '@/public/students.png'
import Button from './Button'
import {motion} from "framer-motion"
import { useRouter } from 'next/navigation'
import { IntroductionType } from '@/sanity/lib/queries'
import { getIntroduction } from '@/sanity/lib/queries'

const Introduction = ({lang}:{lang:string}) => {
  const router = useRouter()
  const gotoAboutUs = () => {
    router.push("/articles/about-us")
  }
  const [introduction,setIntroduction] = useState<IntroductionType|null>(null)
  useEffect(()=>{
    const fetchIntroduction = async() => {
      const introduction = await getIntroduction()
      setIntroduction(introduction)
    }
    fetchIntroduction()
  },[])
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
      id='introduction' className='flex flex-col items-center py-10 md:pt-20 md:pb-0 px-3 md:px-10'
    >
        <div className='flex flex-col gap-1 md:gap-5 items-center'>
          <h1 className='text-2xl md:text-4xl font-bold'>
              
             {lang==="hu"?"Üdvözöljük a ":lang==="en"?"Welcome to ":"欢迎来到"}
             <span className='text-ternary-color'>{lang==="cn"?"优乐":"YOLO"}</span>
             {lang==="hu"?" Education oldalán":lang==="en"?" Education":"教育"}
          
          </h1>
          
          <span className='w-[50px] h-[2px] md:w-[70px] md:h-[5px] bg-ternary-color'></span>
        </div>
        
        <div className='flex items-center gap-20 mt-8 md:mt-20'>
            <div className='hidden md:block'>
                <Image src={student} width={300} height={300} alt='students'/>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <h2 className='text-sm text-center font-semibold md:text-2xl md:text-left'>{introduction&&introduction.title.find((item)=>item._key===lang)?.value}</h2>
              <p className='px-5 md:px-0 md:max-w-prose my-8'>{introduction && introduction.text.find((item)=>item._key===lang)?.value}</p>
              <button  className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 block bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color self-stretch md:self-auto' onAuxClickCapture={gotoAboutUs}>{lang==="hu"?"Rólunk":lang==="en"?"About us":"关于我们"}</button>
            </div>  
        </div>
    </motion.div>
  )
}

export default Introduction