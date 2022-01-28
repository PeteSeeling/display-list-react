import React from 'react';
import { DogFriends } from './DogFriends-Data';
import DogFriendsItem from './DogFriendsItem';

export default function DogFriendsList(props) {
  return <div className='dog-friends'>
    Dog Friends
    <p>{
      props.DogFriends.map((DogFriends, i) =>
        <DogFriendsItem key={`${DogFriends.name}-${i}`}
          {...DogFriends}/>
      )}
    </p>

  </div>;
}
