'use client'
import {useState,useEffect,useContext} from 'react'
import { useRouter } from 'next/router';
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
           <input type='checkbox' className='checkbox' id='checkbox' />
           <label
            onChange={()=> setTheme(theme==='light'?'dark':'light')}
            htmlFor='checkbox' className='flexBetween label relative h-4 w-8 rounded-2xl bg-black p-1 '>

             <i  className='fas fa-sun' />
             <i  className='fas fa-mun' />
             <div className='ball absolute  size-3 rounded-full bg-white' />
           </label>
        </div>
      </div>
      <div className='flex md:hidden'>
           <MenuItems isMobile={false} active={active} setActive={setActive} />
           <div className='ml-4'>
              <ButtonGroup router={router} setActive={setActive}/>
           </div>
      </div>
    </nav>
  )
}

export default Navbar