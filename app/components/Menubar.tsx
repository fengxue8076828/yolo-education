"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import logo from '@/app/logo.png'
import Menu from './Menu'
import Searchbox from './Searchbox'
import MenuDropdown from './MenuDropdown'
import Link from 'next/link'

const Menubar = () => {
  const [dropdownOpen,setDropdownOpen] = useState(false)
  return (
    <>
      <Searchbox type="courseandprogram" location='top' />
      <div className='bg-primary-color px-3 md:px-10 py-3 flex justify-between items-center relative'>
          <div className='flex items-center gap-1'>
            <Link href="/">
              <div className='flex gap-1'>
                <Image src={logo} alt='logo' width={200} height={30}></Image>
              </div>
              
            </Link>
          </div>
          <Searchbox type="courseandprogram" location='menu' />
          <Menu dropdownOpened={dropdownOpen} setDropdownOpened={setDropdownOpen} />
          <MenuDropdown dropdownOpen={dropdownOpen} />
      </div>
    </>
    
  )
}

export default Menubar