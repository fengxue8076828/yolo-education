"use client"
import {useState} from "react"
import { Input } from 'postcss'
import React,{KeyboardEvent} from 'react'
import Button from './Button'
import { useRouter } from "next/navigation"

const Search = ({type}:{type:string}) => {
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
    <div className='bg-white self-start w-full lg:w-[20%] px-7 py-5 gap-5 md:px-7 md:py-10 flex flex-col md:gap-10 rounded order-first lg:order-last'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-lg'>Keresés</h3>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='flex flex-col gap-3 md:gap-7 md:flex-row lg:flex-col'>
        <input type='text' className='border border-1 border-gray-500 px-3 py-3 rounded-lg w-full md:w-[400px] lg:w-full' placeholder={type=="course"?'keressen tanfolyamokat...':type=="program"?'keressen program':type=="teacher"?'keressen tanár':'keressen tanfolyamokat és program'} value={searchText} onChange={(e)=>setSearchText(e.target.value)} onKeyDown={handleKeyDown}/>
        <button className='w-full md:w-[200px] lg:w-full px-3 py-3 bg-dark-blue text-white rounded-lg' onClick={handleSearch}>keresés</button>
      </div>
      
    </div>
  )
}

export default Search