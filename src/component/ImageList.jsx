import React from 'react';
import styles from '../styles/Home.module.css'
import ImageCard from './ImageCard';


const ImageList = (props) => {
  return (
    <div className="grid grid-cols-3 pb-4 min-w-250px" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250, 1fr))', gridAutoRows:'10px' }}>
      {props.images.map((image) => (
        <ImageCard
          key={image.id} // Add a unique key for each image
          image={image}
          className=''
        />
      ))}

    </div>
  );
};

export default ImageList;

// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5