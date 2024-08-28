import React from 'react'
import ListHeader from '../../components/ListHeader'
import { urlFor } from '@/sanity/lib/client';
import Link from 'next/link'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';
import { getForeignStudyCoverBySlug } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import PictureGallery from '@/app/components/PictureGallery';
import { getForeignStudyCovers } from '@/sanity/lib/queries';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import PortableTextComponent from '@/app/components/PortableTextComponent';
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'


export const revalidate = 60

enum Content {
    descHu="contenthu",
    descEn="contenten",
    descCn="contentcn"
}

const StudyAbroadDetail = async({params,searchParams}:{params:{slug:string},searchParams:{lang?:string}}) => {
    const foreignStudyCover = await getForeignStudyCoverBySlug(params.slug)
    const foreingStudyCovers = await getForeignStudyCovers()
    const language = searchParams.lang?searchParams.lang:"hu"
    const contentName:Content="content".concat(language) as Content
  return (
    <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
    <div className='bg-shallow-blue'>
        <ListHeader text={foreignStudyCover.subtitle.find((item)=>item._key===language)?.value || foreignStudyCover.subtitle[0].value} />
        <div className='flex p-10 gap-5 items-start flex-col lg:flex-row'>
            <div className='flex flex-col p-10 w-[100%] lg:w-[75%] bg-white'>
                <Image src={urlFor(foreignStudyCover.coverImage).url()} alt={foreignStudyCover.subtitle.find((item)=>item._key===language)?.value || foreignStudyCover.subtitle[0].value} width={1000} height={1000} className='w-[100%]' />
                <h4 className='uppercase tracking-wider text-dark-blue mt-20'>{foreignStudyCover.subtitle.find((item)=>item._key===language)?.value || foreignStudyCover.subtitle[0].value}</h4>
                <h1 className='text-4xl font-extrabold mb-10'>{foreignStudyCover.title.find((item)=>item._key===language)?.value}</h1>
                <div className='flex gap-5 items-start md:items-center mb-10 flex-col md:flex-row'>
                {
                    foreignStudyCover.features.map((feature,index)=>(
                        <div key={index} className='flex items-center gap-3'>
                            <FaArrowAltCircleRight className="text-golden text-2xl lg:text-3xl" />
                            <h3 className='text-1xl lg:text-2xl'>{feature.text.find((item)=>item._key===language)?.value}</h3>   
                        </div>
                    ))
                }
                </div>
                <div className="max-w-[80%]">
                    <PortableText 
                        value={foreignStudyCover[contentName]}
                        components={PortableTextComponent} 
                    />
                </div>
                <PictureGallery pictures={foreignStudyCover.pictures} />            
            </div>
            <div className='bg-white w-[100%] lg:w-[25%] p-10 order-first lg:order-last flex flex-col gap-3'>
                {
                    foreingStudyCovers.map(cover=>(
                        <div key={cover._id} className='flex items-center gap-3 font-extrabold'>
                            <IoIosArrowDroprightCircle className="text-2xl text-golden" />
                            <Link href={`/studyabroad/${cover.slug.current}?lang=${language}`} className={`hover:text-golden ${foreignStudyCover._id===cover._id?"text-golden":""}`}>
                                {cover.title.find((item)=>item._key===language)?.value}
                            </Link>
                            
                        </div>
                        
                    ))
                }
            </div>
        </div>
    </div>
    <Footer lang={language} />
</>
  )
}

export default StudyAbroadDetail