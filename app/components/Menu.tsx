import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

interface MenuProps {
  dropdownOpened:boolean,
  setDropdownOpened:React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({dropdownOpened,setDropdownOpened}:MenuProps) => {
  return (
    <>
      <div className='hidden lg:flex justify-between items-center gap-9'>
          <Link className='hover:text-ternary-color' href='/'>HOME</Link>
          <Link className='hover:text-ternary-color' href='/courses'>COURSES</Link>
          <Link className='hover:text-ternary-color' href='/programs'>PROGRAMS</Link>
          <Link className='hover:text-ternary-color' href='/articles/about-us'>ABOUT US</Link>
          <div className='w-0 border border-black h-5'></div>
          <Link className='hover:text-ternary-color' href={""}>BLOG</Link>
      </div>
      <div className='lg:hidden text-3xl cursor-pointer' onClick={()=>setDropdownOpened(pre=>!pre)}>
        {
          !dropdownOpened ? <GiHamburgerMenu /> : <GrClose />
        }
        
      </div>
    </>
    
  )
}

export default Menu