import React from "react";
import { Details } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieSinopse = ({ movie }) => {
  return <>{<Details>Sinopse: {movie.overview}</Details>}</>;
};

export default MovieSinopse;
