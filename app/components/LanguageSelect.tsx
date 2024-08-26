"use client"
import React,{useState} from 'react'
import chineseFlag from "@/public/chinese-flag.png"
import hungarianFlag from "@/public/hungarian-flag.png"
import americanFlag from "@/public/american-flag.png"
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const LanguageSelect = ({lang}:{lang:string}) => {
//   const [showLanList,setShowLanList] = useState(false)
    const router = useRouter()

    const switchLanguage = (l:string) => {
        router.push(`/?lang=${l}`)
    }

  return (
    <div className='relative mt-2'>
        <select name="selectLanguage" value={lang} onChange={(e)=>switchLanguage(e.target.value)} className='px-2 py-1 outline-none'>
            <option value="en">English</option>
            <option value="hu">Magyarul</option>
            <option value="cn">中文</option>
        </select>
      {/* <div className='flex items-center gap-2 px-3 py-1 bg-white rounded' 
      >
        <h5>{lang==="en"?"English":lang==="cn"?"中文":lang==="hu"?"Magyarul":"language"}</h5>
        <IoIosArrowDown onClick={()=>setShowLanList((pre)=>!pre)} />
      </div>
      {
        showLanList && 
        <div className='absolute left-0 top-10 rounded'>
          <Link className='flex px-2 pt-2 pb-1 bg-white w-[150px] overflow-hidden cursor-pointer' href={`http://localhost:3000/?lang=en`}>
            <Image src={americanFlag} width={30} height={30} alt='en_flag' />
            <h5>English</h5>
          </Link>
          <Link className='flex px-2 pt-2 pb-1 bg-white w-[150px] overflow-hidden cursor-pointer'  href={`http://localhost:3000/?lang=cn`}>
            <Image src={chineseFlag} width={30} height={30} alt='cn_flag' />
            <h5>中文</h5>
          </Link>
          <Link className='flex px-2 pt-2 pb-1 bg-white w-[150px] overflow-hidden cursor-pointer'  href={`http://localhost:3000/`}>
            <Image src={hungarianFlag} width={30} height={20} alt='hu_flag' />
            <h5>Magyarul</h5>
          </Link>
        </div>
      } */}
      
    </div>
  )
}

export default LanguageSelect