import ProtectedRoute from './components/protected';
import {Switch, Link, Route} from 'react-router-dom';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to = '/login'>Login</Link>
        </li>
      </ul>

      <Switch>
        <Route path = '/login' component = {Login}/>
        <ProtectedRoute exact path = '/friendsList'/>
      </Switch>
    </div>
  );
}

export default App;
