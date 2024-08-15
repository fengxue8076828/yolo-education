import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { getTopMenu } from '@/sanity/lib/queries';
import { MenuitemType } from '@/sanity/lib/queries';
import { getSubMenu } from '@/sanity/lib/queries';
import Submenu from './Submenu';

interface MenuProps {
  dropdownOpened:boolean,
  setDropdownOpened:React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({dropdownOpened,setDropdownOpened}:MenuProps) => {
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

  const clearMenuId = () => {
    setMenuId("")
  }
  return (
    <>
      <div className='hidden lg:flex justify-between items-center gap-9'>
        {
          topMenus && (
            topMenus.map(topMenu=>(
              <span key={topMenu._id} className='block relative'>
                <Link className='hover:text-ternary-color' href={topMenu.link?topMenu.link:""} onMouseEnter={()=>setMenuId(topMenu._id)}>{topMenu.text}</Link>
                {
                  topMenu._id === menuId && subMenus && subMenus.length > 0?(
                    <Submenu menuitems={subMenus} from='desktop' clearHandler={clearMenuId} />
                  ):""
                }
              </span>
              
            ))
          )
        }
      </div>
      <div className='lg:hidden text-3xl cursor-pointer' onClick={()=>setDropdownOpened(pre=>!pre)}>
        {
          !dropdownOpened ? <GiHamburgerMenu /> : <GrClose />
        }
        
      </div>
    </>
    
  )
}

export default Menu