import React from "react";
import { Details, DescriptionSpan, MovieDescDiv } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieYear = ({ movie, index, isRotated }) => {
  const NA = "N/A";
  return (
    <>
      <MovieDescDiv key={index}>{index === 0 && <DescriptionSpan $isRotated={isRotated}>Year</DescriptionSpan>}</MovieDescDiv>
      <div>{movie.Year !== NA && <Details>{movie.Year}</Details>}</div>
    </>
  );
};

export default MovieYear;
