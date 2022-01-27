
import React from 'react';
import CandyItem from './CandyItem';
import styles from './Candies.css';

export default function CandiesList(props) {
  return <div className={styles['candies-list']}>
      I am the Candies List 
    <p>{props.Candies.map((Candies, i) => <CandyItem key ={Candies, i} candyName={Candies} />)}
    </p>
    
    
  </div>;
}

