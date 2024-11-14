import React,{useState,useEffect} from 'react'
import { MenuitemType } from '@/sanity/lib/queries'

import Link from 'next/link'
interface SubmenuPropsType {
    menuitems:MenuitemType[] | null,
    from?:string
    clearHandler?:()=>void,
    lang:string
}
const Submenu = ({menuitems,from,clearHandler,lang}:SubmenuPropsType) => {
  return (
    <div className={`bg-shallow-blue ${from==="desktop"?"absolute top-[120%] left-0":""} opacity-95 flex flex-col gap-3 backdrop-blur-lg p-5 text-sm leading-5 rounded-md w-[170px] z-20`} onMouseLeave={clearHandler}>
        {
             menuitems && menuitems.map(menuitem=>(
                <Link className='hover:text-ternary-color' key={menuitem._id} href={menuitem.link?menuitem.link.indexOf("#")===-1?menuitem.link.concat(`?lang=${lang}`):`${menuitem.link.slice(0, menuitem.link.indexOf("#"))}?lang=${lang}${menuitem.link.slice(menuitem.link.indexOf("#"))}`:""}>{menuitem.text.find((item)=>item._key===lang)?.value}</Link>
            ))           
        }
    </div>
  )
}

export default Submenu