'use client';
import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  isLoading?: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading = true }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setLoaded(true);
    }
  }, [isLoading]);

  return (
    <>
      <div 
        id="js-preloader" 
        className={`fixed inset-0 bg-black/98 flex flex-wrap items-center justify-center opacity-100 visible z-[9999] transition-opacity duration-300 ease-in-out
          ${loaded ? 'opacity-0 invisible pointer-events-none' : ''}`}
      >
        <div className="relative w-[142px] h-10 bg-transparent">
          {/* Main dot */}
          <span className="absolute w-4 h-4 top-3 left-[15px] bg-[#7453fc] rounded-full dot-animation" />
          
          {/* Three dots */}
          <div className="transform translate-x-0 mt-3 ml-[31px] dots-animation">
            {[0, 1, 2].map((index) => (
              <span 
                key={index} 
                className="block float-left w-4 h-4 ml-4 first:ml-0 bg-[#7453fc] rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dot {
          50% {
            transform: translateX(96px);
          }
        }

        @keyframes dots {
          50% {
            transform: translateX(-31px);
          }
        }

        .dot-animation {
          animation: dot 2.8s infinite;
        }

        .dots-animation {
          animation: dots 2.8s infinite;
        }
      `}</style>
    </>
  );
};

export default Preloader;