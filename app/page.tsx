
import Image from 'next/image'
import Header from './components/Header'
import Feathers from './components/Feathers'
import Introduction from './components/Introduction'
import Courses from './components/Courses'
import YoutubeChannel from './components/YoutubeChannel'
import Programs from './components/Programs'
import Teachers from './components/Teachers'
import Testimonials from './components/Testimonials'
import Navigator from './components/Navigator'
import Menubar from '@/app/components/Menubar'
import Footer from '@/app/components/Footer'

export default function Home({searchParams}:{searchParams:{lang?:string}}) {
  return (
    <>
    <Menubar lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
    <main>
      <Navigator />     
      <Header lang={`${searchParams.lang?searchParams.lang:"hu"}`}/>
      <Feathers lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
      <Introduction lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
      <Courses lang={`${searchParams.lang?searchParams.lang:"hu"}`}  />
      <YoutubeChannel lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
      <Programs lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
      <Teachers lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
      <Testimonials lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
    </main>
    <Footer lang={`${searchParams.lang?searchParams.lang:"hu"}`} />
    </>
  )
} 
