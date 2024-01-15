"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import student from '@/public/student.png'
import { IoIosArrowDown,IoIosArrowUp, IoIosOpen } from "react-icons/io";
import Button from './Button';
import {motion} from "framer-motion"
import { ProgramType } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/client';
import {format} from "date-fns"
import { PortableText } from '@portabletext/react';


const ProgramCard = ({program}:{program:ProgramType}) => {
    const [opened,setOpened] = useState(false)
    const time = new Date(program.time)
    const formattedDate = format(time,"yyyy-MM-dd")
    const formattedTime = format(time,"HH:mm")
  return (
    <div className={`overflow-hidden w-full rounded-xl ${!opened?'bg-shallow-blue':'bg-middle-blue'}`}>
        <div className={`flex items-center justify-between flex-col md:flex-row`}>
            <div className='flex items-center justify-start'>
                {
                    !opened && (
                        <div className='ml-5 md:ml-0 transition'>
                            <Image src={urlFor(program.image).url()} width={200} height={200} alt='student' />
                        </div>  
                    )
                    
                    }                    
                <div className={`p-10 flex flex-col ${!opened?'items-start':'items-center'} md:items-start`}>
                    <h3 className='text-base font-bold mb-1 md:text-xl'>{program.name}</h3>
                    <p className='text-sm md:text-base'>{formattedDate} {formattedTime}</p>
                </div> 
            </div>
            <div className="text-4xl mr-0 md:mr-10 text-dark-blue mb-5 md:mb-0 cursor-pointer" onClick={()=>setOpened(pre=>!pre)}>
                {
                    !opened ? (<IoIosArrowDown />):(<IoIosArrowUp />)
                }
            </div>
        </div>
        <motion.div
            initial={{x:-300,opacity:0}}
            whileInView={{x:0,opacity:1}}
            className={`p-10 ${!opened?'hidden':'block'} flex flex-col items-center md:flex-row justify-between gap-10`}
        >
            <div>
                <Image src={urlFor(program.image).url()} width={500} height={300} alt='student' />
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-20'>
                <div>
                    <PortableText value={program.description} />
                </div>
                
                {/* <p className='md:max-w-prose text-sm md:text-base'>
                    {program.description.toString()}
                </p> */}
                <div className='flex gap-10'>
                    <Button text='MORE' clickHandler={()=>{}} />
                    <Button text='REGISTER' clickHandler={()=>{}} />
                </div>
            </div> 
        </motion.div>
    </div>
        
    
  )
}

export default ProgramCard