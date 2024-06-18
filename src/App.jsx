import React from "react";
import MovieSearch from "../Components/MovieSearch";
import Title from "../Components/Title";
import SavedMovies from "../Components/SavedMovies";
const App = () => {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const handleMovieSave = (movie) => {
    setSavedMovies([...savedMovies, movie]);
  };
  return (
    <>
      <Title />
      <MovieSearch onMovieSave={handleMovieSave} />
      <SavedMovies savedMovies={savedMovies} />
    </>
  );
};

export default App;
