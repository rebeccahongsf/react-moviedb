import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';

const App = () => (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/test" component={Test} />
          <MoviesList />
        </Switch>
      </div>
    </Router>
)

export default App;

const Test = () => (
  <h1>TEST</h1>
)
