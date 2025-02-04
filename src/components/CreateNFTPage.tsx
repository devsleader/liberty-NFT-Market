"use client";

import React from 'react';
import CreateNFTForm from './CreateNFTForm';
import NFTPreview from './NFTPreview';
import Image1 from '@/images/create-yours.jpg'
import Author2 from '@/images/author-02.jpg'
import BGIMG from '@/images/dark-bg.jpg'

const CreateNFTPage = () => {
  const handleFormSubmit = () => {
    console.log("DONE");
    // Handle the form submission logic here
  };

  return (
    <div className="flex flex-wrap flex-col gap-8" style={{ backgroundImage: `url(${BGIMG.src})` }}>
      <CreateNFTForm onSubmit={handleFormSubmit} />
      <NFTPreview
        title="Dolores Haze Westworld Eye"
        author="Kataleya Smithee"
        authorUsername="@kataleey"
        details="Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        currentBid="0.06 ETH"
        bid="200$"
        endtime="3D 05H 20M 58S"
        endDate="20march 2024"
        imageUrl= {Image1}
        authorImageUrl= {Author2}
      />
    </div>
  );
};

export default CreateNFTPage;