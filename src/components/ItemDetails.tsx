// ItemDetails.tsx
import React from 'react';
import Image from 'next/image';

import { StaticImageData } from 'next/image';

interface ItemDetailsProps {
  itemimage: string | StaticImageData;
  title: string;
  authorimage: string | StaticImageData;
  authorName: string;
  authorUsername: string;
  description: string;
  currentBid: {
    eth: string;
    usd: string;
  };
  owner: {
    name: string;
    username: string;
  };
  endsIn: {
    countdown: string;
    date: string;
  };
}

 const ItemDetails: React.FC<ItemDetailsProps> = ({
  itemimage,
  title,
  authorimage,
  authorName,
  authorUsername,
  description,
  currentBid,
  owner,
  endsIn,
}) => {
  return (
    <div className="bg-[#1e1e1e] bg-[url('/assets/images/dark-bg.jpg')] bg-no-repeat bg-center bg-cover py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="relative mr-0 lg:mr-8 mb-8 lg:mb-0">
              <Image
                src={itemimage}
                alt={title}
                width={800}
                height={600}
                className="rounded-[20px]"
              />
            </div>
          </div>
          <div className="lg:col-span-5 self-center">
            <h4 className="text-white text-xl font-bold mb-6">{title}</h4>
            <div className="flex flex-wrap items-center mb-8">
              <Image
                src={authorimage}
                alt={authorName}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h6 className="text-white font-normal text-base">
                  {authorName}
                  <br />
                  <a href="#" className="text-[#7453fc] font-bold">
                    {authorUsername}
                  </a>
                </h6>
              </div>
            </div>
            <p className="text-white text-[15px] leading-[30px] mb-8">
              {description}
            </p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <span className="text-white text-[15px] block">
                  Current Bid
                  <br />
                  <strong className="text-[#7453fc] text-xl">
                    {currentBid.eth} ETH
                  </strong>
                  <br />
                  <em className="text-[#afafaf] normal-font">{currentBid.usd}</em>
                </span>
              </div>
              <div className="col-span-4">
                <span className="text-white text-[15px] block">
                  Owner
                  <br />
                  <strong className="text-[#7453fc] text-xl">
                    {owner.name}
                  </strong>
                  <br />
                  <em className="text-[#afafaf] normal-font">{owner.username}</em>
                </span>
              </div>
              <div className="col-span-5">
                <span className="text-white text-[15px] block">
                  Ends In
                  <br />
                  <strong className="text-[#7453fc] text-xl">
                    {endsIn.countdown}
                  </strong>
                  <br />
                  <em className="text-[#afafaf] normal-font">{endsIn.date}</em>
                </span>
              </div>
            </div>
            <form className="mt-10">
              <label className="text-[#afafaf] text-[15px] font-medium mr-2">
                Place Bid:
              </label>
              <div className="flex flex-wrap items-center mt-2">
                <input
                  placeholder="1 ETH"
                  className="w-[100px] h-[46px] border border-[#7453fc] rounded-[23px] bg-transparent text-white text-center mr-4"
                />
                <button
                  type="submit"
                  className="relative text-sm text-white bg-[#7453fc] border border-[#7453fc] px-8 py-3 rounded-[25px] font-medium capitalize tracking-wider transition-all duration-300 relative overflow-hidden hover:bg-white hover:text-[#7453fc] hover:border-white"
                >
                  Submit Now
                  <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;