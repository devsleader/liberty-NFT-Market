import PageHeading from "@/components/PageHeading";
import AuthorProfileAuthorItems from "@/components/AuthorProfileAuthorItems";
import CreateNFTSection from "@/components/CreateNFTSection";
function Author () {
    return (
      <>
        {/* ........ item Author page ......... */}
        <PageHeading
          subtitle="Liberty NFT Market"
          title="Veiw Author Details"
          currentPage="Explore"
          link={{ text: "author details", href: "/explore" }}
          showButtons
          background
         />
         <AuthorProfileAuthorItems />
         <CreateNFTSection />

      </>
    );
};
export default Author;