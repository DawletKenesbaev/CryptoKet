'use client'
import React from 'react'
import { ThemeProvider } from "next-themes";
import Footer from '@/components/Footer'
import  Navbar  from '../../components/Navbar'
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
      <ThemeProvider attribute='class'>
      <Navbar />
           <section className='pt-65'>
               <div className='mx-auto w-full max-w-5xl '>
                {children}
               </div  >
           </section>
        <Footer />
      </ThemeProvider>
  )
}

export default Layout