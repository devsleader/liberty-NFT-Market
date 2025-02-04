
// CurrentBiddings.tsx
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Bid {
  image: string | StaticImageData;
  name: string;
  username: string;
  amount: string;
  date: string;
}

interface CurrentBiddingsProps {
  bids: Bid[];
}

const CurrentBiddings: React.FC<CurrentBiddingsProps> = ({ bids }) => {
  return (
    <div className="container mx-auto my-32">
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="inline-block">
          <h4 className=" relative bg-[#7453fc] text-white text-xl px-5 py-2.5 rounded-[22px]">
            Current Biddings Prices ( ETH )
            <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
          </h4>
        </div>
        <select className="bg-transparent text-white font-medium text-sm border-none outline-none cursor-pointer">
          <option>Sort By: Latest</option>
          <option>Sort By: Oldest</option>
          <option>Sort By: Lowest</option>
          <option>Sort By: Highest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bids.map((bid, index) => (
          <div
            key={index}
            className="relative z-[2] flex flex-wrap rounded-[20px] overflow-hidden bg-[#282b2f] border border-[#404245]"
          >
            <div className="basis-4/5 inline-flex">
              <Image
                src={bid.image}
                alt={bid.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 w-full">
              <h4 className="text-white text-xl mb-0">{bid.name}</h4>
              <a href="#" className="text-[#7453fc] text-[15px] font-bold">
                {bid.username}
              </a>
              <div className="w-full h-[1px] bg-white/20 my-6"></div>
              <h6 className="text-[15px] font-normal text-white mb-2">
                Bid: <em className="text-[#7453fc] text-lg font-bold normal-font">{bid.amount}</em>
              </h6>
              <span className="text-[#7453fc] text-[15px]">{bid.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CurrentBiddings;