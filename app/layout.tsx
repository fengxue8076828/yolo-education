import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Menubar from './components/Menubar'
import Footer from './components/Footer'

const poppins = Poppins({ weight:"400",subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YOLO Education',
  description: 'The best Hungarian Chinese bilingual school in Budapest',
}

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode
}) {
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
