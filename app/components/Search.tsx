import { Input } from 'postcss'
import React from 'react'
import Button from './Button'

const Search = () => {
  return (
    <div className='bg-white self-start w-full lg:w-[20%] px-7 py-5 gap-5 md:px-7 md:py-10 flex flex-col md:gap-10 rounded order-first lg:order-last'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-lg'>Search</h3>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='flex flex-col gap-3 md:gap-7 md:flex-row lg:flex-col'>
        <input type='text' className='border border-1 border-gray-500 px-3 py-3 rounded-lg w-full md:w-[400px] lg:w-full' placeholder='your course...' />
        <button className='w-full md:w-[200px] lg:w-full px-3 py-3 bg-dark-blue text-white rounded-lg'>Search</button>
      </div>
      
    </div>
  )
}

export default Search