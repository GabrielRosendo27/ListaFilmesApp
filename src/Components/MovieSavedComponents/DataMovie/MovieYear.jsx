import React from "react";
import { Details } from "../StyleMovieSaved/SavedMovies.style";

const MovieYear = ({ movie }) => {
  const NA = "N/A";
  return <>{movie.Year !== NA && <Details>{movie.Year}</Details>}</>;
};

export default MovieYear;
