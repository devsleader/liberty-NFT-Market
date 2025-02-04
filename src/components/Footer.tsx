import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#a054f4]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <p className="text-center text-white">
              Copyright © 2025 {' '}
              <Link href="#" className="text-white hover:text-[#7453fc] transition-colors">
                Liberty
              </Link>
              {' '}NFT Marketplace Co., Ltd. All rights reserved.
              &nbsp;&nbsp;
              Designed by {' '}
              <Link 
                href="https://mian-abu-obaida-portfolio.vercel.app/" 
                target="_blank"
                rel="sponsored"
                title="HTML CSS Templates"
                className="text-white font-bold hover:text-[#000] transition-colors"
              >
                Mian Abu Obaida
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;