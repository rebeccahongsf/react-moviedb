import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';


// Functional Stateless Components
// This should be used when you are not using lifecycle methods or state refs.
// ES6 Object Destruction: Because of object destructuring, we can use {movie} inplace of props. 
const Movie = ({movie}) => (
  <div>
    <h3>{movie.title}</h3>
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};
