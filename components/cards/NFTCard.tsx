import Link from 'next/link';
import Image from 'next/image';
import {  useEffect, useState } from 'react';
// import { NFTContext } from '../../context/NFTContext';
import { shortenAddress } from '../../utils/shortenAddress';

type NFTCardProps = {
  nft: {
    index: number;
    name: string;
    seller: string;
    owner: string;
    description: string;
    price: string | number;
    image: string;
  }
}

const NFTCard = ({ nft }: NFTCardProps) => {
  // const { nftCurrency } = useContext(NFTContext);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <Link href={{
      pathname: '/nft-details', query: {
        index: nft.index,
        name: nft.name,
        seller: nft.seller,
        owner: nft.owner,
        description: nft.description,
        image: nft.image,
        price: nft.price
      }
    }}>
      <div className='sm:min-155 m-4 min-w-215 max-w-max flex-1 cursor-pointer 
      rounded-2xl bg-white p-4 shadow-md dark:bg-nft-black-3 sm:m-2 sm:w-full xs:max-w-none minmd:min-w-256 minlg:m-8 minlg:min-w-327'>
        <div className={'relative h-52 w-full overflow-hidden rounded-2xl sm:h-36 xs:h-56 minmd:h-60 minlg:h-300'}>
          <Image src={nft.image} layout={'fill'} objectFit={'cover'} alt={`nft${nft.index}`} />
        </div>
        <div className={'mt-3 flex flex-col'}>
          <p className={'font-poppins text-sm font-semibold text-nft-black-1 dark:text-white minlg:text-xl'}>{nft.name}</p>
          <div className={'flexBetween mt-1 flex-row xs:mt-3 xs:flex-col xs:items-start minlg:mt-3'}>
            <p className={'font-poppins text-xs font-semibold text-nft-black-1 dark:text-white minlg:text-lg'}>
              <>
                {nft.price}&nbsp;
                {/* <span className={'normal'}>{nftCurrency}</span> */}
              </>
            </p>
            <p className={'font-poppins text-xs font-semibold text-nft-black-1 dark:text-white minlg:text-lg'}>{nft.seller.length > 10? shortenAddress(nft.seller) : nft.seller}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;