import React, {useState} from 'react';
import {tokenAuth} from './auth';

function Login(props) {
  const [state, setState] = useState({
    credentials : {
      username: '',
      password: ''
    }
  })
  const [isLoading, setIsLoading] = useState('Loading Information');

  const handleChange = e => {
    setState({
      credentials:{
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    tokenAuth().post('/login', state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token',res.data.payload)
        props.history.push('/friendsList');
      })
      .catch(err => {
        console.log(err, 'cannot login')
      })
  }
  return(
    <div>
      <form onSubmit = {onSubmit}>
        Username: 
        <input 
        type = 'text'
        name = 'username'
        value = {state.credentials.username}
        onChange = {handleChange}
        />
        Password: 
        <input 
        type = 'text'
        name = 'password'
        value = {state.credentials.password}
        onChange = {handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default Login;