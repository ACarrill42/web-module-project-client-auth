import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to = '/login'>Login</Link>            
          </li>
        </ul>
        <Switch>
          <Route path = '/login' component = {Login}/>
          <PrivateRoute exact path = '/protectedFriends' component ={FriendsList}/>
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
