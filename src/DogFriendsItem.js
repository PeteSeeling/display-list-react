import React from 'react';

export default function DogFriendsItem(props){
  return <div className='dogFriends-item'>
    <p>{props.name} is {props.age} and a {props.breed}. {props.name} is friends with {props.friendName} who is a{props.type}{props.image}</p>

  </div>;
}
