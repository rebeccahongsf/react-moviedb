import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
)

export default App;

const Test = () => (
  <h1>TEST</h1>
)
