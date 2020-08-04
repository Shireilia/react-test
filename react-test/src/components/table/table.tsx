import React, { Component } from "react";
import { Movie } from "../../models/movie";
import TableHeaderRow from "../tableHeaderRow/tableHeaderRow";
import TableRow from "../tableRow/tableRow";
import "./table.css";

export default class Table extends Component<PropsTable, object> {
  render() {
    return (
      <div className="table">
        <TableHeaderRow />
        {this.props.movieList.map(movie => {
          return <TableRow movie={movie} key={movie.imdbID} />;
        })}
      </div>
    );
  }
}

export interface PropsTable {
  movieList: Movie[];
}
