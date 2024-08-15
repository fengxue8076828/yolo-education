import Link from 'next/link';
import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiStudentLight } from "react-icons/pi";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiHouseLineLight } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";

import { MdPermDeviceInformation } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";





const Navigator = () => {
  return (
    <div className='w-[40px] bg-middle-shallow-blue flex-col justify-around items-center hidden lg:flex lg:gap-7 lg:px-5 lg:py-7 fixed top-[20vh] left-0 z-30 rounded-e-2xl'>
        <Link href="#introduction">
            <MdPermDeviceInformation className='text-xl md:text-3xl text-gray-500 cursor-pointer' />
        </Link>
        <Link href="#courses">
            <MdOutlinePlayLesson className='text-xl md:text-3xl text-gray-500 cursor-pointer' />
        </Link>
        <Link href="#youtube">
            <MdOutlineOndemandVideo className='text-xl md:text-3xl  text-gray-500 cursor-pointer' />
        </Link>
        <Link href="#programs">
            <GiCampingTent className='text-xl md:text-3xl  text-gray-500 cursor-pointer' />
        </Link>
        <Link href="#teachers">
            <FaChalkboardTeacher className='text-xl md:text-3xl  text-gray-500 cursor-pointer' />
        </Link>
        <Link href="#testimonials">
            <LuHeartHandshake className='text-xl md:text-3xl  text-gray-500 cursor-pointer' />
        </Link>
    </div>
  )
}

export default Navigator