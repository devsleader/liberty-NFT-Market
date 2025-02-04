import PageHeading from "@/components/PageHeading";
import ItemDetailsCurrentBiddings from "@/components/ItemDetailsCurrentBiddings";
import CreateNFTSection from "@/components/CreateNFTSection";
function Details () {
    return (
        <>
        {/* ........ item detail page ......... */}
    <PageHeading
      subtitle="Liberty NFT Market"
      title="Veiw Items Details"
      currentPage="Explore"
      link={{ text: "item details", href: "/explore" }}
      showButtons
      background
    />
    < ItemDetailsCurrentBiddings />
    <CreateNFTSection />
         </>
    );
};
export default Details;