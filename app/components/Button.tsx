"use client"
import React from 'react'

const Button = ({text,clickHandler}:{text:string,clickHandler:()=>void}) => {
  return (
    <button className='px-3 py-2 text-sm md:text-base md:px-10 md:py-3 bg-ternary-color font-inherit text-white rounded-md hover:bg-dark-ternary-color' onClick={clickHandler}>{text}</button>
  )
}

export default Button