import React from 'react';

export default function LandCruisersItem(props){
  return <div className='landcruisers-item'>
    <h2>Model: { props.model }</h2>
    <h3> Max Passengers: { props.maxPassengers }</h3>
    
    <div className='facts'>
        Facts:
      {
        props.facts.map((fact, i) => <div key ={`${fact}-${i}`}>{ fact } </div>)
      }

    </div>
  </div>;
}
