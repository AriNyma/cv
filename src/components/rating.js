import React from 'react';

const Rating = ({ value, onClick = () => {} }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= value ? 'star-filled' : 'star-empty'}`}
          onClick={onClick}
        > ★ </span>
      );
    }
    return <div>{stars}</div>;
  };
  
  export default Rating;