import React from "react";
import { MovieImage } from "../StyleMovieSaved/SavedMovies.style";

const MoviePosterPath = ({ movie }) => {
  return <div>{movie.posterPath && <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} Poster`} />}</div>;
};

export default MoviePosterPath;
