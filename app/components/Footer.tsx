import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import qrcode from '@/public/QRCode.png'
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { getFooter } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/client';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMobileButton } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { SiXiaohongshu } from "react-icons/si";

export const revalidate = 60


const Footer = async({lang}:{lang:string}) => {
    const footer = await getFooter()
  return (
    <div className='text-white py-10 px-5 md:pt-32 md:pb-10 text-xs xl:text-base flex flex-col items-center relative bg-darker-blue'>
        <div className='w-4/5 flex flex-col lg:flex-row gap-24'>
            <div className='w-2/3 flex flex-col lg:flex-row gap-24 mb-10'>
                {
                    footer.groups.map((group,index)=>(
                        <div key={index} className='flex flex-col gap-1 lg:gap-3'>
                            <div className='flex flex-col gap-3'>
                                <h3>{group.title.find((item)=>item._key===lang)?.value}</h3>
                                <span className='block w-[30px] h-[3px] bg-golden mb-7' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                {
                                    group.links.map((link,index)=>(
                                        <Link key={index} href={link.url.concat(`?lang=${lang}`)}>{link.text.find((item)=>item._key===lang)?.value}</Link>
                                    ))
                                }
                            </div>           
                        </div>
                    ))
                }
                <div className='flex flex-col gap-7'>
                    <div className='flex flex-col gap-3'>
                        <h3>{lang==="hu"?"Érintkezés":lang==="en"?"Contact":"联系方式"}</h3>
                        <span className='block w-[30px] h-[3px] bg-golden mb-2 lg:mb-5' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3 items-center'>
                            <BsFillTelephoneFill className='text-white text-lg' />
                            <h3>{footer.telephone}</h3>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaMobileButton className='text-white text-lg' />
                            <h3>{footer.mobilephone}</h3>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <MdOutlineMail className='text-white text-lg' />
                            <h3>{footer.email}</h3>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaLocationDot className='text-white text-lg' />
                            <h3>{footer.address}</h3>
                        </div>                      
                    </div>                
                </div>
            </div>
            <div className='flex flex-row lg:flex-col gap-1 lg:gap-3 w-full lg:w-[300px] items-center lg:items-start'>
                <div className='min-w-32 bg-white p-1 flex'>
                    <Image src={urlFor(footer.wechat).url()} width={150} height={150} alt='qrcode' className='m-auto' />
                </div>
                <p className='text-sm w-full'>
                {footer.description.find((item)=>item._key===lang)?.value}
                </p>
            </div>
        </div>
        <div className='flex items-center gap-10 mt-16'>
            <span className='border-[1px] border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                <Link href={footer.tiktok} target='_blank'>
                    <FaTiktok className='text-2xl' />
                </Link>
                
            </span>
            <span className='border-[1px] border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                <Link href={footer.xiaohongshu} target='_blank'>
                    <SiXiaohongshu className='text-2xl' />
                </Link>
                
            </span>
            <span className='border-[1px] border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                <Link href={footer.facebook} target='_blank'>
                    <CgFacebook className='text-2xl'  />
                </Link>
                
            </span>
            <span className='border-[1px] border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                <Link href={footer.instagram} target='_blank'>
                    <BsInstagram className='text-2xl'  />
                </Link>
                
            </span>  
        </div>
        <div className='w-4/5 my-5 h-[1px] bg-gray-500'></div>
        <p className='text-gray-500'>Copyrights © All Rights Reserved </p>
    </div>
  )
}

export default Footer