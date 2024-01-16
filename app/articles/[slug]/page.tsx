import React from 'react'
import ListHeader from '@/app/components/ListHeader'
import PriceBox from '@/app/components/PriceBox'
import Image from 'next/image'
import course from '@/public/course.png'
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
import { getArticleBySlug } from '@/sanity/lib/queries'
import Searchbox from '@/app/components/Searchbox'
import SearchSideBox from '@/app/components/SearchSideBox'


const Article = async({params}:{params:{slug:string}}) => {
    const article = await getArticleBySlug(params.slug)
  return (
    <div className='bg-shallow-blue min-h-[100vh]'>
    <ListHeader text={article.title} />
    <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%] bg-white p-5 md:px-36 py-28 rounded flex flex-col items-center gap-10'>
            <h2 className='text-4xl mb-10'>{article.title}</h2>
            <div className='w-full h-[500px] overflow-hidden'>
                <Image className='object-cover' src={urlFor(article.image).url()} alt={article.title} width={800} height={800} />
            </div>
            <PortableText value={article.content} />
        </div>           
        <SearchSideBox />
    </div>
</div>
  )
}

export default Article