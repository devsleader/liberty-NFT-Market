import AuthorProfile from "./AuthorProfile";
import AuthorItems from "./AuthorItems";
import AuthorProfileImg from '@/images/single-author.jpg'
import Author1 from '@/images/author.jpg'
import Author2 from '@/images/author-02.jpg'
import Author3 from '@/images/author-03.jpg'

import discover3 from '@/images/discover-03.jpg'
import discover4 from '@/images/discover-04.jpg'
import discover5 from '@/images/discover-05.jpg'
import discover6 from '@/images/discover-06.jpg'
import AuthorBG from '@/images/dark-bg.jpg'


 function AuthorProfileAuthorItems() {
  const author = {
    name: "Melanie Smith",
    username: "@melanie32",
    image: AuthorProfileImg,
    stats: {
      likes: 1238,
      bids: 1238,
      eth: 1238,
      followers: 559
    }
  };

  const items = [
    {
      image: discover3,
      authorimage: Author1,
      title: "Mutant Ape Bored",
      currentBid: "2.03 ETH",
      endsIn: "25th Nov"
    },
    {
      image: discover6,
      authorimage: Author2,
      title: "Mutant Ape Bored",
      currentBid: "2.03 ETH",
      endsIn: "25th Nov"
    },
    {
      image: discover5,
      authorimage: Author3,
      title: "Mutant Ape Bored",
      currentBid: "2.03 ETH",
      endsIn: "25th Nov"
    },
    {
      image: discover4,
      authorimage: Author1,
      title: "Mutant Ape Bored",
      currentBid: "2.03 ETH",
      endsIn: "25th Nov"
    }
  ];
  

  return (
    <div style={{ backgroundImage: `url(${AuthorBG.src})` }}>
      <AuthorProfile author={author}  />
      <AuthorItems items={items} />
    </div>
  );
}
export default AuthorProfileAuthorItems;