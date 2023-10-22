import React from 'react';
import '../index.css';

const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= value ? 'star-filled' : 'star-empty'}>★</span>
    );
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;