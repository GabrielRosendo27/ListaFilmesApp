import React from "react";
import { Details } from "../../StyleMovieSaved/SavedMovies.style2";
import ImgSvgCountry from "../../../../assets/ImgSvgCountry";

const MovieCountry = ({ movie }) => {
  const NA = "N/A";
  return (
    <>
      {movie.Country !== NA && (
        <Details>
          <ImgSvgCountry />
          {movie.Country.split(", ").slice(0, 2).join(", ")}
        </Details>
      )}
    </>
  );
};

export default MovieCountry;
