
import PageHeading from "@/components/PageHeading";
import CreateNFTPage from "@/components/CreateNFTPage";

import CreateNFTSection from "@/components/CreateNFTSection";
function Create () {
    return (
      <>
        {/* ........ Create NFT page ......... */}
        <PageHeading
          subtitle="Liberty NFT Market"
          title="Create NFT page"
          currentPage="Explore"
          link={{ text: "create", href: "/explore" }}
          showButtons
          background
        />
        <CreateNFTPage />
        <CreateNFTSection />
      </>
    );
};
export default Create;