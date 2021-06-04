import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function FriendsList() {
  const [state, setState] = useState({
    friends: []
  });

  const getFriends = () => {
    axiosWithAuth().get('/friends')
    .then(res => {
      setState({
        friends: res.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getFriends()    
    }
  )
//place holder, for now
  return (
    <div> 
      {state.setfriends()} 
    </div>
  )
}

export default FriendsList;