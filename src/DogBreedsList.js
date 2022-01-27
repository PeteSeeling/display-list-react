import React from 'react';
import DogBreedsItem from './DogBreedsItem';

export default function DogBreedsList(props) {
  return <div className>
    Dog Breeds 
    <p>{props.DogBreeds.map((DogBreeds, i) => <DogBreedsItem key = {DogBreeds.name, i} name={DogBreeds.name} age={DogBreeds.age} breed={DogBreeds.breed} />)}</p>
  </div>;
}
