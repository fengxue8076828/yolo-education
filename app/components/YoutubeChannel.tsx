"use client"
import React,{useState,useEffect} from 'react'
import { FaYoutube } from "react-icons/fa6";
import {motion} from "framer-motion"
import { YoutubeType } from '@/sanity/lib/queries';
import { getYoutube } from '@/sanity/lib/queries';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const YoutubeChannel = ({lang}:{lang:string}) => {
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
    id='youtube' 
    className='bg-dark-blue flex flex-col lg:flex-row items-stretch sm:h-[100vh] lg:h-auto sm:py-20 md:py-25'>
        <div className='flex-1 flex items-center justify-center bg-slate-300'>
          <ReactPlayer 
            url={youtube?.youtubeHomeUrl}
            controls={false}
            width="100%"
            height="100%"
            loop={true}
            className='flex-1 flex items-center justify-center bg-slate-300'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center items-center px-5 py-10 lg:py-40 bg-dark-blue'>
          <h1 className='text-2xl md:text-4xl font-bold mt-1 z-10 text-white text-center'>{youtube && youtube.title.find((item)=>item._key===lang)?.value}</h1>
          <p className='w-full md:w-2/3 mt-4 md:mt-8 text-center z-10 text-white'>{youtube && youtube.text.find((item)=>item._key===lang)?.value}</p>
          <Link className='z-10' href={youtube? youtube.youtubeChannelUrl:"/"} target='_blank'>
            <FaYoutube className='text-7xl text-ternary-color mt-5 cursor-pointer' />
          </Link>
        </div>
    </motion.div>
  )
}

export default YoutubeChannel