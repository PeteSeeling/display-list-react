import React from 'react';
import { DogFriends } from './DogFriends-Data';



export default function DogFriendsItem(props){
  return <div className='dogFriends-item'>
    <h2>{ props.name }</h2>
    <h3>{ props.breed }</h3>
    <h4>{ props.age }</h4>
   
   
    <div className='friend'>
   
      {
        <div className='dog-friend'>
           friend:
          {
            props.friendName.map((friendName, i) =>
              <p key={`${friendName.type}-${i}`}type={friendName.type}></p>)
          }
        </div>
      }
    </div>
  </div>
  ;
}
