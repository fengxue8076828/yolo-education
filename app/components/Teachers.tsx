"use client"
import React,{useEffect,useState} from 'react'
import TeacherCard from './TeacherCard';
import { getTeachers } from '@/sanity/lib/queries';
import { TeacherType } from '@/sanity/lib/queries';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper'
import 'swiper/css';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import {motion} from "framer-motion"
import TeacherDetail from './TeacherDetail';


const Teachers = ({lang}:{lang:string}) => {
    const [teachers,setTeachers] = useState<TeacherType[]>([])
    const [swiper,setSwiper] = useState<SwiperClass | null>(null)
    const [selectedTeacher,setSelectedTeacher] = useState<TeacherType | null>(null)
    const [showTeacherDetail,setShowTeacherDetail] = useState(false)

    useEffect(()=>{
        const fetchTeachers = async() => {
            const teachers = await getTeachers()
            setTeachers(teachers)
        }
        fetchTeachers()
    },[])
    
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,transition:{duration:1}}}
         id='teachers' className='py-8 px-5 flex flex-col items-center md:px-10 sm:py-20 md:py-25'>

            <div className='flex justify-center md:justify-start w-full items-center'>
                <div className='flex flex-col gap-1 md:gap-5 items-center md:items-start'>
                    <h1 className='text-2xl md:text-4xl font-bold mt-1'>
                        {lang==="hu"?"Szakképzett ":lang==="en"?"Our ":"我们的"}
                        <span className='text-ternary-color'>{lang==="hu"?"tanáraink":lang==="en"?"Teachers":"老师"}</span>
                    </h1>
                    <span className='w-[50px] h-[2px] md:w-[70px] md:h-[5px] bg-ternary-color'></span>
                </div>
                {/* <div className='flex gap-3'>
                    <BsArrowLeftSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=> swiper?.slidePrev()} />
                    <BsArrowRightSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=>swiper?.slideNext()} />
                </div> */}
            </div>
            <div 
                className='w-full mt-10 px-20 md:px-0 md:mt-20 z-10'
            >
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    loop={true}
                    breakpoints={{
                        320: {
                        slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                        slidesPerView: 3,
                        },
                        // when window width is >= 1024px
                        1024: {
                        slidesPerView: 4,
                        },
                    }}
                >
                
                    {
                    teachers.map(teacher=>(
                        <SwiperSlide key={teacher._id}>
                            <TeacherCard teacher={teacher} setSelectedTeacher={setSelectedTeacher} setShowTeacherDetail={setShowTeacherDetail} lang={lang} />
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
            <div className='flex justify-center w-full items-center sm:mt-3 md:mt-5 lg:mt-10'>
                <div className='flex gap-3'>
                    <BsArrowLeftSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=> swiper?.slidePrev()} />
                    <BsArrowRightSquareFill className='text-ternary-color text-2xl md:text-3xl cursor-pointer hover:text-dark-ternary-color' onClick={()=>swiper?.slideNext()} />
                </div>
            </div>
            {
                showTeacherDetail&&<TeacherDetail teacher={selectedTeacher} setShowTeacherDetail={setShowTeacherDetail} lang={lang} />
            }  
 
             
        </motion.div>
        
    )
}

export default Teachers