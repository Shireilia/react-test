import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import ConditionnalMovie from "../../components/conditionnal-movie/conditionnal-movie";
import { API_KEY, API_URL } from "../../conf/environnement";
import { Movie } from "../../models/movie";
import "./vote.css";

export default class Vote extends Component<object, VoteState> {
  constructor(props: object) {
    super(props);

    this.state = {
      inputValue: "",
      movie: undefined
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="vote">
        <div className="vote-block">
          <div className="instructions element">
            Vous pouvez chercher un film par son titre, puis cliquer sur le
            bouton voter pour enregistrer votre choix.
          </div>
          <div className="element">
            <TextField
              id="filled-basic"
              label="Rechercher"
              variant="filled"
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="element">
            <ConditionnalMovie movie={this.state.movie} />
          </div>
          <div className="element">
            <Button variant="contained" color="primary">
              Voter
            </Button>
          </div>
        </div>
      </div>
    );
  }

  handleInputChange(event: any) {
    this.setState({ inputValue: event.target.value });
    axios
      .get(`${API_URL}?t=${this.state.inputValue}&page=1&apikey=${API_KEY}`)
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

export interface VoteState {
  inputValue: string;
  movie: Movie | undefined;
}
