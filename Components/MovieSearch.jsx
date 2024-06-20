import React from "react";
// import InputComponent from "./MovieSearchComponents/InputComponent";
import ButtonComponent from "./MovieSearchComponents/ButtonComponent";
import InputButtonContainer from "./MovieSearchComponents/InputButtonContainer";

const MovieSearch = ({ onMovieSave }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [movieData, setMovieData] = React.useState(null);
  const [error, setError] = React.useState(null);

  return (
    <div>
      <InputButtonContainer
        inputValue={inputValue}
        setInputValue={setInputValue}
        setMovieData={setMovieData}
        error={error}
        setError={setError}
        movieData={movieData}
        onMovieSave={onMovieSave}
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
