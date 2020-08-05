import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import ConditionnalMovie from "../../../components/conditionnal-movie/conditionnal-movie";
import { API_KEY, API_URL } from "../../../conf/environnement";
import { Movie } from "../../../models/movie";

export default class MovieSingle extends Component<object, MovieSingleState> {
  constructor(props: object) {
    super(props);

    this.state = {
      movie: undefined
    };
  }

  render() {
    return (
      <div className="movie-list">
        <ConditionnalMovie movie={this.state.movie} />
      </div>
    );
  }

  componentDidMount() {
    let { movieId } = useParams();
    axios
      .get(`${API_URL}?t=${movieId}&page=1&apikey=${API_KEY}`)
      .then(result => {
        this.setState({
          movie: result.data
        });
      })
      .catch(error => {
        console.log("Oh noes ! : ", error);
      });
  }
}

export interface MovieSingleState {
  movie: Movie | undefined;
}
