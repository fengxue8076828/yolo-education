import React from 'react'
import ListHeader from '../components/ListHeader'
import Button from '../components/Button'
import Link from 'next/link'
import { IoMdGlobe } from "react-icons/io";
import Image from 'next/image';
import { getForeignStudyCovers } from '@/sanity/lib/queries';
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'
import { urlFor } from '@/sanity/lib/client';

export const revalidate = 60

const StudyAbroad = async({searchParams}:{searchParams:{lang?:string}}) => {
    const foreignStudyCovers = await getForeignStudyCovers()
    const language = searchParams.lang?searchParams.lang:"hu"
  return (
    <>
    <Menubar lang={language}  />
    <div className='bg-shallow-blue min-h-[100vh]'>
        <ListHeader text={language==="hu"?"KÜlFÖlD ÉS TANULMÁNYI ÚT":language==="en"?"ABROAD AND STUDY TRAVEL":"留学和游学"} />
        <div className='flex flex-col px-0 py-10 lg:p-10'>
            {
                foreignStudyCovers.length > 0 &&
                foreignStudyCovers.map((cover,index)=>{

                    if(index % 2 == 0){
                        const image1 = cover.pictures&&cover.pictures.length>0?urlFor(cover.pictures[0]).url():'/happystudents.jpg'
                        const image2 = cover.pictures&&cover.pictures.length>1?urlFor(cover.pictures[1]).url():'/graduatestudents.jpg'
                        const image3 = cover.pictures&&cover.pictures.length>2?urlFor(cover.pictures[2]).url():'/studying.jpg'
                        return (<div key={index} id={cover.slug.current} className='grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 w-[100%] h-auto min-h-[800px]'>
                            <div
                            style={{
                                backgroundImage:`url(${image1})`
                            }}
                            className='bg-no-repeat bg-cover bg-center row-start-1 col-start-1 flex flex-col relative'>
                            <div className='absolute inset-0 bg-lime bg-opacity-90'>
                            </div>
                            <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                            <IoMdGlobe className="text-3xl text-white" />
                            <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{cover.features.length>0&&cover.features[0].text.find((item)=>item._key===language)?.value}</h2>
                            </div>
                        </div>
    
                    <div className='bg-light-blue row-start-1 col-start-2 flex flex-col'>
                        <div className='m-auto flex flex-col gap-5 z-10'>
                            <Image src={"/university-icon.png"} alt='university-icon' width={120} height={120} />
                        </div>
                    </div>
                    <div
                    style={{
                        backgroundImage:`url(${image3})`
                    }}
                    className='row-start-2 col-start-1 bg-no-repeat bg-cover relative flex'>
                    </div>
                    <div className='bg-golden row-start-2 col-start-2 flex flex-col'>
                        <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                            <IoMdGlobe className="text-3xl text-white" />
                            <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{cover.features.length>1&&cover.features[1].text.find((item)=>item._key===language)?.value}</h2>
                        </div>
                    </div>
                    <div
                    style={{
                        backgroundImage:`url(${image2})`
                    }}
                    className='col-span-2 row-span-2 bg-no-repeat bg-cover relative flex py-10 lg:py-0'>
                        <div className='absolute inset-0 bg-dark-blue bg-opacity-30'>
                        </div>
                        <div className='my-auto mr-3 ml-10 text-white z-10 flex flex-col gap-10 items-start'>
                            <div className='flex flex-col gap-1'>
                                <h4 className='tracking-widest text-sm lg:text-lg font-bold'>{cover.subtitle.find((item)=>item._key===language)?.value}</h4>
                                <h2 className='text-3xl lg:text-5xl font-extrabold'>{cover.title.find((item)=>item._key===language)?.value}</h2>
                            </div>
                            <p className='text-sm'>{cover.text.find((item)=>item._key===language)?.value}</p>
                            <Link className='text-white block border border-solid border-white px-5 py-2 rounded-lg hover:text-black hover:bg-white transition font-extrabold' href={`/studyabroad/${cover.slug.current}?lang=${language}`}>{language==="hu"?"Olvasson tovább":language==="en"?"Read More":"详细信息"}</Link>
                        </div>
                        
                    </div>
                </div>)
                }    
                else{
                    const image1 = cover.pictures&&cover.pictures.length>0?urlFor(cover.pictures[0]).url():'/students1.jpg'
                    const image2 = cover.pictures&&cover.pictures.length>1?urlFor(cover.pictures[1]).url():'/students2.jpg'
                    const image3 = cover.pictures&&cover.pictures.length>2?urlFor(cover.pictures[2]).url():'/university.jpg'
                    return (
                        <div key={index} id='travel-study' className='grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 w-[100%] min-h-[800px] h-auto'>
                        <div
                        style={{
                            backgroundImage:`url(${image1})`
                        }}
                        className='bg-no-repeat bg-cover bg-center row-start-1 col-start-1 lg:row-start-1 lg:col-start-3 flex flex-col relative'>
                        </div>
        
                        <div className='bg-dark-blue row-start-1 col-start-2 lg:row-start-1 lg:col-start-4 flex flex-col'>
                            <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                                <IoMdGlobe className="text-3xl text-white" />
                                <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{cover.features.length>0&&cover.features[0].text.find((item)=>item._key===language)?.value}</h2>
                            </div>
                        </div>
                        <div 
                        style={{
                            backgroundImage:`url(${image2})`
                        }}
                        className='row-start-2 col-start-2 lg:row-start-2 lg:col-start-4 bg-no-repeat bg-cover bg-bottom relative flex'>
                        </div>
                        <div className='bg-white row-start-2 col-start-1 lg:row-start-2 lg:col-start-3 flex flex-col'>
                            <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                            <IoMdGlobe className="text-3xl text-black" />
                                <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-black'>{cover.features.length>1&&cover.features[1].text.find((item)=>item._key===language)?.value}</h2>
                            </div>
                        </div>
                        <div
                        style={{
                            backgroundImage:`url(${image3})`
                        }}
                        className='row-start-3 col-start-1 lg:row-start-1 lg:col-start-1 col-span-2 row-span-2 bg-no-repeat bg-cover relative flex py-10 lg:py-0'>
                            <div className='absolute inset-0 bg-dark-blue bg-opacity-30'>
                            </div>
                            <div className='my-auto mr-3 ml-10 text-white z-10 flex flex-col gap-10 items-start'>
                                <div className='flex flex-col gap-1'>
                                    <h4 className='tracking-widest text-sm lg:text-lg font-bold'>{cover.subtitle.find((item)=>item._key===language)?.value}</h4>
                                    <h2 className='text-3xl lg:text-5xl font-extrabold'>{cover.title.find((item)=>item._key===language)?.value}</h2>
                                </div>
                                <p className='text-sm'>{cover.text.find((item)=>item._key===language)?.value}</p>
                                <Link className='text-white block border border-solid border-white px-5 py-2 rounded-lg hover:text-black hover:bg-white transition' href={`/studyabroad/${cover.slug.current}?lang=${language}`}>{language==="hu"?"Olvasson tovább":language==="en"?"Read More":"详细信息"}</Link>
                            </div>
                        </div>
                    </div>
                    )
                }

                })
            }

            {/* <div id='internation-study' className='grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 w-[100%] h-auto min-h-[800px]'>
                <div className='bg-[url("/happystudents.jpg")] bg-no-repeat bg-cover bg-center row-start-1 col-start-1 flex flex-col relative'>
                    <div className='absolute inset-0 bg-lime bg-opacity-90'>
                    </div>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                        <IoMdGlobe className="text-3xl text-white" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{foreignStudyCovers.length>0&&foreignStudyCovers[0].features.length>0&&foreignStudyCovers[0].features[0].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                    
                </div>

                <div className='bg-light-blue row-start-1 col-start-2 flex flex-col'>
                    <div className='m-auto flex flex-col gap-5 z-10'>
                        <Image src={"/university-icon.png"} alt='university-icon' width={120} height={120} />
                    </div>
                </div>
                <div className='row-start-2 col-start-1 bg-[url("/studying.jpg")] bg-no-repeat bg-cover relative flex'>
                </div>
                <div className='bg-golden row-start-2 col-start-2 flex flex-col'>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                        <IoMdGlobe className="text-3xl text-white" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{foreignStudyCovers.length>0&&foreignStudyCovers[1].features.length>1&&foreignStudyCovers[0].features[0].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                </div>
                <div className='col-span-2 row-span-2 bg-[url("/graduatestudents.jpg")] bg-no-repeat bg-cover relative flex py-10 lg:py-0'>
                    <div className='absolute inset-0 bg-dark-blue bg-opacity-30'>
                    </div>
                    <div className='my-auto mr-3 ml-10 text-white z-10 flex flex-col gap-10 items-start'>
                        <div className='flex flex-col gap-1'>
                            <h4 className='tracking-widest text-sm lg:text-lg font-bold'>{foreignStudyCovers.length>0&&foreignStudyCovers[0].subtitle.find((item)=>item._key===language)?.value}</h4>
                            <h2 className='text-3xl lg:text-5xl font-extrabold'>{foreignStudyCovers.length>0&&foreignStudyCovers[0].title.find((item)=>item._key===language)?.value}</h2>
                        </div>
                        <p className='text-sm'>{foreignStudyCovers.length>0&&foreignStudyCovers[0].text.find((item)=>item._key===language)?.value}</p>
                        <Link className='text-white block border border-solid border-white px-5 py-2 rounded-lg hover:text-black hover:bg-white transition font-extrabold' href={`/studyabroad/${foreignStudyCovers.length>0&&foreignStudyCovers[0].slug.current}?lang=${language}`}>{language==="hu"?"Olvasson tovább":language==="en"?"Read More":"详细信息"}</Link>
                    </div>
                    
                </div>
            </div>
            <div id='travel-study' className='grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 w-[100%] min-h-[800px] h-auto'>
                <div className='bg-[url("/students1.jpg")] bg-no-repeat bg-cover bg-center row-start-1 col-start-1 lg:row-start-1 lg:col-start-3 flex flex-col relative'>
                </div>

                <div className='bg-dark-blue row-start-1 col-start-2 lg:row-start-1 lg:col-start-4 flex flex-col'>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                        <IoMdGlobe className="text-3xl text-white" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{foreignStudyCovers.length>2&&foreignStudyCovers[2].features.length>0&&foreignStudyCovers[2].features[0].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                </div>
                <div className='row-start-2 col-start-2 lg:row-start-2 lg:col-start-4 bg-[url("/students2.jpg")] bg-no-repeat bg-cover bg-bottom relative flex'>
                </div>
                <div className='bg-white row-start-2 col-start-1 lg:row-start-2 lg:col-start-3 flex flex-col'>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                    <IoMdGlobe className="text-3xl text-black" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-black'>{foreignStudyCovers.length>2&&foreignStudyCovers[2].features.length>1&&foreignStudyCovers[2].features[1].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                </div>
                <div className='row-start-3 col-start-1 lg:row-start-1 lg:col-start-1 col-span-2 row-span-2 bg-[url("/university.jpg")] bg-no-repeat bg-cover relative flex py-10 lg:py-0'>
                    <div className='absolute inset-0 bg-dark-blue bg-opacity-30'>
                    </div>
                    <div className='my-auto mr-3 ml-10 text-white z-10 flex flex-col gap-10 items-start'>
                        <div className='flex flex-col gap-1'>
                            <h4 className='tracking-widest text-sm lg:text-lg font-bold'>{foreignStudyCovers.length>2&&foreignStudyCovers[2].subtitle.find((item)=>item._key===language)?.value}</h4>
                            <h2 className='text-3xl lg:text-5xl font-extrabold'>{foreignStudyCovers.length>2&&foreignStudyCovers[2].title.find((item)=>item._key===language)?.value}</h2>
                        </div>
                        <p className='text-sm'>{foreignStudyCovers.length>2&&foreignStudyCovers[2].text.find((item)=>item._key===language)?.value}</p>
                        <Link className='text-white block border border-solid border-white px-5 py-2 rounded-lg hover:text-black hover:bg-white transition' href={`/studyabroad/${foreignStudyCovers.length>2&&foreignStudyCovers[2].slug.current}?lang=${language}`}>{language==="hu"?"Olvasson tovább":language==="en"?"Read More":"详细信息"}</Link>
                    </div>
                    
                </div>
            </div> */}

            
            {/* <div id='china-study' className='grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 w-[100%] h-auto min-h-[800px]'>
                <div className='bg-[url("/students3.jpg")] bg-no-repeat bg-cover bg-center row-start-1 col-start-2 flex flex-col relative'>
                <div className='absolute inset-0 bg-lime bg-opacity-90'>
                    </div>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                        <IoMdGlobe className="text-3xl text-black" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-black'>{foreignStudyCovers.length>1&&foreignStudyCovers[1].features.length>0&&foreignStudyCovers[1].features[0].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                    
                </div>

                <div className='bg-light-blue row-start-1 col-start-1 flex flex-col'>
                    <div className='m-auto flex flex-col gap-5 z-10'>
                    <Image src={"/graduate-hat.png"} alt='graduate-hat' width={120} height={120} />
                    </div>
                </div>
                <div className='row-start-2 col-start-2 bg-[url("/students4.jpg")] bg-no-repeat bg-cover relative flex'>
                </div>
                <div className='bg-golden row-start-2 col-start-1 flex flex-col'>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                        <IoMdGlobe className="text-3xl text-white" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{foreignStudyCovers.length>1&&foreignStudyCovers[1].features.length>1&&foreignStudyCovers[1].features[1].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                </div>
                <div className='col-span-2 row-span-2 bg-[url("/students5.jpg")] bg-no-repeat bg-cover relative flex py-10 lg:py-0'>
                    <div className='absolute inset-0 bg-dark-lime bg-opacity-70'>
                    </div>
                    <div className='my-auto mr-3 ml-10 text-white z-10 flex flex-col gap-10 items-start'>
                        <div className='flex flex-col gap-1'>
                            <h4 className='tracking-widest text-sm lg:text-lg font-bold'>{foreignStudyCovers.length>1&&foreignStudyCovers[1].subtitle.find((item)=>item._key===language)?.value}</h4>
                            <h2 className='text-3xl lg:text-5xl font-extrabold'>{foreignStudyCovers.length>1&&foreignStudyCovers[1].title.find((item)=>item._key===language)?.value}</h2>
                            </div>
                        <p className='text-sm'>{foreignStudyCovers.length>1&&foreignStudyCovers[1].text.find((item)=>item._key===language)?.value}</p>
                        <Link className='text-white block border border-solid border-white px-5 py-2 rounded-lg hover:text-black hover:bg-white transition' href={`/studyabroad/${foreignStudyCovers.length>1&&foreignStudyCovers[1].slug.current}?lang=${language}`}>{language==="hu"?"Olvasson tovább":language==="en"?"Read More":"详细信息"}</Link>
                    </div>
                    
                </div>
            </div>
            <div id='travel-study' className='grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 w-[100%] min-h-[800px] h-auto'>
                <div className='bg-[url("/training1.jpg")] bg-no-repeat bg-cover bg-center row-start-1 col-start-1 lg:row-start-1 lg:col-start-3 flex flex-col relative'>
                </div>

                <div className='bg-dark-blue row-start-1 col-start-2 lg:row-start-1 lg:col-start-4 flex flex-col'>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                        <IoMdGlobe className="text-3xl text-white" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-white'>{foreignStudyCovers.length>3&&foreignStudyCovers[3].features.length>0&&foreignStudyCovers[3].features[0].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                </div>
                <div className='row-start-2 col-start-2 lg:row-start-2 lg:col-start-4 bg-[url("/training2.jpg")] bg-no-repeat bg-cover bg-bottom relative flex'>
                </div>
                <div className='bg-white row-start-2 col-start-1 lg:row-start-2 lg:col-start-3 flex flex-col'>
                    <div className='my-auto ml-10 flex flex-col gap-5 z-10'>
                    <IoMdGlobe className="text-3xl text-black" />
                        <h2 className='text-sm xl:text-lg w-[150px] leading-10 text-black'>{foreignStudyCovers.length>3&&foreignStudyCovers[3].features.length>1&&foreignStudyCovers[3].features[1].text.find((item)=>item._key===language)?.value}</h2>
                    </div>
                </div>
                <div className='row-start-3 col-start-1 lg:row-start-1 lg:col-start-1 col-span-2 row-span-2 bg-[url("/training-cover.jpg")] bg-no-repeat bg-cover relative flex py-10 lg:py-0'>
                    <div className='absolute inset-0 bg-dark-blue bg-opacity-30'>
                    </div>
                    <div className='my-auto mr-3 ml-10 text-white z-10 flex flex-col gap-10 items-start'>
                        
                        <div className='flex flex-col gap-1'>
                            <h4 className='tracking-widest text-sm lg:text-lg font-bold'>{foreignStudyCovers.length>3&&foreignStudyCovers[3].subtitle.find((item)=>item._key===language)?.value}</h4>
                            <h2 className='text-3xl lg:text-5xl font-extrabold'>{foreignStudyCovers.length>3&&foreignStudyCovers[3].title.find((item)=>item._key===language)?.value}</h2>
                        </div>
                        <p className='text-sm'>{foreignStudyCovers.length>3&&foreignStudyCovers[3].text.find((item)=>item._key===language)?.value}</p>
                        <Link className='text-white block border border-solid border-white px-5 py-2 rounded-lg hover:text-black hover:bg-white transition' href={`/studyabroad/${foreignStudyCovers.length>3&&foreignStudyCovers[3].slug.current}?lang=${language}`}>{language==="hu"?"Olvasson tovább":language==="en"?"Read More":"详细信息"}</Link>
                    </div>
                    
                </div>
            </div> */}
        </div>
    </div>
    <Footer lang={language} />
    </>
  )
}

export default StudyAbroad