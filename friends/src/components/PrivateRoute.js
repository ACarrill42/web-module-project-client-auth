import React from 'react';
import {Route} from 'react-router-dom';
import Login from './Login';

const PrivateRoute = ({component: newComponent, ...rest}) => {
  return (
    <Route {...rest} render = {(props) => {
      if(localStorage.getItem('token')) {
        return <newComponent {...props}/>
      }  else {
        return(<Login/>)
      }
    }}/>
  )
}

export default PrivateRoute