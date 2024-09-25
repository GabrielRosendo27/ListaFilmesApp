import React from "react";
import { Details } from "../../StyleMovieSaved/SavedMovies.style2";
import styled from "styled-components";
const SinopseDiv = styled.div`
  animation: anim 1s;

  @keyframes anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const MovieSinopse = ({ movie }) => {
  return (
    <>
      <SinopseDiv>{<Details>{movie.overview}</Details>}</SinopseDiv>
    </>
  );
};

export default MovieSinopse;
