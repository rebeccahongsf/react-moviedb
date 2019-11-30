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
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/react-moviedb">
          <img src={logo} alt="MovieDB logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/react-moviedb" component={MoviesList} />
        <Route path="/react-moviedb/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
)

export default App;