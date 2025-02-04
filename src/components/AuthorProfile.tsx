// AuthorProfile.tsx
import React from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoHandRightOutline } from 'react-icons/io5';
import { BsCurrencyDollar } from 'react-icons/bs';
import { StaticImageData } from 'next/image';


interface AuthorProfileProps {
  author: {
    name: string;
    username: string;
    image: string | StaticImageData;
    stats: {
      likes: number;
      bids: number;
      eth: number;
      followers: number;
    };
  };
 
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ author }) => {
  return (
    <div className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-wrap  items-center lg:justify-start justify-center">
              <Image
                src={author.image}
                alt={author.name}
                width={170}
                height={170}
                className="rounded-full"
              />
              <div className="ml-8 mt-16">
                <h4 className="text-white text-xl font-bold">
                  {author.name} <br />
                  <a href="#" className="text-[#7453fc] text-[15px]">
                    {author.username}
                  </a>
                </h4>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-[#282b2f] border border-[#404245] p-6 lg:p-8 rounded-[20px] lg:ml-24 mt-8 lg:mt-0">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="mb-5">
                    <AiOutlineHeart className="text-[#7453fc] bg-[#7453fc] text-2xl" />
                    <h6 className="text-[#7453fc] text-xl mt-1">
                      {author.stats.likes} <em className="text-white font-normal text-[15px]">Likes</em>
                    </h6>
                  </div>
                </div>
                <div>
                  <div className="mb-5">
                    <IoHandRightOutline className="text-[#7453fc] text-2xl" />
                    <h6 className="text-[#7453fc] text-xl mt-1">
                      {author.stats.bids} <em className="text-white font-normal text-[15px]">Bids</em>
                    </h6>
                  </div>
                </div>
                <div>
                  <div className="mb-5">
                    <BsCurrencyDollar className="text-[#7453fc] text-2xl" />
                    <h6 className="text-[#7453fc] text-xl mt-1">
                      {author.stats.eth} <em className="text-white font-normal text-[15px]">ETH</em>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-5">
                  <h5 className="text-[#afafaf] text-xl">{author.stats.followers} Followers</h5>
                </div>
                <div className="col-span-7">
                  <div className="w-full">
                    <a
                      href="#"
                      className="relative w-full text-center text-sm text-white bg-[#7453fc] border border-[#7453fc] px-8 py-3 rounded-[25px] font-medium capitalize tracking-wider transition-all duration-300 relative overflow-hidden hover:bg-white hover:text-[#7453fc] hover:border-white inline-block"
                    >
                      Follow {author.username}
                      <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default AuthorProfile;