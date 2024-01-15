import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const Searchbox = () => {
  return (
    <div className='items-center relative hidden lg:flex'>
        <input className='py-2 px-4 font-inherit bg-white rounded w-96 outline-none' type='text' placeholder='find your course...' />
        <div className='absolute right-[10px]'>
            <FaMagnifyingGlass/>
        </div>
        
    </div>
  )
}

export default Searchbox