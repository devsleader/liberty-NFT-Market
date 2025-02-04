import ItemDetails from "./ItemDetails";
import CurrentBiddings from "./CurrentBiddings";

import ItemImage from '@/images/item-details-01.jpg'
import Author2 from '@/images/author-02.jpg';
import current1 from '@/images/current-01.jpg'
import current2 from '@/images/current-02.jpg'
import current3 from '@/images/current-03.jpg'
import current4 from '@/images/current-04.jpg'

function ItemDetailsCurrentBiddings() {
    const itemDetails = {
      itemimage: ItemImage,
      title: "Dolores Haze Westworld Eye",
      authorimage: Author2,
      authorName: "Liberty Artist",
      authorUsername: "@libertyart",
      description: "Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      currentBid: {
        eth: "6.06",
        usd: "($8,025.50)"
      },
      owner: {
        name: "David Walker",
        username: "(@davidwalker)"
      },
      endsIn: {
        countdown: "3D 05H 20M 58S",
        date: "(January 22nd, 2021)"
      }
    };
  
    const bids = [
        {
          image: current1,
          name: "David Walker",
          username: "@davidwalker",
          amount: "0.06 ETH",
          date: "24/07/2022, 22:00"
        },
        {
          image: current2,
          name: "David Walker",
          username: "@davidwalker",
          amount: "0.06 ETH",
          date: "24/07/2022, 22:00"
        },
        {
          image: current3,
          name: "David Walker",
          username: "@davidwalker",
          amount: "0.06 ETH",
          date: "24/07/2022, 22:00"
        },
        {
          image: current4,
          name: "David Walker",
          username: "@davidwalker",
          amount: "0.06 ETH",
          date: "24/07/2022, 22:00"
        },
        {
          image: current4,
          name: "David Walker",
          username: "@davidwalker",
          amount: "0.06 ETH",
          date: "24/07/2022, 22:00"
        },
        {
          image: current1,
          name: "David Walker",
          username: "@davidwalker",
          amount: "0.06 ETH",
          date: "24/07/2022, 22:00"
        }
      ];
      
  
    return (
      < >
        <ItemDetails {...itemDetails} />
        <CurrentBiddings bids={bids} />
      </>
    );
}

export default ItemDetailsCurrentBiddings;
  