"use client"
import {useState} from "react"
import { Input } from 'postcss'
import React,{KeyboardEvent} from 'react'
import Button from './Button'
import { useRouter } from "next/navigation"

const Search = ({type,lang}:{type:string,lang:string}) => {
  const [searchText,setSearchText] = useState("")
  const router = useRouter()
  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
    if(searchText){
      if(event.key==="Enter"){
        if(type==="courseandprogram"){
          router.push(`/${type}query/${searchText}?lang=${lang}`)
        }else{
          router.push(`/${type}query/${searchText}/${-2}?lang=${lang}`)
        }
        
      }
    }
  }
  const handleSearch = () => {
    if(searchText){
      if(type==="courseandprogram"){
        router.push(`/${type}query/${searchText}?lang=${lang}`)
      }else{
        router.push(`/${type}query/${searchText}/${-2}?lang=${lang}`)
      }
    }
  }
  return (
    <div className='bg-white self-start w-full lg:w-[20%] px-7 py-5 gap-5 md:px-7 md:py-10 flex flex-col md:gap-10 rounded order-first lg:order-last'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-lg'>{lang==="hu"?"Keresés":lang==="en"?"Search":"搜索"}</h3>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='flex flex-col gap-3 md:gap-7 md:flex-row lg:flex-col'>
        <input type='text' className='border border-1 border-gray-500 px-3 py-3 rounded-lg w-full md:w-[400px] lg:w-full' placeholder={

          lang=="hu"?
          (type=="course"?'keressen tanfolyamokat...':type=="program"?'keressen program...':type=="teacher"?'keressen tanár...':'keressen tanfolyamokat és program...'):
          lang=="en"?
          (type=="course"?'search for courses...':type=="program"?'search for programs':type=="teacher"?'search for teachers':'search for courses and programs'):
          (type=="course"?'搜索课程...':type=="program"?'搜索活动...':type=="teacher"?'搜索老师...':'搜索课程和活动...')
          
          
          } value={searchText} onChange={(e)=>setSearchText(e.target.value)} onKeyDown={handleKeyDown}/>
        <button className='w-full md:w-[200px] lg:w-full px-3 py-3 bg-dark-blue text-white rounded-lg' onClick={handleSearch}>{lang==="hu"?"Keresés":lang==="en"?"Search":"搜索"}</button>
      </div>
      
    </div>
  )
}

export default Search