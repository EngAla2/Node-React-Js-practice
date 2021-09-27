import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateUser from './comp/create_user';
import Home from './comp/home';
import NavBar from './comp/nav_bar';
import Users from './comp/users';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <CreateUser />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
