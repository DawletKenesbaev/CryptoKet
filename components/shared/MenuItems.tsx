'use client'
import Link from "next/link";

interface MenuItemsProps {
    isMobile:boolean;
    active:string;
    setActive: (newActive: string) => void;
  }
  const MenuItems = ({isMobile, active, setActive}:MenuItemsProps) => {
    const generateLink = (i:number) => {
       switch (i) {
        case 0:
          return '/'
        case 1:
          return '/created-nft'
        case 2:
          return '/my-nft'
       
        default:
          return '/';
       }
    }
    return (
      <ul className={`flexCenter list-none flex-row 
      ${isMobile && 'h-full flex-col'}`}>
        {['Explore NFTs','Listed NFTs','My NFTs'].map((item,index)=>(
          <li
          onClick={()=>{
            setActive(item)
          }}
           key={index} className={`mx-3 flex flex-row  items-center font-poppins
          text-base font-semibold hover:text-nft-dark dark:hover:text-white
          ${active === item ? 'text-nft-black-1 dark:text-white':'text-nft-gray-2 dark:text-nft-gray-3'}`}>
           <Link href={generateLink(index)}>
            {item}
           </Link>
          </li>
        ))}
      </ul>
    )
  }
  export default MenuItems