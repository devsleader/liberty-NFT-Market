"use client";


import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerBg from '@/images/banner-bg.jpg'
import bannerImg1 from '@/images/banner-01.png'
import bannerImg2 from '@/images/banner-02.png'

const MainBanner = () => {
  return (
    <div className="relative bg-[#2a2a2a] py-[290px] pb-[240px] bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: `url(${bannerBg.src})` }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-wrap items-center">
            <div className="header-text">
              <h6 className="text-white text-xl font-medium tracking-wide mb-4">
                Liberty NFT Market
              </h6>
              <h2 className="text-white text-5xl font-bold leading-tight uppercase mb-5">
                Create, Sell &amp; Collect Top NFTs.
              </h2>
              <p className="text-white text-[15px] leading-[30px] mt-5">
                Liberty NFT Market is a really cool and professional design for your NFT websites. 
                This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related 
                web portals. Liberty can be freely downloaded from TemplateMos free css templates.
              </p>
              <div className="flex flex-wrap mt-8 space-x-4">
                <Link 
                  href="/explore"
                  className="relative inline-block px-8 py-3 text-sm text-white bg-transparent border border-[#7453fc] rounded-full font-medium capitalize tracking-wider transition-all duration-300 overflow-hidden hover:bg-[#7453fc] hover:text-white group"
                >
                  <span className="relative z-10">Explore Top NFTs</span>
                  <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
                </Link>
                <Link 
                  href="https://youtube.com/templatemo"
                  target="_blank"
                  className="relative inline-block px-8 py-3 text-sm text-white bg-[#7453fc] border border-[#7453fc] rounded-full font-medium capitalize tracking-wider transition-all duration-300 overflow-hidden hover:bg-white hover:text-[#7453fc] hover:border-white group"
                >
                  <span className="relative z-10">Watch Our Videos</span>
                  <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Content - Carousel */}
          <div className="lg:col-span-5 lg:col-start-8 ">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showArrows={true}
              
              renderArrowPrev={(clickHandler) => (
                <button
                  onClick={clickHandler}
                  className="absolute left-0 bottom-[-76px] z-10 w-[46px] h-[46px] bg-white text-[#7453fc] rounded-full flex flex-wrap items-center justify-center text-2xl transition-opacity hover:opacity-100"
                >
                  ‹
                </button>
              )}
              renderArrowNext={(clickHandler) => (
                <button
                  onClick={clickHandler}
                  className="absolute right-0 bottom-[-76px] z-10 w-[46px] h-[46px] bg-white text-[#7453fc] rounded-full flex flex-wrap items-center justify-center text-2xl transition-opacity hover:opacity-100"
                >
                  ›
                </button>
              )}
            >
              <div>
                <Image 
                  src={bannerImg1}
                  alt="Banner 1"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
              <div>
                <Image 
                  src={bannerImg2}
                  alt="Banner 2"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;