import React from "react";
import { MovieSearchContainerStyle, Overlay, ImgSearch, MovieTextMovieSearch } from "./MovieSearchContainer.style.js";

const MovieSearchContainer = ({ movieData }) => {
  return (
    <>
      <Overlay />
      <MovieSearchContainerStyle>
        <MovieTextMovieSearch>{movieData.title}</MovieTextMovieSearch>

        {movieData.posterPath && <ImgSearch src={`https://image.tmdb.org/t/p/w500${movieData.posterPath}`} alt={`${movieData.Title} Poster`}></ImgSearch>}
      </MovieSearchContainerStyle>
    </>
  );
};

export default MovieSearchContainer;
