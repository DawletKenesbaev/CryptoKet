import React from 'react'
import Footer from '@/components/Footer'
import  Navbar  from '../../components/Navbar'
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
       <Navbar />
        <div className='flex'>
           <section >
               <div className='mx-auto w-full  max-w-5xl '>
                {children}
               </div  >
           </section>
        </div>
        <Footer />
    </div>
  )
}

export default Layout