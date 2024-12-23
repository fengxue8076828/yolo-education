"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const PriceBox = ({price,lang,status}:{price:string,lang:string,status?:boolean}) => {
  const router = useRouter()
  return (
    <div className='bg-white self-start w-full lg:w-[20%] px-7 py-5 gap-5 md:px-7 md:py-10 flex flex-col md:gap-10 rounded order-first lg:order-last'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-lg'>{lang==="hu"?"Ár":lang==="en"?"Price":"价格"}</h3>
        <span className='w-[50px] h-[2px] bg-ternary-color'></span>
      </div>
      <div className='flex flex-col gap-3 md:gap-7 md:flex-row lg:flex-col'>
        <h3 className='text-lg'>HUF {price}</h3>
        {
          (status===undefined||status===true)&&<button className='w-full md:w-[200px] lg:w-full px-3 py-3 bg-dark-blue text-white rounded-lg' onClick={()=>{router.push("#register")}}>{lang==="hu"?"Regisztráció":lang==="en"?"Registration":"注册"}</button>
        }
        
      </div>    
    </div>
  )
}

export default PriceBox