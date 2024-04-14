import React from 'react'
import ListHeader from '@/app/components/ListHeader'
import PriceBox from '@/app/components/PriceBox'
import Image from 'next/image'
import course from '@/public/course.png'
import Button from '@/app/components/Button'
import RegisterForm from '@/app/components/RegisterForm'
import { PiCalendarBlankLight, PiPencilBold } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { LuPencil } from 'react-icons/lu'
import { getProgramById } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import  {format} from 'date-fns'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Link from 'next/link'
import PortableTextComponent from '@/app/components/PortableTextComponent'

export const revalidate = 60

const ProgramDetail = async({params}:{params:{id:string}}) => {
    const program = await getProgramById(params.id)
    const programTime = new Date(program.time)
    const formattedDate = format(programTime,'yyyy-MM-dd')
    const formattedTime = format(programTime,'HH:mm')
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
    <ListHeader text={program.name} />
    <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%] bg-white p-5 md:p-16 rounded flex flex-col items-center'>
            <div className='w-full h-[400px] mb-10 relative'>
                <Image className='object-cover' src={urlFor(program.image).url()} alt='course' layout='fill' />
            </div>
            
            <div className='min-h-[80vh] pt-16 w-full'>
                <div className='flex flex-col'>
                    <div className='flex flex-wrap gap-10 gap-y-3 md:gap-16 md:gap-y-5 items-center'>
                        <div className='flex items-center gap-3'>
                            <PiCalendarBlankLight className='text-2xl text-ternary-color' />
                            <h4 className='text-sm md:text-base'>{`${formattedDate}`}</h4>
                        </div>
                        <div className='flex items-center gap-3'>
                            <CiClock2 className='text-2xl text-ternary-color' />
                            <h4 className='text-sm md:text-base'>{`${formattedTime}`}</h4>
                        </div>
                    </div>
                    <div className='py-16'>
                        <PortableText 
                            value={program.description}
                            components={PortableTextComponent}
                         />
                    </div>
                    <div className='flex flex-col md:flex-row flex-wrap mb-16 gap-16'>
                        <div className='flex flex-col gap-10 flex-1'>
                            <div className='text-2xl flex flex-col gap-2'>
                                <h2 className='font-extrabold'>program információk:</h2>
                                <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>Tanár:</span>{program.teacher.name}
                                    </h3>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>Név : </span>{program.name}
                                    </h3>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>tantárgy : </span>{program.subject}
                                    </h3>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span>elhelyezkedés : </span>{program.location}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 flex-1'>
                            <div className='text-2xl flex flex-col gap-2'>
                                <h2 className='font-extrabold'>Keresse meg ezt a programot:</h2>
                                <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                            </div>
                            <div className='flex gap-10'>
                                <Link href={program.twitterLink?program.twitterLink:""}>
                                    <FaSquareXTwitter className='text-4xl' />
                                </Link>
                                <Link href={program.facebookLink?program.facebookLink:""}>
                                    <FaFacebookSquare className='text-4xl' />
                                </Link>
                                <Link href={program.youtubeLink?program.youtubeLink:""}>
                                    <IoLogoYoutube className='text-4xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id='program-register' className='mt-16'>
                    <div className='flex flex-col gap-1  my-16'>
                        <h1 className='text-2xl font-extrabold mb-3'>Regisztrálja ezt a programot</h1>
                        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                    </div>
                        <RegisterForm type='program' activityName={program.name} />
                    </div>
                    
                </div>
            </div>
        </div>           
        <PriceBox price={program.price} />
    </div>
</div>
  )
}

export default ProgramDetail