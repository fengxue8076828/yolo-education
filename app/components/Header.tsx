import React from 'react'
import Image from 'next/image'
import chineseChars from '@/public/chinese_chars.png'
import chineseBooks from '@/public/chinesebooks.png'
import Button from './Button'
import Link from 'next/link'
import { getHeaderText } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

const Header = async() => {
  const headerText = await getHeaderText()
  return (
    <div className='bg-primary-color px-0 py-10 flex items-center gap-16 md:px-16 lg:px-32'>
      <div className='h-full'>
        <Image src={chineseChars} width={200} height={500} alt='chinese charactors' />
      </div>
      <div className='grow mt-0 px-0 md:lg-16 lg:px-20'>
        <h1 className='text-2xl font-bold text-left md:text-3xl lg:text-6xl md:text-center lg:text-center'>{headerText.slogan}</h1>
        <div className='mt-8 lg:mt-16'>
          <div className='flex gap-8 items-center'>
            <div className='hidden md:block'>
              <Image src={chineseBooks} alt='chinese books' width={200} height={250} />
            </div>         
            <div>
              <h2 className='text-xl md:text-2xl text-ternary-color'>Yolo Oktatás</h2>
              <p className='max-w-prose my-5 mb-10'>
                {headerText.content}
              </p>
              <Link href="/courses"  className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color'>
              Tanfolyamok felfedezése
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header