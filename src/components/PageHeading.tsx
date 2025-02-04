import React from 'react';
import Link from 'next/link';
import HeaderBG from '@/images/heading-bg.jpg';

interface PageHeadingProps {
  subtitle: string;
  title: string;
  currentPage: string;
  link?: {
    text: string;
    href: string;
  };
  showButtons?: boolean;
  background?: boolean; // Optional prop to control the background
}

const PageHeading: React.FC<PageHeadingProps> = ({
  subtitle,
  title,
  currentPage,
  link,
  showButtons = false, // Default is false
  background = true, // Default is true
}) => {
  return (
    <div
      className={`relative text-center pt-64 ${background ? 'bg-cover bg-center bg-no-repeat' : ''}`}
      style={background ? { backgroundImage: `url(${HeaderBG.src})` } : {}}
    >
      <div className={`container mx-auto px-4 ${showButtons ? 'pb-32' : 'pb-64'}`}>
        <div className="max-w-4xl mx-auto">
          <h6 className="text-white text-xl mb-4 font-medium tracking-wide">
            {subtitle}
          </h6>
          <h2 className="text-white text-5xl font-bold leading-tight uppercase mb-4">
            {title}
          </h2>
          <span className="text-[#8a75da] text-sm">
            Home &gt; {'    '}
            {link ? (
              <Link href={link.href} className="text-white hover:text-[#7453fc] transition-colors">
                {link.text}
              </Link>
            ) : (
              <span className="text-white">{currentPage}</span>
            )}
          </span>

          {showButtons && (
            <div className="mt-9 flex flex-wrap justify-center gap-8">
              <div className="main-button">
                <a
                  href="#"
                  className="text-sm text-white bg-[#7453fc] border border-[#7453fc] px-8 py-3 
                           rounded-full font-medium capitalize tracking-wider transition-all duration-300 
                           relative overflow-hidden hover:bg-white hover:text-[#7453fc] hover:border-white
                           after:content-[''] after:absolute after:w-[78%] after:h-0.5 
                           after:bg-white after:bottom-0 after:left-1/2 after:-translate-x-1/2"
                >
                  Explore Top NFTs
                </a>
              </div>
              <div className="border-button">
                <a
                  href="#"
                  className="text-sm text-white bg-transparent border border-[#7453fc] px-8 py-3 
                           rounded-full font-medium capitalize tracking-wider transition-all duration-300 
                           relative overflow-hidden hover:bg-[#7453fc]
                           after:content-[''] after:absolute after:w-[78%] after:h-0.5 
                           after:bg-white after:bottom-0 after:left-1/2 after:-translate-x-1/2"
                >
                  Watch Our Videos
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
