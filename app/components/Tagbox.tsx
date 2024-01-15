"use client"
import React,{useState} from 'react'
import Link from 'next/link'

const Tagbox = () => {
  const [selectedIndex,setSelectedIndex] = useState(0)
  const tags=['Hungarian Courses','Hungarian','Chinese','Business Chinese','Hungarian For Kids']

  return (
    <div className='bg-white px-7 py-5 mb-10 flex flex-wrap gap-5 text-xs rounded'>
      {
        tags.map((tag,index)=>(
          <Link key={index} className={`${selectedIndex===index?'bg-dark-blue text-white':'bg-middle-blue text-black'} px-5 py-3 rounded-3xl`} href={''} onClick={()=>setSelectedIndex(index)}>{tag}</Link>
        ))
      }
    </div>
  )
}

export default Tagbox