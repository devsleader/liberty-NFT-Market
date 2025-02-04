// components/Collections.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeading from './SectionHeading';
import BGImage from '@/images/collection-01.jpg';


const collections = [
  {
    image: BGImage,
    title: 'Mutant Bored Ape Yacht Club',
    items: '310/340',
    category: 'Digital Crypto',
    link: 'Explore Mutant'
  },
  {
    image: BGImage,
    title: 'Bored Ape Kennel Club',
    items: '324/324',
    category: 'Visual Art',
    link: 'Explore Bored Ape'
  },
  {
    image: BGImage,
    title: 'Genesis Collective Statue',
    items: '380/394',
    category: 'Music Art',
    link: 'Explore Genesis'
  },
  {
    image: BGImage,
    title: 'Worldwide Artwork Ground',
    items: '426/468',
    category: 'Blockchain',
    link: 'Explore Worldwide'
  }
];

const Collections = () => {
  const [slidePercentage, setSlidePercentage] = useState(33.33);
  useEffect(() => {
    const handleResize = () => {
      setSlidePercentage(window.innerWidth < 768 ? 100 : 33.33);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="collections mt-[140px]">
      <SectionHeading title="Explore Some Hot" emphasizedText="Collections" />
   
      <Carousel
        // dots = {slidePercentage === 100}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        centerMode={true}
        centerSlidePercentage={slidePercentage}
        className="relative"
        renderArrowPrev={(clickHandler) => (
          
            <button
              onClick={clickHandler}
              className={`absolute left-[0px] top-1/3 z-10 w-[46px] h-[46px] bg-white text-[#7453fc] rounded-full flex flex-wrap items-center justify-center text-2xl transition-all hover:opacity-100 ${slidePercentage === 100 ? 'hidden' : ''}`}
            >
              ‹
            </button>
          
        )}
        renderArrowNext={(clickHandler) => (
         
            <button
              onClick={clickHandler}
              className={`absolute right-[0px] top-1/3 z-10 w-[46px] h-[46px] bg-white text-[#7453fc] rounded-full flex flex-wrap items-center justify-center text-2xl transition-all hover:opacity-100 ${slidePercentage === 100 ? 'hidden' : ''}`}
            >
              ›
            </button>
         
        )}
      >
        {collections.map((item, index) => (
          <div key={index} className="item pb-[60px] px-4">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="rounded-t-[20px]"
            />
            <div className="down-content bg-[#282b2f] border border-[#404245] rounded-b-[20px] p-[30px]">
              <h4 className="text-[20px] border-b border-white/20 mb-5 pb-5 text-white">
                {item.title}
              </h4>
              <div className="flex flex-wrap justify-between">
                <span className="collection text-white text-[15px] w-[48%]">
                  Items In Collection:<br/>
                  <strong className="text-[20px]">{item.items}</strong>
                </span>
                <span className="category text-white text-[15px] w-[48%] text-right">
                  Category:<br/>
                  <strong className="text-[20px]">{item.category}</strong>
                </span>
              </div>
              <div className="main-button mt-5 -mb-[60px]">
                <Link
                  href="/explore"
                  className="relative w-full text-center text-sm text-white bg-[#7453fc] border border-[#7453fc] py-3 px-8 rounded-full font-medium capitalize tracking-wider transition-all duration-300 relative overflow-hidden hover:bg-white hover:text-[#7453fc] hover:border-white inline-block"
                >
                  {item.link}
                  <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      
    </div>
  );
};

export default Collections;