"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '@/images/logo.png'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/details', label: 'Item Details' },
    { href: '/author', label: 'Author' },
    { href: '/create', label: 'Create Yours' }
  ];

  return (
    <>
      <header className={`
        fixed w-full z-50 transition-all duration-500 ease-in-out
        ${isSticky ? 'top-0 bg-white shadow-md' : 'top-[30px]'}
      `}>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-full">
              <nav className={`
                flex flex-wrap items-center justify-around justify-between min-h-[70px] px-8 py-4 rounded-[50px] transition-all duration-500
                ${isSticky ? 'bg-transparent p-0' : 'bg-white'}
              `}>
                {/* Logo */}
                <Link href="/" className="flex-[0_0_30%] transition-all duration-300">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={isSticky ? 180 : 223}
                    height={50}
                    className="transition-all duration-300"
                  />
                </Link>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden ml-auto relative z-50"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className="w-6 h-6 flex flex-wrap items-center justify-center">
                    <span className={`
                      block w-6 h-0.5 bg-[#7453fc] transition-all duration-300
                      relative ${isMobileMenuOpen ? 'rotate-45' : ''}
                      before:content-[''] before:block before:absolute before:w-6 
                      before:h-0.5 before:bg-[#7453fc] before:transition-all
                      before:duration-300
                      ${isMobileMenuOpen 
                        ? 'before:rotate-90 before:top-0' 
                        : 'before:-top-2'
                      }
                      after:content-[''] after:block after:absolute after:w-6
                      after:h-0.5 after:bg-[#7453fc] after:transition-all
                      after:duration-300
                      ${isMobileMenuOpen 
                        ? 'after:opacity-0' 
                        : 'after:top-2'
                      }
                    `}></span>
                  </div>
                </button>

                {/* Navigation Menu */}
                <div className={`
                  fixed top-0 right-0 h-full w-64 shadow-xl bg-white md:bg-transparent
                  transform transition-transform duration-300 ease-in-out
                  md:relative md:w-auto md:shadow-none md:transform-none
                  ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                  md:translate-x-0
                `}>
                  <ul className="
                    flex flex-wrap flex-col flex-[0_0_30%] md:flex-row items-start md:items-center
                    pt-20 md:pt-0 px-6 md:px-0 space-y-4 md:space-y-0
                  ">
                    {navItems.map((item) => (
                      <li key={item.label} className="w-full md:w-auto md:px-[10px]">
                        <Link
                          href={item.href}
                          className={`
                            block font-medium text-sm px-4 py-2 rounded-[18px]
                            transition-all duration-300 w-full text-left
                            ${pathname === item.href
                              ? 'text-white bg-[#7453fc]'
                              : 'text-[#2a2a2a] hover:text-white hover:bg-[#7453fc]'}
                          `}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
          md:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;