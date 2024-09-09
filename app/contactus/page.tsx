import React from 'react'
import ListHeader from '../components/ListHeader'
import Search from '../components/Search'
import contact from "@/public/contactus.png"
import Image from 'next/image'
import { getFooter } from '@/sanity/lib/queries'
import { BiSolidNavigation } from "react-icons/bi";
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'

const Contact = async({searchParams}:{searchParams:{lang?:string}}) => {
  const footer = await getFooter()
  const language = searchParams.lang?searchParams.lang:"hu"
  return (
    <>
    <Menubar lang={language}  />
    <div className='bg-shallow-blue'>
        <ListHeader text={language==="hu"?"Vegye fel velünk a kapcsolatot":language==="en"?"Contact us":"联系我们"} />
        <div className='flex p-10 gap-5 items-start flex-col lg:flex-row m-h-[100vh]'>
                <div className='flex flex-col md:flex-row gap-3 p-10 w-[100%] lg:w-[75%] bg-white'>
                  <div className='flex flex-col w-[100%] md:w-[50%]'>
                    <div>
                    <Image src={contact} alt="contact" width={1000} height={1000} />
                    </div>
                    <div className=' mt-5 flex flex-col gap-3'>
                      <div className='flex justify-between items-center gap-2 text-sm lg:text-lg'>
                        <BiSolidNavigation className='min-w-[20%]' />
                        <h3 className='text-left flex-grow'>
                          {language==="hu"?"Telefon":language==="en"?"Telephone":"联系电话"}: {footer.telephone}
                        </h3>
                      </div>
                      <div className='flex justify-between items-center gap-2 text-sm lg:text-lg'>
                        <BiSolidNavigation className='min-w-[20%]' />
                        <h3 className='text-left flex-grow'>
                          {language==="hu"?"MobileTelefon":language==="en"?"Mobile":"手机"}: {footer.mobilephone}
                        </h3>
                      </div>
                      <div className='flex justify-between items-center gap-2 text-sm lg:text-lg'>
                        <BiSolidNavigation className='min-w-[20%]' />
                        <h3 className='text-left flex-grow'>
                          Email: {footer.email}
                        </h3>
                      </div>
                      <div className='flex justify-between items-center gap-2 text-sm lg:text-lg'>
                        <BiSolidNavigation className='min-w-[20%]' />
                        <h3 className='text-left flex-grow'>
                          {language==="hu"?"Cím":language==="en"?"Address":"地址"}: {footer.address}
                        </h3>
                        
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col w-[100%] md:w-[50%]'>
                    <div className='pt-16 flex flex-col gap-3 mb-5'>
                        <h2 className='text-3xl font-bold mb-3'>{language==="hu"?"Érdekli a használat?":language==="en"?"Interested in us?":"对我们感兴趣?"} <br/>
                        {language==="hu"?"Ne habozzon kapcsolatba lépni velünk!":language==="en"?"Do not hesitate to contact us!":"请随时联系我们！"}</h2>
                        <p>{footer.description?.find((item)=>item._key===language)?.value}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                      <iframe className='w-full h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.040367034088!2d19.017983576286614!3d47.508605071180966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dea3e3a32305%3A0x139746781a246c4a!2zQnVkYXBlc3QsIFN6aWzDoWd5aSBFcnpzw6liZXQgZmFzb3IgMSwgMTAyNCDljIjniZnliKk!5e0!3m2!1szh-CN!2sse!4v1712764935496!5m2!1szh-CN!2sse" loading="lazy"></iframe>

                      <iframe className='w-full h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1284.3236055405987!2d19.12027104619131!3d47.48306142514634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd3341c48f6d%3A0x771740861261c3f6!2zQnVkYXBlc3QsIEvFkWLDoW55YWkgw7p0IDQ5LCAxMTAx!5e0!3m2!1szh-CN!2shu!4v1725544992667!5m2!1szh-CN!2shu" width="600" height="450" loading="lazy" ></iframe>
                    </div>
                      
                  </div> 
                </div>
            <Search type='courseandprogram' lang={language} />
        </div>
    </div>
    <Footer lang={language} />
</>
  )
}

export default Contact