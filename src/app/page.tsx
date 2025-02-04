
import MainBanner from "@/components/MainBanner";
import CategoriesCollections from "@/components/CategoriesCollections";
import CreateNFTSection from "@/components/CreateNFTSection";
import CurrentlyMarket from "@/components/CurrentlyMarket";
  

export default function Home() {
  return (
    <>
     
        <main>    
            <MainBanner />
            <CategoriesCollections />
            <CreateNFTSection />
            <CurrentlyMarket />
        </main>

    </>
  );
}
