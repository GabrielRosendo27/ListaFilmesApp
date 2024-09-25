import React from "react";
import { Rating } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieRating = ({ movie }) => {
  const NA = "N/A";
  return (
    <>
      {movie.imdbRating !== NA && (
        <Rating>
          {" "}
          <span role="img" aria-label="star">
            ⭐{movie.imdbRating}
          </span>
        </Rating>
      )}
      {movie.Ratings[1] && (
        <Rating>
          <img src="/tomatosvg.svg" width="18" /> {movie.Ratings[1].Value}
        </Rating>
      )}
    </>
  );
};

export default MovieRating;
