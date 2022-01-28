import React from 'react';
import './App.css';
// import your arrays here
import CandiesList from './CandiesList';
import DogBreedsList from './DogBreedsList';
import DogFriendsList from './DogFriendsList';

import { Candies } from './candies-data';
import { DogBreeds } from './DogBreeds-Data';
import { DogFriends } from './DogFriends-Data';
import { landcruisers } from './LandcruiserArray';
import LandCruiserList from './LandcruiserList';


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
      <div className='dogfriends-list'>
        <DogFriendsList DogFriends = {DogFriends} />
      </div>
      <div className='landcruisers-list'>
        <LandCruiserList landcruisers ={landcruisers} />
      </div>
    </div>
  );
}

export default App;
