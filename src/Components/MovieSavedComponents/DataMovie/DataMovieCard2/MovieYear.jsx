import React from "react";
import { Details } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieYear = ({ movie }) => {
  const NA = "N/A";
  return <>{movie.Year !== NA && <Details>{movie.Year}</Details>}</>;
};

export default MovieYear;
