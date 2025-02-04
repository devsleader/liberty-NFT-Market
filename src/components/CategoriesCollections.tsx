// components/CategoriesCollections.tsx
import Categories from './Categories';
import Collections from './Collections';
import CCBG from '@/images/dark-bg.jpg'

const CategoriesCollections = () => {
  return (
    <div 
      className="categories-collections bg-cover bg-center bg-no-repeat py-[120px] pb-[150px] relative"
    style={{ backgroundImage: `url(${CCBG.src})` }}
    >
      <div className="container mx-auto px-4">
        <Categories />
        <Collections />
      </div>
    </div>
  );
};

export default CategoriesCollections;