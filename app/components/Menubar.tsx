"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import logo from '@/app/logo.png'
import Menu from './Menu'
import Searchbox from './Searchbox'
import MenuDropdown from './MenuDropdown'
import Link from 'next/link'
import LanguageSelect from './LanguageSelect'
import { FaMagnifyingGlass } from "react-icons/fa6";

const Menubar = ({lang}:{lang:string}) => {
  const [dropdownOpen,setDropdownOpen] = useState(false)
  const [showSearchBox,setShowSearchBox] = useState(false)
  return (
    <>
      <Searchbox type="courseandprogram" location='top' lang={lang} showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} />
      <div className='bg-primary-color px-3 lg:pl-0 pr-1 lg: xl:px-3 md:px-10 py-3 flex justify-between items-center relative'>
          <div className='flex items-center gap-1'>        
              <div className='flex gap-1 items-center'>
                <Link href={`/?lang=${lang}`}>
                  <Image src={logo} alt='logo' width={200} height={30}></Image>
                </Link>
                <LanguageSelect lang={lang} />
              </div>
              <div className='sm:flex md:hidden ml-2'>
                <FaMagnifyingGlass className='m-auto text-2xl' onClick={()=>setShowSearchBox((pre)=>!pre)}/>
              </div>  
          </div>

          <Searchbox type="courseandprogram" location='menu' lang={lang} />
          <Menu dropdownOpened={dropdownOpen} setDropdownOpened={setDropdownOpen} lang={lang} />
          <MenuDropdown dropdownOpen={dropdownOpen} lang={lang} />
      </div>
    </>
    
  )
}

export default Menubar