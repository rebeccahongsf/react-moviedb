import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
}
  render() {
    return(
      <div>
        <h1>{this.props.movie.title}</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
