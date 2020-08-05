import axios from "axios";
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Table from "../../../components/table/table";
import { API_KEY, API_URL } from "../../../conf/environnement";
import { Movie } from "../../../models/movie";
import MovieSingle from "../unit/unit";

export class MovieList extends Component<any, MovieListState> {
  constructor(props: object) {
    super(props);

    this.state = {
      movieList: [],
    };
  }

  render() {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route path={`${path}/:movieId`}>
          <MovieSingle />
        </Route>
        <Route path={path}>
          <div className="movie-list">
            <Table movieList={this.state.movieList} />
          </div>
        </Route>
      </Switch>
    );
  }

  componentDidMount() {
    axios
      .get(`${API_URL}?s=pirate&page=1&apikey=${API_KEY}`)
      .then((result) => {
        this.setState({
          movieList: result.data.Search,
        });
      })
      .catch((error) => {
        console.log("Oh noes ! : ", error);
      });
  }
}

interface MovieListState {
  movieList: Array<Movie>;
}

export default withRouter(MovieList as any);
