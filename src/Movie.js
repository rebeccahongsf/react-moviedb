import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

// Functional Stateless Components
// This should be used when you are not using lifecycle methods or state refs.
// ES6 Object Destruction: Because of object destructuring, we can use {movie} inplace of props. 
// {`{variable.here}`}  — String Interpolation 
const Movie = ({movie}) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={`${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;