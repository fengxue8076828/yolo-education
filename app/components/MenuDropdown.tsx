import React from 'react'
import Link from 'next/link'

const MenuDropdown = ({
        dropdownOpen,
    }:{
        dropdownOpen:boolean,
    }) => {
  return (
    <div className={`${!dropdownOpen?'hidden':'block'} absolute left-0 top-full w-full h-[50vh] md:h-[55vh] bg-middle-blue lg:hidden flex flex-col z-20`}>
      <div className='flex flex-col m-auto text-xl gap-5'>
        <Link className='hover:text-ternary-color' href='/'>HOME</Link>
        <Link className='hover:text-ternary-color' href='/courses'>COURSES</Link>
        <Link className='hover:text-ternary-color' href='/programs'>PROGRAMS</Link>
        <Link className='hover:text-ternary-color' href={'/articles/about-us'}>ABOUT</Link>
      </div>
    </div>
  )
}

export default MenuDropdown