import React from "react";
import { Details, DescriptionSpan, MovieDescDiv } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieYear = ({ movie, index }) => {
  const NA = "N/A";
  return (
    <MovieDescDiv key={index}>
      {index === 0 && <DescriptionSpan>Year</DescriptionSpan>}
      {movie.Year !== NA && <Details>{movie.Year}</Details>}
    </MovieDescDiv>
  );
};

export default MovieYear;
