import React from 'react'

const SearchSideBox = () => {
  return (
    <div className='bg-white self-start w-full lg:w-[20%] px-7 py-5 gap-5 md:px-7 md:py-10 flex flex-col md:gap-10 rounded order-first lg:order-last'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-lg'>Search</h3>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='flex flex-col gap-3 md:gap-7 md:flex-row lg:flex-col'>
        <input className='p-3 text-base border rounded-md outline-none border-dark-blue' type="text" placeholder='Search courses...' />
        <button className='w-full md:w-[200px] lg:w-full px-3 py-3 bg-dark-blue text-white rounded-lg'>Register</button>
      </div>    
    </div>
  )
}

export default SearchSideBox