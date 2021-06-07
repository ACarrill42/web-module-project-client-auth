import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function FriendsList() {
  const [state, setState] = useState({
    friends: [],
    id: ''
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

  const friendsId = () => {
    axiosWithAuth().get('/friends/:id')
      .then(res => {
        setState({
        id: res.data.data            
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

  const newFriend = () => {
    axiosWithAuth.post('/friends', state.friends)
      .then(res => {
        setState({...state, friends: res.data.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getFriends()
    friendsId()  
    newFriend()  
    }
  )
//place holder, for now
  return (
    <div> 
      {setState()} 
    </div>
  )
}

export default FriendsList;