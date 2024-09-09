import React from 'react'
import ListHeader from '../components/ListHeader'
import { urlFor } from '@/sanity/lib/client';
import Link from 'next/link'
import Image from 'next/image';
import Search from '../components/Search';
import { getGalleryPictures } from '@/sanity/lib/queries';
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'


export const revalidate = 60

const Gallery = async({params,searchParams}:{params:{slug:string},searchParams:{lang?:string}}) => {
  const pictures = await getGalleryPictures()
  const language = searchParams.lang?searchParams.lang:"hu"

  return (
    <>
    <Menubar lang={language}  />
    <div className='bg-shallow-blue'>
        <ListHeader text={language==="hu"?"Képtár":language==="en"?"Gallery":"图片墙"} />
        <div className='flex px-0 py-10 lg:p-10 gap-5 items-start flex-col lg:flex-row m-h-[100vh]'>
            <div className='grid grid-cols-3 md:grid-cols-6 grid-rows-[200px] auto-rows-[200px] gap-3 grid-flow-row-dense  p-10 w-[100%] lg:w-[75%] bg-white'>
              {
                pictures.map((picture,index)=>(

                  <div key={picture._id} className={`col-span-${Math.floor(Math.random()*2)+1} row-span-${Math.floor(Math.random()*2)+1} relative hover:scale-105 hover:shadow-lg cursor-pointer transition-all rounded overflow-hidden`}>
                    <Link href={`/${picture.url}?lang=${language}`}>
                      <Image src={urlFor(picture.image).url()} layout='fill' alt={picture.title} className='absolute object-cover object-center'></Image>
                    </Link>
                    
                  </div>
                ))
              }
            </div>
            <Search type='courseandprogram' lang={language} />
        </div>
    </div>
    <Footer lang={language} />
    </>
  )
}

export default Gallery