// components/ImageDisplay.js
import React from 'react';
import imageData from '../data/imageData.json';
import { FaHeart, FaPlus } from 'react-icons/fa';
import Image from 'next/image'; // Import the Image component from Next.js

const ImageDisplay = () => {
  return (
    <div className="w-full max-w-7xl columns-4 gap-3px gap-5 pt-2 pb-8 mx-auto mb-10">
      {imageData.images.map(({ id, description, author, url, tags }) => (
        <div key={id} className="relative">
          <Image src={url} alt={description} width={400} height={400} objectFit="cover" className="mb-3" />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-75 flex items-center justify-center">
            <FaHeart className="text-white text-3xl mr-3 hover:text-red-500 transition-colors duration-300" />
            <FaPlus className="text-white text-3xl hover:text-blue-500 transition-colors duration-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
