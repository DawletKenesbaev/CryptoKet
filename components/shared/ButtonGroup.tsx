'use client'
import React from 'react'
import Button from './Button'
import { NextRouter } from 'next/router';
interface Props {
    setActive : (newActive: string) => void;
    router:NextRouter;
}
const ButtonGroup = ({setActive,router}:Props) => {
  const hasConnected = true
  return hasConnected ? (
    <Button
    handleClick={()=>{
        setActive('')
        router.push('/create-nft')
    }}
     btnName='Create' classStyles='' />
  ): (
    <Button
    handleClick={()=>{
        setActive('')
        router.push('/create-nft')
    }}
     btnName='Connect' classStyles='' />
  )
}

export default ButtonGroup  