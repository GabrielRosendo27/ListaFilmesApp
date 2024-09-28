import React from "react";
import { Details, SinopseDiv } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieSinopse = ({ movie }) => {
  return (
    <>
      <SinopseDiv>{<Details>{movie.overview}</Details>}</SinopseDiv>
    </>
  );
};

export default MovieSinopse;
