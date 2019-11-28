import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

// Functional Stateless Components
// This should be used when you are not using lifecycle methods or state refs.
// ES6 Object Destruction: Because of object destructuring, we can use {movie} inplace of props. 
// {`{variable.here}`}  — String Interpolation 
const Movie = ({movie}) => (
  <div>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};
