
import React from 'react';

import LandCruisersItem from './LandcruiserItem';

export default function LandCruiserList(props) {
  return <div className='landcruisers-list'>
        LandCruisers
    <p>{
      props.landcruisers.map((landcruisers, i) =>
        <LandCruisersItem key={`${landcruisers.model}-${i}
            `}{...landcruisers} />)}


    </p>
  </div>;
}
