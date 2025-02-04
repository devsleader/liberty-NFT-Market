"use client";
import React from 'react';
import TopBG from '@/images/main-bg.jpg';
import author1 from '@/images/author.jpg'
import author2 from '@/images/author-02.jpg'
import author3 from '@/images/author-03.jpg'
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface SellerProps {
  rank: number;
  name: string;
  amount: string;
  image: StaticImageData;
}

const TopSeller = () => {
  const sellers: SellerProps[] = [
    { rank: 1, name: "NFT Top Artist", amount: "8.6 ETH or $12,000", image: author1 },
    { rank: 2, name: "George Brandon", amount: "4.8 ETH or $14,000", image: author2 },
    { rank: 3, name: "Johnny Mayson", amount: "6.2 ETH or $26,000", image: author3 },
    { rank: 4, name: "Liberty Artist", amount: "4.5 ETH or $11,600", image: author1 },
    { rank: 5, name: "Ronald Martino", amount: "7.2 ETH or $14,500", image: author2 },
    { rank: 6, name: "Anthony Brown", amount: "8.6 ETH or $7,400", image: author3 },
    { rank: 7, name: "Liberty Artist", amount: "9.8 ETH or $14,200", image: author1 },
    { rank: 8, name: "Ronald Martino", amount: "6.5 ETH or $15,000", image: author2 },
    { rank: 9, name: "David Walker", amount: "2.5 ETH or $12,000", image: author3 },
    { rank: 10, name: "Liberty Artist", amount: "8.8 ETH or $16,800", image: author1 },
    { rank: 11, name: "Anthony Brown", amount: "7.5 ETH or $15,400", image: author2 },
    { rank: 12, name: "David Walker", amount: "5.2 ETH or $12,300", image: author3 },
  ];

  return (
    <section 
      className="py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${TopBG.src})` }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
            <h2 className="text-3xl font-bold text-white">Our Top Sellers This Week.</h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, colIndex) => (
              <div key={colIndex} className="space-y-8">
                {sellers.slice(colIndex * 3, (colIndex + 1) * 3).map((seller) => (
                  <div key={seller.rank} className="flex flex-wrap items-center">
                    <h4 className="text-xl text-white font-bold mr-4">
                      {seller.rank}.
                    </h4>
                    <Image 
                      src={seller.image} 
                      alt={seller.name} 
                      width={48}
                      height={48}
                      className="rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h6 className="text-xl font-bold text-white">
                        {seller.name}
                      </h6>
                      <a href="#" className="text-sm text-white font-normal hover:text-[#7453fc] transition-colors">
                        {seller.amount}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          background-color: #1e1e1e;
        }
      `}</style>
    </section>
  );
};

export default TopSeller;