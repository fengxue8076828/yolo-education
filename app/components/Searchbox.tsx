"use client"
import {useState} from "react"
import React,{KeyboardEvent} from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation"

const Searchbox = ({type,location}:{type:string,location:string}) => {
  const [searchText,setSearchText] = useState("")
  const router = useRouter()
  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
    if(searchText){
      if(event.key==="Enter"){
        if(type==="courseandprogram"){
          router.push(`/${type}query/${searchText}`)
        }else{
          router.push(`/${type}query/${searchText}/${-2}`)
        }
        
      }
    }
  }
  const handleSearch = () => {
    if(searchText){
      if(type==="courseandprogram"){
        router.push(`/${type}query/${searchText}`)
      }else{
        router.push(`/${type}query/${searchText}/${-2}`)
      }
    }
  }
  return (
    <div className={`items-center relative ${location=='top'?'md:hidden':'hidden md:flex md:w-96'}`}>
        <input className={`py-2 px-4 font-inherit rounded outline-none w-[100%]`} type='text' placeholder={type=="course"?'keressen tanfolyamokat...':type=="program"?'keressen program':type=="teacher"?'keressen tanár':'keressen tanfolyamokat és program'}  value={searchText} onChange={(e)=>setSearchText(e.target.value)} onKeyDown={handleKeyDown} />
        <div className='absolute right-[10px] top-3 cursor-pointer' onClick={handleSearch}>
            <FaMagnifyingGlass/>
        </div>
        
    </div>
  )
}

export default Searchbox