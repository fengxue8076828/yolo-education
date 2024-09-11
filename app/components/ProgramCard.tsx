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
import { useRouter } from 'next/navigation';
import PortableTextComponent from './PortableTextComponent';

enum Description {
    descHu="descriptionhu",
    descEn="descriptionen",
    descCn="descriptioncn"
}


const ProgramCard = ({program,lang}:{program:ProgramType,lang:string}) => {
    const [opened,setOpened] = useState(false)
    const time = new Date(program.time)
    const formattedDate = format(time,"yyyy-MM-dd")
    const formattedTime = format(time,"HH:mm")
    const router = useRouter()

    const descriptionName:Description="description".concat(lang) as Description

    const gotoProgramDetail = (register?:string) => {
        if(register){
            router.push(`/programs/${program._id}?lang=${lang}#${register}`)
        }else{
            router.push(`/programs/${program._id}?lang=${lang}`)
        }
        
    }
  return (
    <div className={`overflow-hidden w-full rounded-xl ${!opened?'bg-shallow-blue':'bg-middle-blue'}`}>
        <div className={`flex items-center justify-between flex-col md:flex-row`}>
            <div className='flex items-center justify-start my-7 md:my-0'>
                {
                    !opened && (
                        <div className='ml-5 md:ml-0 transition relative w-[180px] h-[120px] md:self-stretch md:h-[140px]'>
                            <Image className='object-cover' src={urlFor(program.image).url()} layout='fill' alt='student' />
                        </div>  
                    )
                    
                    }                    
                <div className={`p-10 flex flex-col ${!opened?'items-start':'items-center'} md:items-start`}>
                    <h3 className='text-base font-bold mb-1 md:text-xl'>{program.name.find((item)=>item._key===lang)?.value}</h3>
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
            initial={{x:'-100%',opacity:0}}
            whileInView={{x:0,opacity:1}}
            className={`p-10 ${!opened?'hidden':'block'} flex flex-col items-start md:flex-row justify-between gap-5`}
        >
            <div>
                <Image src={urlFor(program.image).url()} width={500} height={300} alt='student' />
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-20'>
                <div>
                    <PortableText 
                        value={program[descriptionName]}
                        components={PortableTextComponent}
                     />
                </div>
                
                {/* <p className='md:max-w-prose text-sm md:text-base'>
                    {program.description.toString()}
                </p> */}
                <div className='flex gap-5 md:gap-7'>
                    <div className='w-half md:w-auto'>
                        <button className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color w-full md:w-auto' onClick={()=>gotoProgramDetail()}>{lang==="hu"?"TÖBB":lang==="en"?"MORE":"更多"}</button>
                    </div>
                    <div className='w-half md:w-auto'>
                        <button className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color w-full md:w-auto' onClick={()=>gotoProgramDetail("program-register")}>{lang==="hu"?"Regisztráció":lang==="en"?"Registration":"注册课程"}</button>
                    </div>

                </div>
            </div> 
        </motion.div>
    </div>
        
    
  )
}

export default ProgramCard