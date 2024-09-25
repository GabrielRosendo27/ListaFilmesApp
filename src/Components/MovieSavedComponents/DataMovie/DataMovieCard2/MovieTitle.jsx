import React from "react";
import { Title } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieTitle = ({ movie }) => {
  return <Title>{movie.title}</Title>;
};

export default MovieTitle;
