import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import qrcode from '@/public/QRCode.png'
import { FaXTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='text-white py-10 px-5 md:pt-32 md:pb-10 flex flex-col items-center relative bg-darker-blue'>
        <div className='w-4/5 flex flex-col lg:flex-row justify-between'>
            <div className='w-1/2 flex flex-col lg:flex-row gap-10 lg:justify-between mb-10'>
                <div className='flex flex-col gap-1 lg:gap-3'>
                    <div className='flex flex-col gap-3'>
                        <h3>Company</h3>
                        <span className='block w-[30px] h-[3px] bg-golden mb-2 lg:mb-5' />
                    </div>
                    <div className='flex flex-row lg:flex-col gap-3'>
                        <Link href={''}>Home</Link>
                        <Link href={''}>About</Link>
                        <Link href={''}>Contact</Link>
                        <Link href={''}>Blog</Link>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-3'>
                        <h3>Infomation</h3>
                        <span className='block w-[30px] h-[3px] bg-golden mb-2 lg:mb-5' />
                    </div>
                    <div className='flex flex-row lg:flex-col gap-3'>
                        <Link href={''}>Home</Link>
                        <Link href={''}>About</Link>
                        <Link href={''}>Contact</Link>
                        <Link href={''}>Blog</Link>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-3'>
                        <h3>Contact</h3>
                        <span className='block w-[30px] h-[3px] bg-golden mb-2 lg:mb-5' />
                    </div>
                    <div className='flex flex-row lg:flex-col gap-3'>
                        <Link href={''}>Home</Link>
                        <Link href={''}>About</Link>
                        <Link href={''}>Contact</Link>
                        <Link href={''}>Blog</Link>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-row lg:flex-col gap-1 lg:gap-3 w-full lg:w-[300px] items-center lg:items-start'>
                <div className='min-w-32'>
                    <Image src={qrcode} width={100} height={100} alt='qrcode' />
                </div>
                <p className='text-sm'>
                Lorem ipsum dolor sit,amet,consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sitLorem ipsum dolor sit,amet,consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit
                </p>
            </div>
        </div>
        <div className='flex items-center gap-10 mt-16'>
            <span className='border-[1px] border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                <FaXTwitter className='text-2xl' />
            </span>
            <span className='border-[1px] border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                <CgFacebook className='text-2xl'  />
            </span>
            <span className='border-[1px] border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all'>
                <BsInstagram className='text-2xl'  />
            </span>  
        </div>
        <div className='w-4/5 my-5 h-[1px] bg-gray-500'></div>
        <p className='text-gray-500'>Copyrights © All Rights Reserved </p>
    </div>
  )
}

export default Footer