import React from 'react'
interface Props {
 banner:string;
 childStyles:string;
 parentStyles:string;
}
const Banner = ({ banner, childStyles, parentStyles }:Props) => (
  <div className={`nft-gradient relative z-0 flex w-full items-center overflow-hidden ${parentStyles}`}>
    <p className={` font-poppins text-5xl font-bold leading-70 text-white ${childStyles}`}>{banner}</p>
    <div className="white-bg absolute -left-16 -top-9 -z-5 size-48 rounded-full sm:size-32" />
    <div className="white-bg absolute -bottom-24 -right-14 -z-5 size-72 rounded-full sm:size-56" />
  </div>
);
export default Banner