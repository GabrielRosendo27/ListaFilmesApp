import React from "react";
import InputButtonContainer from "./MovieSearchComponents/InputButtonContainer";
import MovieSearchContainer from "./MovieSearchComponents/MovieSearchContainer";
import Error from "./MovieSearchComponents/Error";

const MovieSearch = ({ onMovieSave }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [movieData, setMovieData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [showMovieData, setShowMovieData] = React.useState(false);
  React.useEffect(() => {
    if (movieData) {
      setShowMovieData(true);
      const timer = setTimeout(() => {
        setShowMovieData(false);
      }, 2000); // Dura 5 segundos

      return () => clearTimeout(timer); // Limpa o temporizador se o componente for desmontado
    }
  }, [movieData]);
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
      <Error error={error} />
      {showMovieData && movieData && <MovieSearchContainer movieData={movieData} />}
    </div>
  );
};

export default MovieSearch;
