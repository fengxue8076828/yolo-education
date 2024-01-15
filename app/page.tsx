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

export default function Home() {
  return (
    <main>
      <Navigator />     
      <Header />
      <Feathers />
      <Introduction />
      <Courses />
      <YoutubeChannel />
      <Programs />
      <Teachers />
      <Testimonials />
    </main>
  )
} 
