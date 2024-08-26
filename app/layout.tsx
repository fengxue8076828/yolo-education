import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Menubar from './components/Menubar'
import Footer from './components/Footer'

const poppins = Poppins({ weight:"400",subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yolo Education',
  description: 'The best Hungarian Chinese bilingual school in Budapest',
}

export default function RootLayout({
  searchParams,
  children,
  
}: {
  searchParams:{lang:string}
  children: React.ReactNode
}) {
  const language = searchParams?.lang?searchParams.lang:"hu"
  return (
    <html lang="hu">
      <body className={poppins.className}>
        {/* <Menubar lang={language} /> */}
        {children}
        {/* <Footer /> */}
        
      </body>
    </html>
  )
}
