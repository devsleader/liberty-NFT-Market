
// AuthorItems.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {StaticImageData } from 'next/image'

interface NFTItem {
  image: StaticImageData;
  authorimage: StaticImageData;
  title: string;
  currentBid: string;
  endsIn: string;
}

interface AuthorItemsProps {
  items: NFTItem[];
}

const AuthorItems: React.FC<AuthorItemsProps> = ({ items }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative z-[2] mb-20">
        <div className="w-24 h-0.5 bg-[#7453fc] mb-8"></div>
        <h2 className="text-3xl font-bold text-white capitalize">
          Melanie Smiths <em className="text-[#7453fc] not-italic">Items</em>.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#282b2f] border border-[#404245] p-8 rounded-[20px] relative mb-12"
          >
            <div>
              <span className="flex flex-wrap  justify-center">
                <Image
                  src={item.authorimage}
                  alt="Author"
                  width={50}
                  height={50}
                  className="rounded-full z-10"
                />
              </span>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="rounded-[20px] -mt-8 relative z-[1]"
              />
              <h4 className="text-white text-xl font-bold mt-8">{item.title}</h4>
            </div>
            <div className="w-full h-px bg-white/20 my-8"></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-white text-[15px]">
                  Current Bid: <br />
                  <strong className="text-xl">{item.currentBid}</strong>
                </span>
              </div>
              <div>
                <span className="text-white text-[15px]">
                  Ends In: <br />
                  <strong className="text-xl">{item.endsIn}</strong>
                </span>
              </div>
            </div>
            <div className="text-center mt-6 -mb-16">
              <Link
                href="/details"
                className=" relative text-sm text-white bg-[#7453fc] border border-[#7453fc] px-8 py-3 rounded-[25px] font-medium capitalize tracking-wider transition-all duration-300 relative overflow-hidden hover:bg-white hover:text-[#7453fc] hover:border-white inline-block"
              >
                View Details
                <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AuthorItems;