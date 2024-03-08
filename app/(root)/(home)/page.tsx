'use client'
import Banner from "@/components/Banner";
import CreatorCard from "@/components/cards/CreatorCard";
import NFTCard from "@/components/cards/NFTCard";
import { makeId } from "@/utils/makeId";
const img = 'https://cdn.vectorstock.com/i/1000x1000/87/25/robot-electric-avatar-icon-vector-10068725.webp'
export default function Home() {
  // const parentRef = useRef(null)
  // const scrollRef = useRef(null)  
  // const {theme} = useTheme()
  // const [hideButtons, setHideButtons] = useState(false)
  
  // const handleScroll = (direction : string) => {
  //   const { current } = scrollRef;
  //   const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
  //   if (direction === "left") {
  //     current.scrollLeft -= scrollAmount;
  //   } else {
  //     current.scrollLeft += scrollAmount;
  //   }
  // };
  //   const isScrollable = () => {
  //   const { current } = scrollRef;
  //   const { current: parent } = parentRef;
  //   if (current && parent) {
  //     if (current.scrollWidth >= parent.offsetWidth) {
  //       setHideButtons(false);
  //     } else {
  //       setHideButtons(true);
  //     }
  //   }
  // };

  // useEffect(() => {
  //  isScrollable()
  //  window.addEventListener('resize',isScrollable)
  //  return () => {
  //   window.removeEventListener('resize',isScrollable)
  //  }
  // })
  
  return (
    <div className="flex flex-col justify-center p-12 sm:p-4">
      <div className="w-full minmd:w-4/5">
        <Banner
          banner="Discover, Collect and Sell Extraordinary NFT's"
          childStyles='md:text-4xl sm:text-2xl xs:text-xl text-left'
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />
        <div>
          <h1 className="ml-4 font-poppins  text-2xl font-semibold text-nft-black-1 dark:text-white 
          xs:ml-0 minlg:text-4xl">Top Sellers</h1>
          <div className="relative mt-3 flex flex-1 " >
             <div className="no-scrollbar flex w-full select-none flex-row ">
                {[3,4,5,6,7].map((user)=>(
                  <CreatorCard
                   key={`creator-${user}`} 
                  rank={user}
                  creatorImg={img} 
                  creatorName= {`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths ={10-user*0.5}
                  /> 
                ))}                                
             </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
          <div className="flexBetween mx-4 sm:flex-col sm:items-start xs:mx-0 minlg:mx-8">
            <h1 className="flex-1 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white sm:mb-4 minlg:text-4xl">
              Top NFTs
            </h1>
            <div>Searchbar</div>
          </div>
          <div className="mt-3 flex w-full flex-wrap justify-start md:justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <NFTCard
                key={`NFT-${i}`}
                nft={{
                  i,
                  name: `Nifty NFT ${i}`,
                  price: 10 - i * 0.5,
                  seller: `0x${makeId(3)}... ${makeId(4)}`,
                  owner: `0x${makeId(3)}... ${makeId(4)}`,
                  description: "Cool NFT for Sale",
                }}
              />
            ))}
          </div>
       </div>
    </div>
  );
}