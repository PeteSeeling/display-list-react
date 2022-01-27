import React from 'react';
import { DogFriends } from './DogFriends-Data';
import DogFriendsItem from './DogFriendsItem';

export default function DogFriendsList(props) {
  return <div className='dog-friends'>
    <h3>Dog Friends</h3>
    <p>{
      props.DogFriends.map((DogFriends, i) => <DogFriendsItem key = {DogFriends.name, i} name= {DogFriends.name} age={DogFriends.age} breed={DogFriends.breed} friend={DogFriends.friend.friendName} type={DogFriends.friend.type} image={DogFriends.friend.image} />)}</p>


  </div>;
}
