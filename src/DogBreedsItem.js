import React from 'react';

export default function DogBreedsItem(props){
  return <div className='dogBreed-Item'>
    <div>{props.name} is {props.age} years old and a {props.breed}. {props.image}
    </div>


  </div>;
}
