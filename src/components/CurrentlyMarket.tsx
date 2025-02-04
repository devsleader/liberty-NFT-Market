"use client";
import React, { useState} from 'react';
import Image from 'next/image';
import authorlogo from '@/images/author.jpg';
import CardImg from '@/images/market-01.jpg'

interface MarketItem {
  id: number;
  category: string[];
  title: string;
  currentBid: {
    eth: string;
    usd: string;
  };
  endsIn: {
    time: string;
    date: string;
  };
  author: {
    name: string;
    username: string;
  };
}

const CurrentlyMarket = () => {
  const [filter, setFilter] = useState('*');
  const [items] = useState<MarketItem[]>([
    {
      id: 1,
      category: ['msc'],
      title: 'Music Art Super Item',
      currentBid: { eth: '2.03', usd: '8,240.50' },
      endsIn: { time: '4D 08H 15M 42S', date: 'July 24th, 2022' },
      author: { name: 'Liberty Artist', username: '@libertyart' }
    },
    {
        id: 2,
        category: ['dig'],
        title: 'Digital Crypto Artwork',
        currentBid: { eth: '2.03', usd: '7,200.50' },
        endsIn: { time: '2D 06H 30M 25S', date: 'July 26th, 2022' },
        author: { name: 'Liberty Artist', username: '@libertyart' },
      },
      {
        id: 3,
        category: ['blc'],
        title: 'Blockchain Item One',
        currentBid: { eth: '3.64', usd: '6,600.00' },
        endsIn: { time: '6D 05H 40M 50S', date: 'July 28th, 2022' },
        author: { name: 'Liberty Artist', username: '@libertyart' },
      },
      {
        id: 4,
        category: ['vtr'],
        title: 'Virtual Currency Art',
        currentBid: { eth: '2.44', usd: '8,800.50' },
        endsIn: { time: '3D 05H 20M 58S', date: 'July 14th, 2022' },
        author: { name: 'Liberty Artist', username: '@libertyart' },
      },
      {
        id: 5,
        category: ['vrt', 'dig'],
        title: 'Digital Art Item',
        currentBid: { eth: '2.50', usd: '8,400.50' },
        endsIn: { time: '4D 08H 32M 18S', date: 'July 16th, 2022' },
        author: { name: 'Liberty Artist', username: '@libertyart' },
      },
      {
        id: 6,
        category: ['msc', 'blc'],
        title: 'Blockchain Music Design',
        currentBid: { eth: '2.44', usd: '8,200.50' },
        endsIn: { time: '5D 10H 22M 24S', date: 'July 18th, 2022' },
        author: { name: 'Liberty Artist', username: '@libertyart' },
      },
  ]);

  const filters = [
    { key: '*', label: 'All Items' },
    { key: 'msc', label: 'Music Art' },
    { key: 'dig', label: 'Digital Art' },
    { key: 'blc', label: 'Blockchain' },
    { key: 'vtr', label: 'Virtual' }
  ];

  const filteredItems = items.filter(item => 
    filter === '*' || item.category.includes(filter)
  );

  return (
    <div className="relative py-32 bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('/images/dark-bg.jpg')" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Header Section */}
          <div className="lg:col-span-6">
            <div className="relative z-10">
              <div className="w-24 h-0.5 bg-[#7453fc] mb-8"></div>
              <h2 className="text-3xl font-bold text-white">
                <em className="text-[#7453fc] not-italic">Items</em> Currently In The Market.
              </h2>
            </div>
          </div>

          {/* Filters Section */}
          <div className="lg:col-span-6">
            <div className="text-right">
              <ul className="inline-flex flex-wrap flex-wrap gap-2 justify-end">
                {filters.map((filterItem) => (
                  <li
                    key={filterItem.key}
                    onClick={() => setFilter(filterItem.key)}
                    className={`inline-block px-4 py-2 text-white text-sm font-medium rounded-full cursor-pointer transition-all duration-300
                              ${filter === filterItem.key ? 'bg-[#7453fc]' : 'hover:bg-[#7453fc]'}`}
                  >
                    {filterItem.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Market Items Grid */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {filteredItems.map((item) => (
                <div key={item.id} className="w-full">
                  <div className="bg-[#282b2f] border border-[#404245] rounded-[20px] p-8 flex flex-wrap flex-col md:flex-row gap-8 justify-center">
                    <div className="flex-shrink-0">
                      <Image
                        src={CardImg}
                        alt={item.title}
                        width={195}
                        height={195}
                        className="rounded-[20px]"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-white mb-6">{item.title}</h4>
                      
                      <div className="flex flex-wrap items-center mb-6">
                        <div className="w-[50px] h-[50px] relative mr-4">
                          <Image
                            src= {authorlogo}
                            alt="Author"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h6 className="text-white font-normal text-sm">
                            {item.author.name}<br/>
                            <a href="#" className="text-[#7453fc] font-bold hover:text-white">{item.author.username}</a>
                          </h6>
                        </div>
                      </div>

                      <div className="h-px bg-white/20 my-6"></div>

                      <div className="flex flex-wrap justify-between items-start">
                        <div className="text-white">
                          <span className="text-sm">Current Bid</span><br/>
                          <strong className="text-xl">{item.currentBid.eth} ETH</strong><br/>
                          <em className="text-sm font-normal">(${item.currentBid.usd})</em>
                        </div>
                        <div className="text-white text-right">
                          <span className="text-sm">Ends In</span><br/>
                          <strong className="text-xl">{item.endsIn.time}</strong><br/>
                          <em className="text-sm font-normal">({item.endsIn.date})</em>
                        </div>
                      </div>

                      <div className="mt-10">
                        <a href="details.html" 
                           className="text-[#7453fc] font-bold text-sm border-b border-[#7453fc] hover:text-white hover:border-white">
                          View Item Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyMarket;