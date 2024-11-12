"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/client';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper'
import 'swiper/css';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import {motion} from "framer-motion"


const PictureGallery = ({pictures}:{pictures:string[]}) => {
    const [swiper,setSwiper] = useState<SwiperClass | null>(null)

    
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,transition:{duration:1}}} className='py-8 px-5 flex flex-col items-center md:px-10 md:py-20 w-[100%]'>

            <div className='flex justify-end w-full items-center'>
                <div className='flex gap-3'>
                    <BsArrowLeftSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=> swiper?.slidePrev()} />
                    <BsArrowRightSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=>swiper?.slideNext()} />
                </div>
            </div>
            <div 
                className='w-full mt-10 md:px-0 md:mt-20 z-10'
            >
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    loop={true}
                    breakpoints={{
                        320: {
                        slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                        slidesPerView: 2,
                        },
                        // when window width is >= 1024px
                        1024: {
                        slidesPerView: 4,
                        },
                    }}
                >
                
                    {
                    pictures.map((picture,index)=>(
                        <SwiperSlide key={index}>
                            <div className='min-w-[200px] min-h-[200px] overflow-hidden flex-1'>
                                
                                <div>
                                 <Image src={urlFor(picture).url()} alt={picture} layout='fill' className='object-cover' />
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                    ))
                }
                
                {/* {
                    teachersInWindow.map(teacher=>(
                        <TeacherCard key={teacher._id} teacher={teacher} />
                    ))
                } */}
                </Swiper> 
            </div> 
        </motion.div>
        
    )
}

export default PictureGallery