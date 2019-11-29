import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';


class MoviesList extends Component {  
  state = {
    movies: []
  }
  
  // Lifecycle Method
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=500892bdb8989fc3ae5765f1838aa9e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e) {
      console.log(e);
    }
  }
  
  render() {
    console.log(this.state.movies);
    return (
      <MovieGrid>
        {this.state.movies.map((movie) => (
          <Movie 
            key={movie.id}
            movie={movie}
          />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
`;