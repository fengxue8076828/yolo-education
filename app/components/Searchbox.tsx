"use client"
import {useState} from "react"
import React,{KeyboardEvent} from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation"
import { GrClose } from "react-icons/gr";

const Searchbox = (
  {
    type,
    location,
    lang,
    showSearchBox,
    setShowSearchBox
  }
  :{
    type:string,
    location:string,
    lang:string,
    showSearchBox?:boolean,
    setShowSearchBox?:React.Dispatch<React.SetStateAction<boolean>>
  }
) => {
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
    <div className={`items-center relative ${location=='top'?`${showSearchBox==true?'block':'hidden'} md:hidden py-2`:'hidden md:flex md:w-80 lg:w-40 xl:w-72 2xl:w-96'}`}>
        <input className={`py-2 px-4 font-inherit rounded outline-none w-[100%] ${location=='top'?'text-base pl-9':'text-xs'}`} type='text' placeholder={
          lang=="hu"?
          (type=="course"?'keressen tanfolyamokat...':type=="program"?'keressen program...':type=="teacher"?'keressen tanár...':'Kurzok és programok...'):
          lang=="en"?
          (type=="course"?'search for courses...':type=="program"?'search for programs':type=="teacher"?'search for teachers':'courses and programs'):
          (type=="course"?'搜索课程...':type=="program"?'搜索活动...':type=="teacher"?'搜索老师...':'搜索课程和活动...')
          }  value={searchText} onChange={(e)=>setSearchText(e.target.value)} onKeyDown={handleKeyDown} />
        {
          location=="top"?
          <div className='absolute right-[10px] top-5 cursor-pointer flex item-center gap-3'>
            <div className='cursor-pointer' onClick={handleSearch}>
                <FaMagnifyingGlass/>
            </div>
            <div className='cursor-pointer' onClick={()=>{
                  if(setShowSearchBox){
                    setShowSearchBox(false)
                  }
                }}>
                <GrClose />
            </div>
          </div>
            :
            <div className='absolute right-[10px] top-2 cursor-pointer' onClick={handleSearch}>
                <FaMagnifyingGlass/>
            </div>
          
        }
        
        
    </div>
  )
}

export default Searchbox