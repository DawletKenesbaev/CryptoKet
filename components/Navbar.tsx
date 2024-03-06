'use client'
import {useState,useEffect,useContext} from 'react'
import  { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets'
import MenuItems from './shared/MenuItems';
import ButtonGroup from './shared/ButtonGroup';





const Navbar = () => {
  const {theme,setTheme} = useTheme()
  const [active, setActive] = useState('Explore NFTs')
  const router = useRouter();  
  const [open, setOpen] = useState(false)  
  return (
    <nav className='flexBetween fixed z-10 w-full flex-row border-b border-nft-gray-1 bg-white p-4 dark:border-nft-black-1 dark:bg-nft-dark'>
      <div className='flex flex-1 flex-row justify-start '>
        <Link href='/'>
           <div className='flexCenter cursor-pointer md:hidden'>
             <Image src={images.logo02}  objectFit='contain'
             width={32}
             height={32}
             alt='logo'/>
             <p className='ml-1 text-lg font-semibold text-nft-black-1 dark:text-white'>
              CryptoKet
             </p>
           </div>
        </Link>
         <Link href='/'>
          <div className='hidden md:flex'>
            <Image src={images.logo02}  objectFit='contain'
             width={32}
             height={32}
             alt='logo'/>
          </div>
        </Link>
      </div>
      <div className='flex  flex-initial  flex-row justify-end'>
        <div className='mr-2 flex items-center'>
           <input onChange={()=> setTheme(theme==='light'?'dark':'light')} type='checkbox' className='checkbox' id='checkbox' />
           <label
            htmlFor='checkbox' className='flexBetween label relative h-4 w-8 rounded-2xl bg-black p-1 '>

             <i  className='fas fa-sun' />
             <i  className='fas fa-moon' />
             <div className='ball absolute  size-3 rounded-full bg-white' />
           </label>
        </div>
        <div className='flex md:hidden'>
           <MenuItems isMobile={false} active={active} setActive={setActive} />
           <div className='ml-4'>
              <ButtonGroup router={router} setActive={setActive}/>
           </div>
      </div>
      </div>
      <div className='ml-2 hidden md:flex'>
          {
            open ?(
              <Image 
              src={images.cross} 
              alt='icon' 
              objectFit='contain'
              width={22}
              height={22}
              onClick={()=> setOpen(false)}
              className={theme==='light' ? 'invert': ''}
              />
            ): (
              <Image
               src={images.menu} 
                alt='icon'
                objectFit='contain'
                width={25}
                height={25}
                onClick={()=> setOpen(true)}
                className={theme==='light' ? 'invert': ''}
                 />
            )
          }
          {
            open && (
             <div className='nav-h fixed inset-0 top-65 z-10 flex flex-col justify-between bg-white dark:bg-nft-dark'>
              <div className='flex-1 p-4 '>
                  <MenuItems active={active}  isMobile={true } setActive={setActive}/>
              </div>
               <div className='border-t border-nft-gray-1 p-4 dark:border-nft-black-1'>
                 <ButtonGroup setActive={setActive} router={router} />
              </div>
             </div>
            )
          }
      </div>
    </nav>
  )
}

export default Navbar