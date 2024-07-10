import React from "react";
import { MovieSearchContainerStyle } from "./MovieSearchContainer.style.js";

const MovieSearchContainer = ({ movieData }) => {
  return (
    <MovieSearchContainerStyle>
      <h2>{movieData.title}</h2>
      {movieData.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movieData.posterPath}`} alt={`${movieData.Title} Poster`} width={"200 px"} />}
    </MovieSearchContainerStyle>
  );
};

export default MovieSearchContainer;
