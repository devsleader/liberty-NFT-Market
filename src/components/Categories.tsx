// components/Categories.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import icon1 from '@/images/icon-01.png';
import icon2 from '@/images/icon-02.png';
import icon3 from '@/images/icon-03.png';
import icon4 from '@/images/icon-04.png';
import icon5 from '@/images/icon-05.png';
import icon6 from '@/images/icon-06.png';

const categories = [
  { icon: icon1, title: 'Block chain' },
  { icon: icon2, title: 'Digital Art' },
  { icon: icon3, title: 'Music Art' },
  { icon: icon4, title: 'Virtual World' },
  { icon: icon5, title: 'Valuable NFT' },
  { icon: icon6, title: 'Triple NFT' },
];

const Categories = () => {
  return (
    <div className="categories">
      <SectionHeading title="Browse Through Our" emphasizedText="Categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <div className="item bg-[#282b2f] text-center p-[30px] rounded-[20px] border border-[#404245] relative">
              <div className="icon w-[62px] h-[62px] inline-flex flex-wrap items-center justify-center bg-white rounded-full">
                <Image 
                  src={category.icon} 
                  alt={category.title}
                  width={31}
                  height={31}
                  className="max-w-[31px]"
                />
              </div>
              <h4 className="mt-4 text-[20px] text-white font-bold">{category.title}</h4>
              <div className="icon-button">
                <Link 
                  href="#" 
                  className="absolute left-1/2 -bottom-[23px] w-[46px] h-[46px] bg-white text-[#7453fc] rounded-full flex flex-wrap items-center justify-center text-lg transform -translate-x-[23px] transition-all duration-300 opacity-0 invisible hover:bg-[#7453fc] hover:text-white group-hover:visible group-hover:opacity-100"
                >
                  <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;