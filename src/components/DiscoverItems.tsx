"use client";
import { FC, FormEvent, useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import author from '@/images/author.jpg'
import discover1 from '@/images/discover-01.jpg'
import discover2 from '@/images/discover-02.jpg'
import discover3 from '@/images/discover-03.jpg'
import discover4 from '@/images/discover-04.jpg'
import discover5 from '@/images/discover-05.jpg'
import discover6 from '@/images/discover-06.jpg'
import discover7 from '@/images/featured-02.jpg'
import discover8 from '@/images/featured-03.jpg'
import DiscoverBG from '@/images/dark-bg.jpg'

interface NFTItem {
  id: string;
  title: string;
  currentBid: number;
  endDate: string;
  image: StaticImageData;
  authorImage: StaticImageData;
  category: string;
  collection?: string;
  status: 'Available' | 'Ending Soon' | 'Coming Soon' | 'Closed';
}

const INITIAL_ITEMS: NFTItem[] = [
    {
        id: '1',
        title: 'Mutant Ape Bored',
        currentBid: 8.16,
        endDate: '25th Nov',
        image: discover1,
        authorImage: author,
        category: 'Digital Art',
        collection: '2/2',
        status: 'Available'
      },
      {
        id: '2',
        title: 'His Other Half',
        currentBid: 8.16,
        endDate: '25th Nov',
        image: discover2,
        authorImage: author,
        category: 'Digital Art',
        collection: '2/2',
        status: 'Available'
      },
      {
        id: '3',
        title: 'Genesis Meta Boom',
        currentBid: 5.15,
        endDate: '26th Nov',
        image: discover3,
        authorImage: author,
        category: 'Digital Art',
        collection: '1/1',
        status: 'Available'
      },
      {
        id: '4',
        title: 'Another Half Ape',
        currentBid: 3.63,
        endDate: '24th Nov',
        image: discover4,
        authorImage: author,
        category: 'Digital Art',
        collection: '2/2',
        status: 'Available'
      },
      {
        id: '5',
        title: 'Pixel Sand Box',
        currentBid: 4.68,
        endDate: '28th Nov',
        image: discover5,
        authorImage: author,
        category: 'Digital Art',
        collection: '3/3',
        status: 'Available'
      },
      {
        id: '6',
        title: 'Another Half Ape',
        currentBid: 2.03,
        endDate: '25th Nov',
        image: discover6,
        authorImage: author,
        category: 'Digital Art',
        collection: '2/2',
        status: 'Available'
      },
      {
        id: '7',
        title: 'Invisible NFT Land',
        currentBid: 2.03,
        endDate: '25th Nov',
        image: discover7,
        authorImage: author,
        category: 'Digital Art',
        collection: '1/1',
        status: 'Available'
      },
      {
        id: '8',
        title: 'Another Half Ape',
        currentBid: 2.64,
        endDate: '25th Nov',
        image: discover8,
        authorImage: author,
        category: 'Digital Art',
        collection: '2/2',
        status: 'Available'
      }
];

const DiscoverItems: FC = () => {
  // const [items, setItems] = useState<NFTItem[]>(INITIAL_ITEMS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('Available');
  const [filteredItems, setFilteredItems] = useState<NFTItem[]>(INITIAL_ITEMS);

  // Search and filter functionality
  useEffect(() => {
    let result = [...INITIAL_ITEMS];

    // Apply search term filter
    if (searchTerm) {
      result = result.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All Categories') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Apply status filter
    if (selectedStatus !== 'All') {
      result = result.filter(item => item.status === selectedStatus);
    }

    setFilteredItems(result);
  }, [searchTerm, selectedCategory, selectedStatus]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // The search is already handled by the useEffect hook
  };

  const categories = ['All Categories', 'Music', 'Digital Art', 'Blockchain', 'Virtual'];
  const statuses = ['All', 'Available', 'Ending Soon', 'Coming Soon', 'Closed'];

  return (
    <div className=" bg-cover bg-center bg-no-repeat py-40"
    style={{ backgroundImage: `url(${DiscoverBG.src})` }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Header Section */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <div className="h-0.5 w-16 bg-[#7453fc] mb-4"></div>
              <h2 className="text-4xl text-white font-bold">
                Discover Some Of Our <span className="text-[#7453fc]">Items</span>.
              </h2>
            </div>
          </div>

          {/* Search Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSearch} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-4">
                <input
                  type="text"
                  placeholder="Type Something..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 bg-transparent border border-white/20 rounded-full px-4 text-white focus:outline-none focus:border-[#7453fc]"
                />
              </div>
              <div className="lg:col-span-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-12 bg-transparent border border-white/20 rounded-full px-4 text-white focus:outline-none focus:border-[#7453fc]"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="lg:col-span-3">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full h-12 bg-transparent border border-white/20 rounded-full px-4 text-white focus:outline-none focus:border-[#7453fc]"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="lg:col-span-2 relative">
                <button 
                  type="submit"
                  className="w-full h-12 bg-[#7453fc] text-white rounded-full hover:bg-white hover:text-[#7453fc] transition-colors duration-300"
                >
                  Search
                </button>
                <span className="absolute bottom-0 left-1/2 w-[68%] h-0.5 bg-white transform -translate-x-1/2"></span>
              </div>
            </form>
          </div>

          {/* Display message when no items found */}
          {filteredItems.length === 0 && (
            <div className="lg:col-span-12 text-center text-white text-xl">
              No items found matching your criteria.
            </div>
          )}

          {/* NFT Items Grid */}
          {filteredItems.map((item) => (
            <div key={item.id} className="lg:col-span-3">
              <div className="bg-[#282b2f] border border-[#404245] p-6 rounded-[20px] relative mb-12">
                {/* <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#7453fc] text-white text-sm px-4 py-1 rounded-full">
                  {item.status}
                </span> */}
                <div className="flex flex-wrap justify-center -mb-8 z-10">
                  <Image
                    src={item.authorImage}
                    alt="Author"
                    className="w-14 h-14 rounded-full z-10"
                  />
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-[20px] mb-6 z-0"
                />
                <h4 className="text-xl text-white font-bold mb-4">{item.title}</h4>
                <div className="text-sm text-gray-400 mb-4">
                  Category: {item.category}
                </div>
                <div className="h-px w-full bg-white/20 my-6"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-white text-sm">Current Bid</span>
                    <p className="text-lg font-bold">{item.currentBid} ETH</p>
                  </div>
                  <div>
                    <span className="text-white text-sm">Ends In</span>
                    <p className="text-lg font-bold">{item.endDate}</p>
                  </div>
                </div>
                <div className="mb-[-45px] mt-6 text-center">
                  <a
                    href="#"
                    className="relative inline-block bg-[#7453fc] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#7453fc] transition-colors duration-300"
                  >
                    View Details
                    <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverItems;