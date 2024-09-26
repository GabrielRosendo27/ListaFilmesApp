import React from "react";
import { Details, DescriptionSpan, MovieDescDiv } from "../../StyleMovieSaved/SavedMovies.style2";
import ClockSvg from "../../../../assets/ClockSvg";

const MovieRuntime = ({ movie, index }) => {
  const NA = "N/A";
  return (
    <MovieDescDiv key={index}>
      {index === 0 && <DescriptionSpan>Duration</DescriptionSpan>}
      {movie.Runtime !== NA && <Details>{movie.Runtime}</Details>}
    </MovieDescDiv>
  );
};

export default MovieRuntime;
