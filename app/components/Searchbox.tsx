"use client"
import {useState} from "react"
import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation"

const Searchbox = ({type}:{type:string}) => {
  const [searchText,setSearchText] = useState("")
  const router = useRouter()
  return (
    <div className='items-center relative hidden lg:flex'>
        <input className='py-2 px-4 font-inherit bg-white rounded w-96 outline-none' type='text' placeholder={type=="course"?'találd meg a kurzust...':'megtalálja a programját'}  value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
        <div className='absolute right-[10px] cursor-pointer' onClick={()=>router.push(`/${type}query/${searchText}/${0}`)}>
            <FaMagnifyingGlass/>
        </div>
        
    </div>
  )
}

export default Searchbox