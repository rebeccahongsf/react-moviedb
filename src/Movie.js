import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => (
  <div>
    <h1>{this.props.movie.title}</h1>
    <p>{this.props.desc}</p>
  </div>
)

// static propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired
//   })
// }
