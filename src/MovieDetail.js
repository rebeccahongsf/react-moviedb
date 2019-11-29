import React from 'react';
import { Component } from 'react';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {  
  state = {
    movie: {}
  }
  
  // Lifecycle Method
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=500892bdb8989fc3ae5765f1838aa9e1&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie: movie
      })
    } catch(e) {
      console.log(e);
    }
  }
  
  render() {
      const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
