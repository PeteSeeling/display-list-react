import React from 'react';

export default function DogBreedsItem(props){
  return <div className='dogBreed-Item'>
    <p>{props.name} is {props.age} years old and a {props.breed}. {props.image}
    </p>


  </div>;
}
