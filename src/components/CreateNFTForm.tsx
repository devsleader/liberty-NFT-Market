"use client";

import React, { useState } from 'react';

// Define the shape of the form data
interface FormData {
  title: string;
  description: string;
  username: string;
  price: string;
  royalties: string;
  file: File | null;
}

interface CreateNFTFormProps {
  onSubmit: (formData: FormData) => void; // Use the defined type here
}

const CreateNFTForm: React.FC<CreateNFTFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    username: '',
    price: '',
    royalties: '',
    file: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data to the onSubmit function
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
      <div className="mb-16">
          <div className="w-24 h-0.5 bg-[#7453fc] mb-8"></div>
          <h2 className="text-3xl font-bold text-white">
            Apply For <span className="text-[#7453fc]">Your Item</span> Here.
          </h2>
        </div>
        <form className='bg-[#282b2f] px-8 py-16 rounded-lg grid grid-cols-6 gap-8 justify-center items-center' onSubmit={handleSubmit}>
         
          <div className="form-group col-span-2">
            <label className="text-white mb-2 block">Title</label>
            <input
              type="text"
              placeholder="Enter NFT title"
              className="w-full h-12 bg-[#1e1e1e] border border-[#404245] rounded-full px-4 text-[#afafaf]"
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div className="form-group col-span-2">
            <label className="text-white mb-2 block">Description</label>
            <input
              placeholder="Enter NFT description"
              className="w-full h-12 bg-[#1e1e1e] border border-[#404245] rounded-full px-4 text-[#afafaf]"
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="form-group col-span-2">
            <label className="text-white mb-2 block">Your Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full h-12 bg-[#1e1e1e] border border-[#404245] rounded-full  px-4 text-[#afafaf]"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="form-group col-span-3">
            <label className="text-white mb-2 block">Price</label>
            <input
              type="text"
              placeholder="Enter price for one item (ETH)"
              className="w-full h-12 bg-[#1e1e1e] border border-[#404245] rounded-full px-4 text-[#afafaf]"
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div className="form-group col-span-3">
            <label className="text-white mb-2 block">Royalties</label>
            <input
              type="text"
              placeholder="Suggested: 10%, 20%, 30%. Maximum is 70%"
              className="w-full h-12 bg-[#1e1e1e] border border-[#404245] rounded-full px-4 text-[#afafaf]"
              onChange={(e) => setFormData({ ...formData, royalties: e.target.value })}
            />
          </div>
          <div className="form-group col-span-2">
            <label className="text-white mb-2 block">File</label>
            <input
              type="file"
              className="text-[#afafaf]"
              onChange={(e) => setFormData({ ...formData, file: e.target.files ? e.target.files[0] : null })}
            />
          </div>
          <div className="form-group col-span-4">
            <button
              type="submit"
              className="relative min-w-full text-sm text-white bg-[#7453fc] border border-[#7453fc] px-8 py-3 rounded-[25px] font-medium capitalize tracking-wider transition-all duration-300 relative overflow-hidden hover:bg-white hover:text-[#7453fc] hover:border-white"
            >
              Submit Now
              <span className="absolute bottom-0 left-1/2 w-[78%] h-0.5 bg-white transform -translate-x-1/2"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNFTForm;