import React from 'react'
import ListHeader from '@/app/components/ListHeader'
import Tagbox from '@/app/components/Tagbox'
import Search from '@/app/components/Search'
import { getTeacherById } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import PortableTextComponent from '@/app/components/PortableTextComponent'
import { getCoursesByTeacher } from '@/sanity/lib/queries'
import CourseCard from '@/app/components/CourseCard'

const Teacher = async({params}:{params:{id:string}}) => {
    const teacher = await getTeacherById(params.id)
    const courses = await getCoursesByTeacher(teacher._id)
    return (
        <div className='bg-shallow-blue min-h-[100vh]'>
            <ListHeader text="TANÁR" />
            <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
                <div className='w-full lg:w-[80%]'>
                    <Tagbox index='-1' type='teacher' />
                    <div className='min-h-[80vh] pt-16 px-10 w-full flex flex-col gap-10'>
                        <div className='flex items-center gap-10'>
                            <div className='w-[150px] h-[150px] relative rounded-full overflow-hidden'>
                                <Image src={urlFor(teacher.image).url()} alt={teacher.name}  className='object-cover object-top' layout='fill' />
                            </div>
                            <div>
                                <h3 className='text-2xl font-extrabold'>{teacher.name}</h3>
                                <p className='text-xl'>{teacher.title}</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <PortableText 
                                value={teacher.description}
                                components={PortableTextComponent}
                             />
                        </div>
                    </div>
               
                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <h2 className='text-xl md:text-3xl'>A tanfolyamai</h2>
                        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                    </div>
                    <div className='w-full grid gap-y-10 gap-x-7 grid-cols-auto-fill-100 px-10 md:px-0 mt-7 md:mt-10'>
                        {courses.map(course=>(
                        <CourseCard key={course._id} course={course} />
                        ))}
                    </div>
                
                </div>           
                <Search type='teacher' />
            </div>
        </div>
    )
}

export default Teacher