import React from 'react';
import ImageCarousel from './ImageCarousel';
const images = [
  "/image01.png",
  "/image02.png",
  // ... more images
];
const ArtPage: React.FC = () => {
  return (
    <div>
        <h1>My Carousel</h1>
        <ImageCarousel images={images} />
    </div>
);
}

export default ArtPage;
