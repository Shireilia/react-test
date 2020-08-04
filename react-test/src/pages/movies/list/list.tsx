import axios from "axios";
import React, { Component } from "react";
import Table from "../../../components/table/table";
import { API_KEY, API_URL } from "../../../conf/environnement";
import { Movie } from "../../../models/movie";

export default class MovieList extends Component<object, MovieListState> {
  constructor(props: object) {
    super(props);

    this.state = {
      movieList: []
    };
  }

  render() {
    return (
      <div className="movie-list">
        <Table movieList={this.state.movieList} />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(`${API_URL}?s=pirate&page=1&apikey=${API_KEY}`)
      .then(result => {
        this.setState({
          movieList: result.data.Search
        });
      })
      .catch(error => {
        console.log("Oh noes ! : ", error);
      });
  }
}

interface MovieListState {
  movieList: Array<Movie>;
}
