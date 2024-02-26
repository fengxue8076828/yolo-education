"use client"
import React,{useState,useEffect} from 'react'
import { FaYoutube } from "react-icons/fa6";
import {motion} from "framer-motion"
import { YoutubeType } from '@/sanity/lib/queries';
import { getYoutube } from '@/sanity/lib/queries';
import Link from 'next/link';

const YoutubeChannel = () => {
  const [youtube,setYoutube] = useState<YoutubeType|null>(null)
  useEffect(()=>{
    const fetchYoutube = async() => {
      const youtube = await getYoutube()
      setYoutube(youtube)
    }
    fetchYoutube()
  },[])
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
     id='youtube' className='bg-[url("/classroom.png")] bg-no-repeat bg-cover bg-center py-10 px-5 md:py-48 flex flex-col items-center relative'>
        <div className='absolute inset-0 bg-dark-blue bg-opacity-80'></div>
        <h1 className='text-2xl md:text-4xl font-bold mt-1 z-10 text-white'>{youtube && youtube.title}</h1>
        <p className='w-full md:w-2/3 mt-4 md:mt-8 text-center z-10 text-white'>{youtube && youtube.text}</p>
        <Link className='z-10' href={youtube? youtube.youtubeChannelUrl:"/"}>
          <FaYoutube className='text-7xl text-ternary-color mt-5 cursor-pointer' />
        </Link>
        
    </motion.div>
  )
}

export default YoutubeChannel