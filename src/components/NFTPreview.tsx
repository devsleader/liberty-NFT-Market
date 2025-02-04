"use client";

import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface NFTPreviewProps {
  title: string;
  author: string;
  authorUsername: string;
  details: string;
  currentBid: string;
  bid: string;
  endtime: string,
  endDate: string;
  imageUrl: StaticImageData;
  authorImageUrl: StaticImageData;
}

const NFTPreview: React.FC<NFTPreviewProps> = ({
  title,
  author,
  authorUsername,
  details,
  currentBid,
  bid,
  endtime,
  endDate,
  imageUrl,
  authorImageUrl,
}) => {
  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="w-24 h-0.5 bg-[#7453fc] mb-8"></div>
          <h2 className="text-3xl font-bold text-white">
            This Is <span className="text-[#7453fc]">Your Item</span> Preview.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="flex flex-wrap flex-col justify-center">
            <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
            <div className="flex flex-wrap items-center mb-6">
              <Image
                src={authorImageUrl}
                alt={author}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h6 className="text-white font-bold">{author}</h6>
                <a href="#" className="text-[#7453fc]">{authorUsername}</a>
              </div>
              
            </div>
            <p className='mb-6'>{details}</p>
            <div className="grid grid-cols-3 gap-4 bg-[#282b2f] p-6 rounded-2xl">
              <div>
                <span className="text-white">Current Bid</span>
                <p className="text-xl font-bold text-[#7453fc] mt-4">{currentBid}</p>
                <p className='text-sm text-[#afafaf]'>({bid})</p>
              </div>
              <div>
                <span className="text-white">Owner</span>
                <p className="text-xl font-bold text-[#7453fc] mt-4">{author}</p>
                <p className='text-sm text-[#afafaf]'>({authorUsername})</p>
              </div>
              <div>
                <span className="text-white">Ends In</span>
                <p className="text-xl font-bold text-[#7453fc] mt-4">{endtime}</p>
                <p className='text-sm text-[#afafaf]'>({endDate})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPreview;
