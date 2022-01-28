import React from 'react';
import DogBreedsItem from './DogBreedsItem';

export default function DogBreedsList(props) {
  return <div className ='dog-breed-list'>
    Dog Breeds 
    <div>{props.DogBreeds.map((DogBreeds, i) => <DogBreedsItem key = {DogBreeds.name, i} name={DogBreeds.name} age={DogBreeds.age} breed={DogBreeds.breed} image={DogBreeds.image_url} />)}</div>
  </div>;
}
