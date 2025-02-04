import React from 'react';
import Image from 'next/image';
import CreateBG from '@/images/main-bg.jpg';

import icon2 from '@/images/icon-02.png';
import icon4 from '@/images/icon-04.png';
import icon6 from '@/images/icon-06.png';

const CreateNFTSection = () => {
  return (
    <div className="relative py-32 bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: `url(${CreateBG.src})` }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Header Section */}
          <div className="lg:col-span-8">
            <div className="relative z-10 mb-12">
              <div className="w-24 h-0.5 bg-white mb-8"></div>
              <h2 className="text-3xl font-bold text-white">
                Create Your NFT & Put It On The Market.
              </h2>
            </div>
          </div>
          
          {/* Button Section */}
          <div className="lg:col-span-4">
            <div className="text-right">
              <a href="/create" 
                 className="relative inline-block px-8 py-3 text-sm text-white bg-[#7453fc] border border-[#7453fc] 
                          rounded-full font-medium relative overflow-hidden transition-all duration-300 
                          hover:bg-white hover:text-[#7453fc] hover:border-white">
                Create Your NFT Now
                <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
              </a>
              
            </div>
          </div>

          {/* Steps Section */}
          <div className="lg:col-span-4">
            <div className="relative mt-8">
              <div className="absolute right-0 -top-5">
                <h6 className="text-white">1</h6>
              </div>
              <div className="relative after:content-[''] after:absolute after:w-px after:h-[95%] 
                            after:bg-white/20 after:right-1.5 after:top-[5%]">
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-wrap items-center justify-center">
                  <Image src={icon2} alt="Wallet Setup" width={31} height={31} />
                </div>
                <h4 className="text-xl font-bold text-white mt-8 mb-4">Set Up Your Wallet</h4>
                <p className="text-white text-sm leading-relaxed pr-8">
                  NFT means Non-Fungible Token that are used in digital cryptocurrency markets. 
                  There are many different kinds of NFTs in the industry.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative mt-8">
              <div className="absolute right-0 -top-5">
                <h6 className="text-white">2</h6>
              </div>
              <div className="relative after:content-[''] after:absolute after:w-px after:h-[95%] 
                            after:bg-white/20 after:right-1.5 after:top-[5%]">
                <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-wrap items-center justify-center">
                  <Image src={icon4} alt="Add NFT" width={31} height={31} />
                </div>
                <h4 className="text-xl font-bold text-white mt-8 mb-4">Add Your Digital NFT</h4>
                <p className="text-white text-sm leading-relaxed pr-8">
                  There are 5 different HTML pages included in this NFT
                  <a href="#" className="text-[#33CCFF]"> website template</a>. 
                  You can edit or modify any section on any page as you required.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative mt-8">
              <div className="w-[62px] h-[62px] bg-white rounded-full flex flex-wrap items-center justify-center">
                <Image src={icon6} alt="Sell NFT" width={31} height={31} />
              </div>
              <h4 className="text-xl font-bold text-white mt-8 mb-4">Sell Your NFT & Make Profit</h4>
              <p className="text-white text-sm leading-relaxed pr-8">
                If you would like to support our TemplateMo website, please visit
                <a href="#" className="text-[#33CCFF]"> our contact page</a> to 
                make a PayPal contribution. Thank you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFTSection;