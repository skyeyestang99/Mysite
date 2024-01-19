import React from 'react';
import './Photos.css';
import star1 from './star1.jpg'
import star2 from './star2.jpg'
import star3 from './star3.jpg'
import star4 from './star4.jpg'

const Photos = () => {
  // Array of photo URLs for demonstration purposes
  // Replace these with the URLs of your actual photographs
  const photoUrls = [
    star1,
    star2,
    star3,
    star4
  ];

  return (
    <section id="photo" className="photo-gallery">
      <h2>My Star Collection</h2>
      <div className="photo-container">
        {photoUrls.map((url, index) => (
          <div className="photo" key={index}>
            <img src={url} alt={`Photography ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
