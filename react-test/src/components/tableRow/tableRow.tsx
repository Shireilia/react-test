import React, { Component } from "react";
import { Movie } from "../../models/movie";
import "./tableRow.css";

export default class TableRow extends Component<PropsTableRow> {
  render() {
    return (
      <div className="row">
        <div className="first-cell">
          <img src={this.props.movie.Poster} />
        </div>
        <div className="cell">{this.props.movie.Title}</div>
        <div className="cell">{this.props.movie.Year}</div>
      </div>
    );
  }
}

export interface PropsTableRow {
  movie: Movie;
}
