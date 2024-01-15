"use client"
import React,{useEffect,useState} from 'react'
import ProgramCard from './ProgramCard'
import {motion} from "framer-motion"
import { ProgramType, getPrograms } from '@/sanity/lib/queries'

const Programs = () => {
  const [programs,setPrograms] = useState<ProgramType[] | null>(null)
  useEffect(()=>{
    const fetchPrograms = async() => {
      const p = await getPrograms()
      setPrograms(p)
    }
    fetchPrograms()
  },[])
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
    id='programs' className='flex flex-col py-8 px-3 items-end md:px-10 md:py-20'>
      <div className='w-full flex flex-col gap-1 md:gap-5 items-end'>
        <h1 className='text-2xl md:text-4xl font-bold mt-1'>Up <span className='text-ternary-color'>coming </span>programs</h1>
        <span className='w-[50px] h-[2px] md:w-[70px] md:h-[5px] bg-ternary-color'></span>
      </div>
        <div className='w-full flex flex-col gap-5 mt-10 md:mt-20'>
        {
          programs && programs.map(program=>(
            <ProgramCard key={program._id} program={program} />
          ))
        }
        </div>
        
    </motion.div>
  )
}

export default Programs