import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { MenuitemType } from '@/sanity/lib/queries'
import { getTopMenu } from '@/sanity/lib/queries'
import { getSubMenu } from '@/sanity/lib/queries'
import Submenu from './Submenu'

const MenuDropdown = ({
        dropdownOpen,
        lang
    }:{
        dropdownOpen:boolean,
        lang:string
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
    <div className={`${!dropdownOpen?'hidden':'block'} absolute left-0 top-full w-full h-[100vh] bg-middle-blue lg:hidden flex z-20 items-start pl-5 md:pl-32 pt-24 gap-10`}>
      <div className='flex flex-col text-xl gap-5 items-end w-[40%]'>
        {
                    topMenus && (
                      topMenus.map(topMenu=>(
                        <span key={topMenu._id} className='block relative sm:text-sm md:text-base text-right'>
                          <Link className='hover:text-ternary-color text-right' href={topMenu.link?topMenu.link.indexOf("#")===-1?topMenu.link.concat(`?lang=${lang}`):`${topMenu.link.slice(0, topMenu.link.indexOf("#"))}?lang=${lang}${topMenu.link.slice(topMenu.link.indexOf("#"))}`:""} onTouchStart={()=>setMenuId(topMenu._id)}>{topMenu.text.find((item)=>item._key===lang)?.value}</Link>
                        </span>                   
                      ))
                    )
        }
      </div>
      <div>
      {
         subMenus && subMenus.length > 0?(
           <Submenu menuitems={subMenus} lang={lang} />
        ):""
      }
      </div>
    </div>
  )
}

export default MenuDropdown