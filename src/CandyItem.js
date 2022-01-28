import React from 'react';

export default function CandyItem(props){
  return <div className="candy-item">
    <p>{props.candyName}</p>
  </div>;
}
