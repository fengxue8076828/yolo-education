"use client"
import React,{useState} from 'react'
import { LuPencil } from "react-icons/lu";
import Button from '@/app/components/Button'
import { CourseType,ChapterType } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react'
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/client';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {format} from "date-fns"
import { MdPlayArrow } from "react-icons/md";
import { useRouter } from 'next/navigation';
import PortableTextComponent from './PortableTextComponent';


const CourseDetailTagsContainer = ({course}:{course:CourseType}) => {
    const tags=["Áttekintés","Tanár"]
    const [selectedTag,setSelectedTag] = useState(0)
    const [selectedChapters,setSelectedChapters] = useState<number[]>([0])
    const dates = course.startDate
    const router = useRouter()

    const isDateClickable = (date:Date) => {
        const formattedDate = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
        return dates.includes(formattedDate);
      }
  return (
    <div>        
        <div className='flex w-full text-xs md:text-base'>
            {
                tags.map((tag,index)=>(
                    <div key={index} className={`${index === selectedTag?'bg-dark-blue text-white':'bg-middle-blue text-black'} border border-1 border-gray-500 flex-1 flex py-5 border-r-0 font-extrabold cursor-pointer last:border-r`} onClick={()=>setSelectedTag(index)}>
                        <h3 className='m-auto'>{tag}</h3>
                    </div>
                ))
            }
        </div>
        <div className={`${selectedTag == 0?"block":"hidden"} min-h-[80vh] pt-16 w-full`}>
            <div className='flex flex-col'>
                <div className='flex flex-wrap gap-10 gap-y-3 md:gap-16 md:gap-y-5 items-center'>
                    <div className='flex items-center gap-3'>
                        <LuPencil className='text-xl text-ternary-color' />
                        <h4 className='text-sm md:text-base'><span className='font-extrabold'>Név : </span>{course.name}</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LuPencil className='text-xl text-ternary-color' />
                        <h4 className='text-sm md:text-base'><span className='font-extrabold'>Tanfolyam dátuma : </span>{course.startDate}</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LuPencil className='text-xl text-ternary-color' />
                        <h4 className='text-sm md:text-base'><span className='font-extrabold'>Előadások : </span>{course.lectures}</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LuPencil className='text-xl text-ternary-color' />
                        <h4 className='text-sm md:text-base'><span className='font-extrabold'>Időtartam : </span>{course.duration}hét(ig)</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LuPencil className='text-xl text-ternary-color' />
                        <h4 className='text-sm md:text-base'><span className='font-extrabold'>Tanár : </span>{course.teacher.name}</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LuPencil className='text-xl text-ternary-color' />
                        <h4 className='text-sm md:text-base'><span className='font-extrabold'>Elhelyezkedés : </span>{course.location}</h4>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-stretch gap-5 pt-16 justify-between w-full md:w-[100%] md:items-center'>
                    <div className='text-base md:text-xl flex flex-col gap-3'>
                        <h4><span className='font-extrabold'>Kategória : </span>{course.category.name}</h4>
                    </div>
                    <div className='flex flex-col md:flex-row items-stretch gap-3'>
                        <Button text='Register' clickHandler={()=>{router.push("#register")}}/>
                        {/* <select className='border p-3' onChange={(e)=>setSelectedDate(e.target.value)}>
                            <option value="">A tanfolyam kezdési dátuma</option>
                            {
                                course.startDate.map((date,index)=>(
                                    <option key={index} value={date}>{date}</option>
                                ))
                            }
                        </select> */}
                    </div>
                </div>
                <div className='w-full h-[1px] bg-slate-500 my-16'>
                </div>
                <div>
                    <PortableText 
                        value={course.description}
                        components={PortableTextComponent}
                     />
                </div>         
            </div>
        </div>
        {/* <div className={`${selectedTag == 1?"block":"hidden"} min-h-[80vh] pt-16 w-full`}>
            {
                chapters.map((chapter,chapterIndex)=>(
                    <div key={chapter._id} className='my-10'>
                        <div className='flex items-center mb-5 gap-3'>
                            <h3 className='text-xl font-extrabold'>Fejezet {chapter.sequence}</h3>
                            {
                                selectedChapters.includes(chapterIndex)?<IoIosArrowUp className='text-xl cursor-pointer' onClick={()=>setSelectedChapters(selectedChapters.filter(chapter=>chapter!=chapterIndex))} />:<IoIosArrowDown className='text-xl cursor-pointer' onClick={()=>setSelectedChapters([...selectedChapters,chapterIndex])} />
                            }
                        </div>
                        <div className={`${selectedChapters.includes(chapterIndex)?"block":"hidden"}`}>
                            <PortableText 
                                value={chapter.content}
                                components={PortableTextComponent}
                             />
                        </div>
                    </div>
                ))
            }
            
        </div> */}
        <div className={`${selectedTag == 1?"block":"hidden"} min-h-[80vh] pt-16 w-full flex flex-col gap-10`}>
            <div className='flex items-center gap-10'>
                <div className='w-[150px] h-[150px] relative rounded-full overflow-hidden'>
                    <Image src={urlFor(course.teacher.image).url()} alt={course.teacher.name}  className='object-cover object-top' layout='fill' />
                </div>
                <div>
                    <h3 className='text-2xl font-extrabold'>{course.teacher.name}</h3>
                    <p className='text-xl'>{course.teacher.title}</p>
                </div>
            </div>
            <div className='w-full'>
                <PortableText 
                    value={course.teacher.description}
                    components={PortableTextComponent}
                 />
            </div>
        </div>
    </div>
  )
}

export default CourseDetailTagsContainer