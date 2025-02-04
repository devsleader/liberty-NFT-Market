"use client";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import featured1 from '@/images/featured-01.jpg';
import featured2 from '@/images/featured-02.jpg';
import featured3 from '@/images/featured-03.jpg';
import featured4 from '@/images/featured-04.jpg';
import author from '@/images/author.jpg';
import DiscoverBG from '@/images/dark-bg.jpg'
import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface AuthorProps {
  name: string;
  username: string;
  image: StaticImageData;
}

interface ItemProps {
  title: string;
  image: StaticImageData;
  author: AuthorProps;
}

const FeaturedExplore = () => {
  const [slidePercentage, setSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      setSlidePercentage(window.innerWidth < 768 ? 100 : 33.33);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items: ItemProps[] = [
    {
      title: "Triple Mutant Ape Bored",
      image: featured1,
      author: {
        name: "Liberty Artist",
        username: "@libertyart",
        image: author
      }
    },
    {
      title: "Bored Ape Kennel Club",
      image: featured2,
      author: {
        name: "Liberty Artist",
        username: "@libertyart",
        image: author
      }
    },
    {
      title: "Genesis Club by KMT",
      image: featured3,
      author: {
        name: "Liberty Artist",
        username: "@libertyart",
        image: author
      }
    },
    {
      title: "Crypto Aurora Guy",
      image: featured4,
      author: {
        name: "Liberty Artist",
        username: "@libertyart",
        image: author
      }
    }
  ];

  return (
    <section className="bg-[#1e1e1e]"
    style={{ backgroundImage: `url(${DiscoverBG.src})` }}>
      <div className='mt-[-10rem] '>
      <div className="mx-auto px-4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={slidePercentage}
          // dots = {slidePercentage === 100}
          emulateTouch={true}
          showIndicators={false}
          className="featured-carousel"
          renderArrowPrev={(clickHandler) => (
            <button
              onClick={clickHandler}
              className={`absolute left-[0px] top-[200px] z-10 w-[46px] h-[46px] bg-white text-[#7453fc] rounded-full flex flex-wrap items-center justify-center text-2xl transition-all hover:opacity-100 ${slidePercentage === 100 ? 'hidden' : ''}`}
            >
              ‹
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button
              onClick={clickHandler}
              className={`absolute right-[0px] top-[200px] z-10 w-[46px] h-[46px] bg-white text-[#7453fc] rounded-full flex flex-wrap items-center justify-center text-2xl transition-all hover:opacity-100 ${slidePercentage === 100 ? 'hidden' : ''}`}
            >
              ›
            </button>
          )}
        >

          {items.map((item, index) => (
            <div key={index} className="px-3">
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full object-cover rounded-2xl"
                    width={500}
                    height={400}
                  />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(40,43,47,0.9)] border border-[rgba(64,66,69,0.9)] p-6 rounded-2xl mt-4">
                    <h4 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h4>
                    <div className="flex flex-wrap items-center justify-around">
                      <div className='w-12 h-12 rounded-full'>
                      <Image
                        src={item.author.image} 
                        alt={item.author.name} 
                        className="w-12 h-12 rounded-full"
                      ></Image>
                      </div>
                      <div>
                        <h6 className="text-white font-normal">
                          {item.author.name}
                        </h6>
                        <a 
                          href="#" 
                          className="text-[#7453fc] font-bold hover:text-white transition-colors"
                        >
                          {item.author.username}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </section>
  );
};

export default FeaturedExplore;