import React from 'react';

import DogFriendsItem from './DogFriendsItem';

export default function DogFriendsList(props) {
  return <div className='dog-friends'>
    Dog Friends
    <div>{
      props.DogFriends.map((DogFriends, i) =>
        <DogFriendsItem key={`${DogFriends.name}-${i}`}
          {...DogFriends}/>
      )}
    </div>

  </div>;
}
