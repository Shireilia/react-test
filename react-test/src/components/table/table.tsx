import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Movie } from "../../models/movie";
import MovieCard from "../movie-card/movie-card";
import "./table.css";

export default class Table extends Component<PropsTable, StateTable> {
  constructor(props: PropsTable) {
    super(props);

    this.state = {
      redirect: null
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <ul className="table">
        {this.props.movieList.map(movie => {
          return (
            <li
              className="movie-element"
              key={movie.imdbID}
              onClick={() => {
                this.handleRedirection(movie);
              }}
            >
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    );
  }

  handleRedirection(movie: Movie) {
    this.setState({ redirect: `/films/${movie.imdbID}` });
  }
}

export interface PropsTable {
  movieList: Movie[];
}

export interface StateTable {
  redirect: string | null;
}
