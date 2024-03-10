import images from '../../assets';
import Image, { StaticImageData } from 'next/image';
import { useContext, useEffect, useState } from 'react';
// import { NFTContext } from '../../context/NFTContext';

type CreatorCardProps = {
  rank: number;
  image: StaticImageData;
  name: string;
  eths: number;
}

const CreatorCard = ({ rank, image, name, eths }: CreatorCardProps) => {
  // const { nftCurrency } = useContext(NFTContext);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <div className={'m-4 flex min-w-190 flex-col rounded-3xl border border-nft-gray-1 bg-white p-4 dark:border-nft-black-3 dark:bg-nft-black-3 minlg:min-w-240'}>
      <div className={'flexCenter size-8 rounded-full bg-nft-red-violet minlg:size-10'}>
        <p className={'font-poppins text-base font-semibold text-white minlg:text-lg'}>{rank}</p>
      </div>

      <div className={'my-2 flex justify-center'}>
        <div className={'relative size-20 minlg:size-28'}>
          <Image src={image} layout={'fill'} objectFit={'cover'} alt={'Creator name'} className={'rounded-full'} />
          <div className={'absolute -right-0 bottom-2 size-4 minlg:size-7'}>
            <Image src={images.tick} layout={'fill'} objectFit={'contain'} alt={'Tick'} />
          </div>
        </div>
      </div>

      <div className={'flexCenter mt-3 flex-col text-center minlg:mt-7'}>
        <p className={'font-poppins text-base font-semibold text-nft-black-1 dark:text-white'}>{name}</p>
        <p className={'mt-1 font-poppins text-base font-semibold text-nft-black-1 dark:text-white'}>
          {eths.toFixed(2)}&nbsp;
          {/* <span className={'font-normal'}>{nftCurrency}</span> */}
        </p>
      </div>
    </div>
  );
};

export default CreatorCard;