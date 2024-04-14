import React from 'react'
import ListHeader from '../components/ListHeader'
import { urlFor } from '@/sanity/lib/client';
import Link from 'next/link'
import Image from 'next/image';
import Search from '../components/Search';
import { getGalleryPictures } from '@/sanity/lib/queries';


export const revalidate = 60

const Gallery = async({params}:{params:{slug:string}}) => {
  const pictures = await getGalleryPictures()

  return (
    <div className='bg-shallow-blue'>
        <ListHeader text="Képtár" />
        <div className='flex p-10 gap-5 items-start flex-col lg:flex-row m-h-[100vh]'>
            <div className='grid grid-cols-3 md:grid-cols-6 grid-rows-[200px] auto-rows-[200px] gap-3 grid-flow-row-dense  p-10 w-[100%] lg:w-[75%] bg-white'>
              {
                pictures.map((picture,index)=>(

                  <div key={picture._id} className={`col-span-${Math.floor(Math.random()*2)+1} row-span-${Math.floor(Math.random()*2)+1} relative hover:scale-105 hover:shadow-lg cursor-pointer transition-all rounded overflow-hidden`}>
                    <Link href={`/${picture.url}`}>
                      <Image src={urlFor(picture.image).url()} layout='fill' alt={picture.title} className='absolute object-cover object-center'></Image>
                    </Link>
                    
                  </div>
                ))
              }
            </div>
            <Search type='course' />
        </div>
    </div>
  )
}

export default Gallery