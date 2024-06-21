import React from "react";
import InputButtonContainer from "./MovieSearchComponents/InputButtonContainer";
import Loading from "../assets/Loading";

const MovieSearch = ({ onMovieSave }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [movieData, setMovieData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      {loading == true && <Loading />}
      <InputButtonContainer
        inputValue={inputValue}
        setInputValue={setInputValue}
        setMovieData={setMovieData}
        error={error}
        setError={setError}
        movieData={movieData}
        onMovieSave={onMovieSave}
        setLoading={setLoading}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {movieData && (
        <div>
          <h2>{movieData.title} - Adicionado!</h2>
          {movieData.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movieData.posterPath}`} alt={`${movieData.Title} Poster`} />}
        </div>
      )}
    </div>
  );
};
export default MovieSearch;
