import React from "react";
import MovieSearch from "../Components/MovieSearch";
import Title from "../Components/Title";
import SavedMovies from "../Components/SavedMovies";
import { firestore, collection, getDocs, addDoc } from "./firebaseConfig";
import removeMovie from "../src/removeMovie";
import styled from "styled-components";

const ContainerAll = styled.div`
  width: 95vw;
  padding: 10px;
  margin: 0 auto;
  height: 100vh;
`;
const App = () => {
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    const loadMovies = async () => {
      const moviesCollection = collection(firestore, "movies");
      const movieSnapshot = await getDocs(moviesCollection);
      const movies = movieSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setSavedMovies(movies);
    };
    loadMovies();
  }, []);

  const handleMovieSave = async (movie) => {
    const moviesCollection = collection(firestore, "movies");
    const docRef = await addDoc(moviesCollection, movie);
    setSavedMovies([...savedMovies, { ...movie, id: docRef.id }]);
  };

  const handleMovieRemove = async (movieId) => {
    await removeMovie(movieId);
    setSavedMovies(savedMovies.filter((savedMovie) => savedMovie.id !== movieId));
  };

  return (
    <ContainerAll>
      <Title />
      <MovieSearch onMovieSave={handleMovieSave} />
      <SavedMovies savedMovies={savedMovies} onRemove={handleMovieRemove} />
    </ContainerAll>
  );
};

export default App;
