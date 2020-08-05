import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ConditionnalMovie from "../../../components/conditionnal-movie/conditionnal-movie";
import { API_KEY, API_URL } from "../../../conf/environnement";
import { Movie } from "../../../models/movie";
import "./unit.css";

export class MovieSingle extends Component<any, MovieSingleState> {
  constructor(props: object) {
    super(props);
    this.state = {
      movie: undefined,
    };
  }

  render() {
    return (
      <div className="movie">
        <ConditionnalMovie movie={this.state.movie} />
      </div>
    );
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    axios
      .get(`${API_URL}?i=${movieId}&page=1&apikey=${API_KEY}`)
      .then((result) => {
        this.setState({
          movie: result.data,
        });
      })
      .catch((error) => {
        console.log("Oh noes ! : ", error);
      });
  }
}

export interface MovieSingleState {
  movie: Movie | undefined;
}

export default withRouter(MovieSingle as any);
