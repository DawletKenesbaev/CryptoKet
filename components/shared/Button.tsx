'use client'
import React from 'react'
interface Props {
    classStyles:string;
    btnName:string;
    handleClick:() => void;

}
const Button = ({classStyles,btnName,handleClick}:Props) => {
  return (
    <button 
    onClick={handleClick}
    className={`nft-gradient mx-2 rounded-xl px-6 py-2 font-poppins text-sm font-semibold 
    text-white minlg:px-8 minlg:text-lg ${classStyles} `}>{btnName}</button>
  )
}

export default Button