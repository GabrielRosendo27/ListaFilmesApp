import React from "react";
import { Details } from "../../StyleMovieSaved/SavedMovies.style2";
import ImgSvg from "../../../../assets/ImgSvg";

const MovieGenre = ({ movie }) => {
  const NA = "N/A";
  return (
    <>
      {movie.Genre !== NA && (
        <Details>
          <ImgSvg />
          {movie.Genre}
        </Details>
      )}
    </>
  );
};

export default MovieGenre;
