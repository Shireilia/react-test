import React from "react";
import { Movie } from "../../models/movie";
import MovieCard from "../movie-card/movie-card";

export default function ConditionnalMovie(props: { movie: Movie | undefined }) {
  if (props.movie) {
    return <MovieCard movie={props.movie} />;
  }
  return <div></div>;
}
