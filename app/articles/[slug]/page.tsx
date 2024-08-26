import React from 'react'
import ListHeader from '@/app/components/ListHeader'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { getArticleBySlug } from '@/sanity/lib/queries'
import Search from '@/app/components/Search'
import CustomLink from '@/app/components/CustomLink'
import PortableTextComponent from '@/app/components/PortableTextComponent'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'

enum Content {
  contentHu="contenthu",
  contentEn="contenten",
  contentCn="contentcn"
}

const Article = async({params,searchParams}:{params:{slug:string},searchParams:{lang?:string}}) => {
    const article = await getArticleBySlug(params.slug)
    const language = searchParams.lang?searchParams.lang:"hu"
    const contentName:Content="content".concat(language) as Content
  return (
    <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
    <ListHeader text={article.title.find((item)=>item._key===language)?.value || article.title[0].value} />
    <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%] bg-white p-5 md:px-36 py-28 rounded flex flex-col items-center gap-10'>
            <h2 className='text-4xl mb-10'>{article.title.find((item)=>item._key===language)?.value || article.title[0].value}</h2>
            {/* {
              article.image && 
              <div className='w-full h-[500px] overflow-hidden'>
                <Image className='object-cover' src={urlFor(article.image).url()} alt={article.title} width={800} height={800} />
              </div>
            } */}
            
            <PortableText 
              value={article[contentName]}
              components={PortableTextComponent} 
            />
        </div>           
        <Search type='courseandprogram' lang={language} />
    </div>
</div>
<Footer lang={language} />
</>
  )
}

export default Article