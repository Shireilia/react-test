import React, { Component } from "react";
import { Movie } from "../../models/movie";
import "./movie-card.css";

export default class MovieCard extends Component<PropsCard, object> {
  render() {
    return (
      <div className="movie">
        <img src={this.props.movie.Poster} alt="poster" />
        <div>{this.props.movie.Year}</div>
        <div>{this.props.movie.Title}</div>
        <div>{this.props.movie.Plot}</div>
      </div>
    );
  }
}

interface PropsCard {
  movie: Movie;
}
