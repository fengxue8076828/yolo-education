import React from 'react'
import ListHeader from '@/app/components/ListHeader'
import PriceBox from '@/app/components/PriceBox'
import Image from 'next/image'
import course from '@/public/course.png'
import Button from '@/app/components/Button'
import RegisterForm from '@/app/components/RegisterForm'
import { PiCalendarBlankLight, PiPencilBold } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { LuPencil } from 'react-icons/lu'
import { getProgramById } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import  {format} from 'date-fns'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Link from 'next/link'
import PortableTextComponent from '@/app/components/PortableTextComponent'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'
import { FaTiktok } from "react-icons/fa";
import { SiXiaohongshu } from "react-icons/si";

export const revalidate = 60

enum Description {
    descHu="descriptionhu",
    descEn="descriptionen",
    descCn="descriptioncn"
}

const ProgramDetail = async({params,searchParams}:{params:{id:string},searchParams:{lang?:string}}) => {
    const program = await getProgramById(params.id)
    const programTime = new Date(program.time)
    const formattedDate = format(programTime,'yyyy-MM-dd')
    const formattedTime = format(programTime,'HH:mm')
    const language = searchParams.lang?searchParams.lang:"hu"

    const descriptionName:Description="description".concat(language) as Description

  return (
    <>
    <Menubar lang={language}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
    <ListHeader text={program.name.find((item)=>item._key===language)?.value || program.name[0].value} />
    <div className='flex flex-col lg:flex-row gap-5 px-3 py-8 md:px-10 md:py-20'>
        <div className='w-full lg:w-[80%] bg-white p-5 md:p-16 rounded flex flex-col items-center'>
            <div className='w-full h-[450px] mb-10 relative'>
                <Image className='object-cover' src={urlFor(program.image).url()} alt='course' layout='fill' />
            </div>
            
            <div className='min-h-[80vh] pt-16 w-full'>
                <div className='flex flex-col'>
                    <div className='flex flex-wrap gap-10 gap-y-3 md:gap-16 md:gap-y-5 items-center'>
                        <div className='flex items-center gap-3'>
                            <PiCalendarBlankLight className='text-2xl text-ternary-color' />
                            <h4 className='text-sm md:text-base'>{`${formattedDate}`}</h4>
                        </div>
                        <div className='flex items-center gap-3'>
                            <CiClock2 className='text-2xl text-ternary-color' />
                            <h4 className='text-sm md:text-base'>{`${formattedTime}`}</h4>
                        </div>
                    </div>
                    <div className='py-16'>
                        <PortableText 
                            value={program[descriptionName]}
                            components={PortableTextComponent}
                         />
                    </div>
                    <div className='flex flex-col md:flex-row flex-wrap mb-16 gap-16'>
                        <div className='flex flex-col gap-10 flex-1'>
                            <div className='text-2xl flex flex-col gap-2'>
                                <h2 className='font-extrabold'>{language==="hu"?"Program információk":language==="en"?"Program information":"活动信息"}:</h2>
                                <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>{language==="hu"?"Tanár":language==="en"?"Teacher":"老师"}:</span>{program.teacher.name}
                                    </h3>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>{language==="hu"?"Tanárok":language==="en"?"Teachers":"所有老师"}:</span>{program.teachers}
                                    </h3>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>{language==="hu"?"Név":language==="en"?"Name":"活动名称"}: </span>{program.name.find((item)=>item._key===language)?.value || program.name[0].value}
                                    </h3>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'> {language==="hu"?"Tantárgy":language==="en"?"Subject":"活动主题"}: </span>{program.subject.find((item)=>item._key===language)?.value || program.subject[0].value}
                                    </h3>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>{language==="hu"?"Elhelyezkedés":language==="en"?"Location":"活动地点"}: </span>{program.location}
                                    </h3>
                                </div>
                            {
                                program.startDate&&program.startDate.map((date,index)=>{
                                    const endDate = new Date(date)
                                    endDate.setDate(endDate.getDate() + 14)
                                    return <div key={index} className='flex gap-3 items-center'>
                                            <LuPencil className='text-xl' />
                                            <h3 className='text-lg'>
                                                <span className='font-extrabold'>{language==="hu"?`${index+1}. időszak`:language==="en"?`Period ${index+1}`:`第${index+1}期`}: </span>
                                                {
                                                    language==="hu"?`${date}-től ${format(endDate,"yyyy-MM-dd")}-ig`:
                                                    language==="en"?`from ${date} to ${format(endDate,"yyyy-MM-dd")}`:`从 ${date} 到 ${format(endDate,"yyyy-MM-dd")}`
                                                }
                                            </h3>                              
                                        </div>
                                            
                                })
                            }
                                <div className='flex gap-3 items-center'>
                                    <LuPencil className='text-xl' />
                                    <h3 className='text-lg'><span className='font-extrabold'>{language==="hu"?"Regisztráció állapota":language==="en"?"Registration Status":"报名状态"}: </span>
                                    {
                                        program.status?
                                        (language==="hu"?"Regisztráció":language==="en"?"Enrollment in progress":"报名中"):
                                        (language==="hu"?"A regisztráció véget ért":language==="en"?"Enrollment ended":"报名已结束")
                                    }
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 flex-1'>
                            <div className='text-2xl flex flex-col gap-2'>
                                <h2 className='font-extrabold'>{language==="hu"?"Keresse meg ezt a programot":language==="en"?"Find this program":"查看我们社交媒体页面"}:</h2>
                                <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                            </div>
                            <div className='flex gap-10 items-center'>
                                {
                                    program.tiktokLink&&
                                    <Link href={program.tiktokLink}>
                                        <FaTiktok className='text-2xl' />
                                    </Link>
                                }
                                {
                                    program.xiaohongshuLink&&
                                    <Link href={program.xiaohongshuLink}>
                                        <SiXiaohongshu className='text-4xl' />
                                    </Link>
                                }
                                {
                                    program.facebookLink&&
                                    <Link href={program.facebookLink}>
                                    <FaFacebookSquare className='text-2xl' />
                                </Link>
                                }
                                {
                                    program.youtubeLink&&
                                    <Link href={program.youtubeLink}>
                                        <IoLogoYoutube className='text-2xl' />
                                    </Link>

                                }
                                
                                
                            </div>
                        </div>
                    </div>
                    {
                        program.status&&
                        <div id='program-register' className='mt-16'>
                            <div className='flex flex-col gap-1  my-16'>
                            <h1 className='text-2xl font-extrabold mb-3'>{language==="hu"?"Regisztrálja ezt a programot":language==="en"?"Register the program":"注册这个活动"}</h1>
                            <span className='w-[50px] h-[2px] bg-ternary-color'></span>
                            </div>
                            <RegisterForm type='program' dates={program.startDate} activityName={program.name.find((item)=>item._key===language)?.value || program.name[0].value} lang={language} />
                        </div>
                    }
                    
                    
                </div>
            </div>
        </div>           
        <PriceBox price={program.price} status={program.status} lang={language} />
    </div>
</div>
<Footer lang={language} />
</>
  )
}

export default ProgramDetail