import {axiosWithAuth} from '../utils/axiosWithAuth';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState({
    credentials: {
    username: '',
    password: ''      
    }
  })
  let history = useHistory();

  const handleChange = (e) => {
    setLogin({
      credentials: {
        ...login.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('button click')
    axiosWithAuth().post('/login', login.credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      history.push('/friends')
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input 
          type = 'text'
          name = 'username'
          value = {login.credentials.username}
          onChange = {handleChange}
        />
        <input 
          type = 'text'
          name = 'password'
          value = {login.credentials.password}
          onChange = {handleChange}
        />
        <button>Log In</button>        
      </form>

    </div>
  )
}

export default Login;