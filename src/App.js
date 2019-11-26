import React from 'react';
import { Component } from 'react';
import Movie from './Movie';

import logo from './logo.svg';
import './App.css';

const movies = [{
    id: 1,
    title: 'Star Wars',
    desc: 'Nullam dictum felis eu pede mollis pretium.'
  }, {
    id: 2,
    title: 'Spider Man'
  }, {
    id: 3,
    title: '36th Chamber of Shaolin'
  }, {
    id: 4,
    title: '5 Deadly Venoms'
  }
];

class App extends Component {  
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=500892bdb8989fc3ae5765f1838aa9e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
    } catch(e) {
      console.log(e);
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map((movie) => (
          <Movie 
            key={movie.id}
            movie={movie} 
            desc={movie.desc}
          />
        ))}
      </div>
    );
  }
}

export default App;
