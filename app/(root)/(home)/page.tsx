'use client'
import images from '../../../assets';
import type { NextPage } from 'next';
import {  useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';
import Banner from '@/components/Banner';
import CreatorCard from '@/components/cards/CreatorCard';
import NFTCard from '@/components/cards/NFTCard';
import { makeId } from '@/utils/makeId';
// import { ItemMetadataProps, NFTContext } from '@/context/NFTContext';

const Home: NextPage = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { theme } = useTheme();
  const [hideArrowButtons, setHideArrowButtons] = useState(false);
  const [nfts, setNfts] = useState<ItemMetadataProps[]>([]);
  // const { fetchNFTs } = useContext(NFTContext);

  // useEffect(() => {
  //   fetchNFTs().then((items:any) => {
  //     console.log(items);
  //     setNfts(items);
  //   });
  // });

  const handleScroll = (direction: string) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left')
      // @ts-ignore
      current.scrollLeft -= scrollAmount;
    else
      // @ts-ignore
      current.scrollLeft += scrollAmount;
  }

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    // @ts-ignore
    if (current?.scrollWidth >= parent?.offsetWidth)
      setHideArrowButtons(true);
    else
      setHideArrowButtons(false);
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  });

  return (
    <div className={'flex justify-center p-12 sm:px-4'}>
      <div className={'w-full minmd:w-4/5'}>
        <Banner
          parentStyles={'justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl'}
          childStyles={'md:text-4xl sm:text-2xl xs:text-xl text-left'}
          banner={'Discover, collect and sell extraordinary NFTs'}
        />

        <div className={''}>
          <h1 className='ml-4 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white xs:ml-0 minlg:text-4xl'>
                 Best Creators
          </h1>
          <div className={'relative mt-3 flex max-w-full flex-1'} ref={parentRef}>
            <div className={'no-scrollbar flex w-max select-none flex-row overflow-x-scroll'} ref={scrollRef}>
              {[3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                // @ts-ignore
                const imageCreator: StaticImageData = images[`creator${index}`];

                return (
                  <CreatorCard
                    key={`creator-${index}`}
                    rank={index}
                    image={imageCreator}
                    name={`0x${makeId(3)}...${makeId(4)}`}
                    eths={10 - index * 0.5}
                  />
                );
              })}
              {hideArrowButtons && (
                <>
                  <div className={'absolute left-0 top-45 size-8 cursor-pointer minlg:size-12'} onClick={() => handleScroll('left')}>
                    <Image src={images.left} layout={'fill'} objectFit={'contain'} alt={'Left arrow'} className={theme === 'light'? 'invert' : ''} />
                  </div>
                  <div className={'absolute right-0 top-45 size-8 cursor-pointer minlg:size-12'} onClick={() => handleScroll('right')}>
                    <Image src={images.right} layout={'fill'} objectFit={'contain'} alt={'Right arrow'} className={theme === 'light'? 'invert' : ''} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={'mt-10'}>
          <div className={'flexBetween mx-4 sm:flex-col sm:items-start xs:mx-0 minlg:mx-8'}>
            <h1 className={'ml-4 flex-1 text-2xl font-semibold text-nft-black-1 before:first:font-poppins dark:text-white sm:mb-4 minlg:text-4xl'}>Hot bids</h1>
            <div>SearchBar</div>
          </div>
          <div className={'mt-3 flex w-full flex-wrap justify-start md:justify-center'}>
            {nfts.map((nft) => 
            <NFTCard key={nft.tokenId} nft={{
              index: nft.tokenId,
              name: nft.name,
              price: nft.price,
              seller: nft.seller,
              owner: nft.owner,
              description: nft.description,
              image: nft.image
            }} />)}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              // @ts-ignore
              const imageNFT: StaticImageData = images[`nft${item}`];

              return (
                <NFTCard
                  key={`nft-${item}`}
                  nft={{
                    index: item,
                    name: `Nifty NFT ${item}`,
                    seller: `0x${makeId(3)}...${makeId(4)}`,
                    owner: `0x${makeId(3)}...${makeId(4)}`,
                    description: 'Cool NFT on sale',
                    image: imageNFT,
                    price: Number((10 - item * Math.random()).toFixed(2))
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
