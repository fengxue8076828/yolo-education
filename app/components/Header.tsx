import React from 'react'
import Image from 'next/image'
import chineseChars from '@/public/chinese_chars.png'
import chineseBooks from '@/public/chinesebooks.png'
import Button from './Button'
import Link from 'next/link'
import { getHeaderText } from '@/sanity/lib/queries'

export const revalidate = 60

const Header = async({lang}:{lang:string}) => {
  const headerText = await getHeaderText()
  return (
    <div className='bg-primary-color px-0 py-10 flex items-center gap-16 md:px-16 lg:px-32'>
      <div className='h-full'>
        <Image src={chineseChars} width={200} height={500} alt='chinese charactors' />
      </div>
      <div className='grow mt-0 px-0 md:lg-16 lg:px-20'>
        <h1 className='text-2xl font-bold text-left md:text-3xl lg:text-6xl md:text-center lg:text-center'>{headerText.slogan.find((item)=>item._key===lang)?.value}</h1>
        <div className='mt-8 lg:mt-16'>
          <div className='flex gap-8 items-center'>
            <div className='hidden md:block'>
              <Image src={chineseBooks} alt='chinese books' width={200} height={250} />
            </div>         
            <div>
              <h2 className='text-xl md:text-2xl text-ternary-color'>{lang==="hu"?"Yolo Oktatás":lang==="en"?"Yolo Education":"优乐教育"}</h2>
              <p className='max-w-prose my-5 mb-10'>
                {headerText.content.find((item)=>item._key===lang)?.value}
              </p>
              <Link href={`/courses?lang=${lang}`}  className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color'>
              {lang==="hu"?"Tanfolyamok felfedezése":lang==="en"?"Discover courses":"探索课程"}
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header