import React from 'react';
import './App.css';
// import your arrays here
import CandiesList from './CandiesList';
import { Candies } from './candies-data';


function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <div className='candies-list'>
        <CandiesList Candies = {Candies} />
      </div>
    </div>
  );
}

export default App;
