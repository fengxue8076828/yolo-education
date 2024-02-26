"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import logo from '@/app/yolo-logo.png'
import Menu from './Menu'
import Searchbox from './Searchbox'
import MenuDropdown from './MenuDropdown'
import Link from 'next/link'

const Menubar = () => {
  const [dropdownOpen,setDropdownOpen] = useState(false)
  return (
    <div className='bg-primary-color px-10 py-3 flex justify-between items-center relative'>
        <div className='flex items-center gap-1'>
          <Link href="/">
            <div className='flex gap-1'>
              <Image src={logo} alt='logo' width={30} height={30}></Image>
              <h2 className='text-ternary-color text-xl'>优乐教育</h2>
            </div>
            
          </Link>
        </div>
        <Searchbox type="course" />
        <Menu dropdownOpened={dropdownOpen} setDropdownOpened={setDropdownOpen} />
        <MenuDropdown dropdownOpen={dropdownOpen} />
    </div>
  )
}

export default Menubar