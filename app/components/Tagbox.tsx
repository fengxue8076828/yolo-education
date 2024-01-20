"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getTags } from '@/sanity/lib/queries'
import { TagType } from '@/sanity/lib/queries'

const Tagbox = ({index}:{index:string}) => {
  console.log("******",index)
  const [selectedIndex,setSelectedIndex] = useState(index)
  const [tags,setTags] = useState<TagType[]>([])
  useEffect(()=>{
    const fetchTags = async() => {
      const ts = await getTags()
      setTags(ts)
    }
    fetchTags()
  },[])
  return (
    <div className='bg-white px-7 py-5 mb-10 flex flex-wrap gap-5 text-xs rounded'>
      {
        tags.length > 0 && tags.map((tag,i)=>(
          <Link key={i} className={`${parseInt(selectedIndex)===i?'bg-dark-blue text-white':'bg-middle-blue text-black'} px-5 py-3 rounded-3xl`} href={`/coursequery/${tag.name}/${i}`} onClick={()=>setSelectedIndex(i.toString())}>{tag.name}</Link>
        ))
      }
    </div>
  )
}

export default Tagbox