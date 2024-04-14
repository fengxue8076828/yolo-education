import React from 'react'
import ListHeader from '../components/ListHeader'
import Search from '../components/Search'
import contact from "@/public/contactus.png"
import Image from 'next/image'
import { getFooter } from '@/sanity/lib/queries'
import { BiSolidNavigation } from "react-icons/bi";

const Contact = async() => {
  const footer = await getFooter()
  return (
    <div className='bg-shallow-blue'>
        <ListHeader text="Contact us" />
        <div className='flex p-10 gap-5 items-start flex-col lg:flex-row m-h-[100vh]'>
                <div className='flex flex-col md:flex-row gap-3 p-10 w-[100%] lg:w-[75%] bg-white'>
                  <div className='flex flex-col w-[100%] md:w-[50%]'>
                    <div>
                    <Image src={contact} alt="contact" width={1000} height={1000} />
                    </div>
                    <div className='pl-12 mt-5 flex flex-col gap-3'>
                      <div className='flex items-center gap-3 text-lg lg:text-xl'>
                        <BiSolidNavigation />
                        Telefon: {footer.telephone}
                      </div>
                      <div className='flex items-center gap-3 text-lg lg:text-xl'>
                        <BiSolidNavigation />
                        MobileTelefon: {footer.mobilephone}
                      </div>
                      <div className='flex items-center gap-3 text-lg lg:text-xl'>
                        <BiSolidNavigation />
                        Email: {footer.email}
                      </div>
                      <div className='flex items-center gap-3 text-lg lg:text-xl'>
                        <BiSolidNavigation />
                        Address: {footer.address}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col w-[100%] md:w-[50%]'>
                    <div className='pt-16 flex flex-col gap-3 mb-5'>
                        <h2 className='text-3xl font-bold mb-3'>Érdekli a használat? <br/>
                        Ne habozzon kapcsolatba lépni velünk!</h2>
                        <p>{footer.description}</p>
                    </div>
                    <div>
                      <iframe className='w-full h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.040367034088!2d19.017983576286614!3d47.508605071180966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dea3e3a32305%3A0x139746781a246c4a!2zQnVkYXBlc3QsIFN6aWzDoWd5aSBFcnpzw6liZXQgZmFzb3IgMSwgMTAyNCDljIjniZnliKk!5e0!3m2!1szh-CN!2sse!4v1712764935496!5m2!1szh-CN!2sse" loading="lazy"></iframe>
                    </div>
                  </div> 
                </div>
            <Search type='course' />
        </div>
    </div>
  )
}

export default Contact