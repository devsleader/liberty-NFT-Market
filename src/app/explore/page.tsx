import PageHeading from "@/components/PageHeading";
import FeaturedExplore from "@/components/FeaturedExplore";
import DiscoverItems from "@/components/DiscoverItems";
import TopSeller from "@/components/TopSeller";
function Explore () {
    return (
        <>
    <PageHeading
      subtitle="Liberty NFT Market"
      title="Discover Some Top Items"
      currentPage="Explore"
      link={{ text: "Explore", href: "/explore" }}
    />
   
    <FeaturedExplore />
    <DiscoverItems />
    <TopSeller />
    </>
    );
};
export default Explore;