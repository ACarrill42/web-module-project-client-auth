import React from 'React';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...theRest}) => {

  return <Route {...theRest} render = {() => {
    if (localStorage.getItem('token') === null) {
      return <Redirect to = '/login' />
    }
    return <Component />
  }}/>
}

export default ProtectedRoute;