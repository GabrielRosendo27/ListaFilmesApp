import React from "react";
import { Details } from "../../StyleMovieSaved/SavedMovies.style2";
import ClockSvg from "../../../../assets/ClockSvg";
const MovieRuntime = ({ movie, isClockSvgVisible }) => {
  const NA = "N/A";
  return (
    <>
      {movie.Runtime !== NA && (
        <Details>
          <ClockSvg isClockSvgVisible={isClockSvgVisible} />
          {movie.Runtime}
        </Details>
      )}
    </>
  );
};

export default MovieRuntime;
