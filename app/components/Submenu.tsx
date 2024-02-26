import React,{useState,useEffect} from 'react'
import { MenuitemType } from '@/sanity/lib/queries'
import Link from 'next/link'
interface SubmenuPropsType {
    menuitems:MenuitemType[] | null,
    from?:string
    clearHandler?:()=>void
}
const Submenu = ({menuitems,from,clearHandler}:SubmenuPropsType) => {
  return (
    <div className={`bg-shallow-blue ${from==="desktop"?"absolute top-[120%] left-0":""} opacity-95 flex flex-col gap-3 backdrop-blur-lg p-5 text-sm leading-5 rounded-md w-auto z-20`} onMouseLeave={clearHandler}>
        {
             menuitems && menuitems.map(menuitem=>(
                <Link className='hover:text-ternary-color' key={menuitem._id} href={menuitem.link?menuitem.link:"/"}>{menuitem.text}</Link>
            ))           
        }
    </div>
  )
}

export default Submenu