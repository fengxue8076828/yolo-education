"use client"
import {useState} from "react"
import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation"

const Searchbox = () => {
  const [searchText,setSearchText] = useState("")
  const router = useRouter()
  return (
    <div className='items-center relative hidden lg:flex'>
        <input className='py-2 px-4 font-inherit bg-white rounded w-96 outline-none' type='text' placeholder='find your course...'  value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
        <div className='absolute right-[10px] cursor-pointer' onClick={()=>router.push(`/coursequery/${searchText}/${0}`)}>
            <FaMagnifyingGlass/>
        </div>
        
    </div>
  )
}

export default Searchbox