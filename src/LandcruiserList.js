
import React from 'react';

import LandCruisersItem from './LandcruiserItem';

export default function LandCruiserList(props) {
  return <div className='landcruisers-list'>
    <h2>LandCruisers</h2>
    <div>{
      props.landcruisers.map((landcruisers, i) =>
        <LandCruisersItem key={`${landcruisers.model}-${i}
            `}{...landcruisers} />)}

    </div>
  </div>;
}
