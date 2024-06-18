import React from "react";
import { firestore, collection, getDocs } from "../src/firebaseConfig";

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesCollection = collection(firestore, "movies");
        const movieSnapshot = await getDocs(moviesCollection);
        const movies = movieSnapshot.docs.map((doc) => doc.data());
        setSavedMovies(movies);
      } catch (err) {
        console.error("Erro ao carregar Filmes:", err);
      }
    };
    loadMovies();
  }, []);
  return (
    <div>
      <h3>-- Filmes Salvos -- </h3>
      {savedMovies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Sinopse: {movie.overview}</p>
          {movie.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} Poster`} />}
        </div>
      ))}
    </div>
  );
};

export default SavedMovies;
