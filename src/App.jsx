import React from "react";
import MovieSearch from "../src/Components/Principal/MovieSearch";
import SavedMovies from "../src/Components/Principal/SavedMovies";
import { firestore, collection, getDocs, addDoc } from "./firebaseConfig";
import removeMovie from "../src/removeMovie";
import styled from "styled-components";
import processarLote from "./Components/Principal/processarFilmes";

const ContainerAll = styled.div`
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 33px;
  background: #0a1514;
  overflow-x: hidden;
`;
const App = () => {
  const [savedMovies, setSavedMovies] = React.useState([]);
  React.useEffect(() => {
    processarLote();
  }, []);
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
  React.useEffect(() => {
    const adicionarFilmesProcessados = async () => {
      try {
        const novosFilmes = await processarLote(); // Processa os filmes e retorna a lista de filmes
        if (Array.isArray(novosFilmes)) {
          for (const filme of novosFilmes) {
            await handleMovieSave(filme); // Salva cada filme no Firestore
          }
        } else {
          console.error("O resultado de processarLote não é um array.");
        }
      } catch (error) {
        console.error("Erro ao processar e salvar filmes:", error);
      }
    };

    adicionarFilmesProcessados();
  }, []);

  return (
    <ContainerAll>
      <MovieSearch onMovieSave={handleMovieSave} />
      {savedMovies == "" ? (
        <span style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>Nenhum filme adicionado.</span>
      ) : (
        <SavedMovies savedMovies={savedMovies} onRemove={handleMovieRemove} />
      )}
    </ContainerAll>
  );
};

export default App;
