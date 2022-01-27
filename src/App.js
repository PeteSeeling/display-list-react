import React from 'react';
import './App.css';
// import your arrays here
import CandiesList from './CandiesList';
import DogBreedsList from './DogBreedsList';

import { Candies } from './candies-data';
import { DogBreeds } from './DogBreeds-Data';



function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <div className='candies-list'>
        <CandiesList Candies = {Candies} />
      </div>
      <div className='dogbreeds-list'>
        <DogBreedsList DogBreeds = {DogBreeds} />
      </div>
    </div>
  );
}

export default App;
