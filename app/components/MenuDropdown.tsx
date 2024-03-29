import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { MenuitemType } from '@/sanity/lib/queries'
import { getTopMenu } from '@/sanity/lib/queries'
import { getSubMenu } from '@/sanity/lib/queries'
import Submenu from './Submenu'

const MenuDropdown = ({
        dropdownOpen,
    }:{
        dropdownOpen:boolean,
    }) => {
      const [topMenus,setTopMenus] = useState<MenuitemType[]|null>(null)
      const [menuId,setMenuId] = useState("")
      const [subMenus,setSubMenus] = useState<MenuitemType[]|null>(null)
      useEffect(()=>{
        const fetchTopMenus = async() => {
          const topMenus = await getTopMenu()
          setTopMenus(topMenus)
        }
        fetchTopMenus()
      },[])
      useEffect(()=>{
        const fetchSubMenu = async(id:string) => {
          const subMenus = await getSubMenu(id)
          setSubMenus(subMenus)
        }
        if(menuId !== ""){
          fetchSubMenu(menuId)
        }
      },[menuId])
  return (
    <div className={`${!dropdownOpen?'hidden':'block'} absolute left-0 top-full w-full h-[100vh] md:h-[65vh] bg-middle-blue lg:hidden flex z-20 items-start pl-10 md:pl-32 pt-24 gap-10`}>
      <div className='flex flex-col text-xl gap-5 items-end'>
        {
                    topMenus && (
                      topMenus.map(topMenu=>(
                        <span key={topMenu._id} className='block relative'>
                          <Link className='hover:text-ternary-color' href={topMenu.link?topMenu.link:"/"} onClick={()=>setMenuId(topMenu._id)}>{topMenu.text}</Link>
                        </span>                   
                      ))
                    )
        }
      </div>
      <div>
      {
         subMenus && subMenus.length > 0?(
           <Submenu menuitems={subMenus} />
        ):""
      }
      </div>
    </div>
  )
}

export default MenuDropdown