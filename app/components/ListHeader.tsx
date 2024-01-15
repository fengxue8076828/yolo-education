import React from 'react'

const ListHeader = ({text}:{text:string}) => {
  return (
    <div className='bg-[url("/classroom.png")] bg-no-repeat bg-cover bg-center py-20 px-32 md:py-32 flex flex-col items-center md:items-start relative'>
        <div className='absolute inset-0 bg-middle-blue bg-opacity-70'>
        </div>
        <h1 className='text-ternary-color text-3xl md:text-5xl z-10 font-extrabold'>{text}</h1>
    </div>
  )
}

export default ListHeader