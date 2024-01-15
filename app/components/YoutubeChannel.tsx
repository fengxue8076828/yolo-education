"use client"
import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import {motion} from "framer-motion"

const YoutubeChannel = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{duration:1}}}
     id='youtube' className='bg-[url("/classroom.png")] bg-no-repeat bg-cover bg-center py-10 px-5 md:py-48 flex flex-col items-center relative'>
        <div className='absolute inset-0 bg-dark-blue bg-opacity-80'></div>
        <h1 className='text-2xl md:text-4xl font-bold mt-1 z-10 text-white'>Watch our camp life video tour</h1>
        <p className='w-full md:w-2/3 mt-4 md:mt-8 text-center z-10 text-white'>Watch our camp life video tour,Watch our camp life video tour,Watch our camp life video tour,Watch our camp life video tour,Watch our camp life video tour,Watch our camp life video tour</p>
        <FaYoutube className='text-7xl text-ternary-color mt-5 z-10 cursor-pointer' />
    </motion.div>
  )
}

export default YoutubeChannel