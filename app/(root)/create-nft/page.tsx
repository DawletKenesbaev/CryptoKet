'use client'
import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import images from '../../../assets';
import Button from '../../../components/shared/Button';
import Input from '@/components/shared/Input';

interface FileUrlState {
  fileUrl: string | null;
}

interface FormInputState {
  price: string;
  name: string;
  description: string;
}

const CreateNFT: FC = () => {
  const { theme } = useTheme();
  const [fileUrl, setFileUrl] = useState<FileUrlState>({ fileUrl: null });  // Initial state with null fileUrl
  const [formInput, setFormInput] = useState<FormInputState>({
    price: '',
    name: '',
    description: '',
  });

  const onDrop = useCallback(() => {
    // Upload image to Blockchain - IPFS (handle image data here)
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  const fileStyle = useMemo(
    () =>
      `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
     ${isDragActive && 'border-file-active'}
     ${isDragAccept && 'border-file-accept'}
     ${isDragReject && 'border-file-reject'}`,
    [isDragAccept, isDragReject, isDragActive]
  );

  return (
     <div className='flex items-center justify-center p-12  sm:px-4 '>
       <div className='mt-16 w-3/5  md:w-full'>
         <h1 className="ml-4 font-poppins  text-2xl font-semibold text-nft-black-1 dark:text-white 
          xs:ml-0 minlg:text-4xl">Create new item</h1>
          <div className='mt-16'>
             <p>dd</p>
          </div>
       </div>
     </div>
  )
};

export default CreateNFT;
