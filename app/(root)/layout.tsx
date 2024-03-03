'use client'
import React from 'react'
import { ThemeProvider } from "next-themes";
import Footer from '@/components/Footer'
import  Navbar  from '../../components/Navbar'
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
      <ThemeProvider attribute='class'>
      <Navbar />
        <div className='flex'>
           <section >
               <div className='mx-auto w-full  max-w-5xl '>
                {children}
               </div  >
           </section>
        </div>
        <Footer />
      </ThemeProvider>
  )
}

export default Layout