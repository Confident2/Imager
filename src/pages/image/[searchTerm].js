// pages/images/[searchTerm].js

import React from 'react';
import { useRouter } from 'next/router';
import ImageList from '../../components/ImageList';
import imageData from '../../imageData.json';

const SearchResults = () => {
  const router = useRouter();
  const { searchTerm } = router.query; // Access the search term from the query params

  // Filter the images based on the search term
  const filteredImages = imageData.images.filter((image) =>
    image.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h1>
      <ImageList images={filteredImages} />
    
    </div>
  );
};

export default SearchResults;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}