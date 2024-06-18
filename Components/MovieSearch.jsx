import React, { useEffect } from "react";
import tmdbApi from "../api/tmdbApi";
import omdbApi from "../api/omdbApi";
import { firestore, collection, getDocs, addDoc } from "../src/firebaseConfig";
const MovieSearch = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [movieData, setMovieData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const NA = "N/A";

  useEffect(() => {
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

  const handleSearch = async () => {
    const tmdbApiKey = "88740fcede037c6631f0d94c508f0454";
    const omdbApiKey = "3d49971e";
    try {
      const { title, originalTitle, overview, posterPath } = await tmdbApi(inputValue, tmdbApiKey);
      const movieDetails = await omdbApi(originalTitle, omdbApiKey);
      const movieData = { ...movieDetails, overview, posterPath, title };
      setMovieData(movieData);
      setError(null);

      const moviesCollection = collection(firestore, "movies");
      await addDoc(moviesCollection, movieData);
      setSavedMovies([...savedMovies, movieData]);
    } catch (err) {
      setError(err.message);
      setMovieData(null);
    }
  };
  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite o nome do Filme" />
        <button onClick={handleSearch}>Buscar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {movieData && (
          <div>
            <h2>{movieData.title}</h2>
            {movieData.Year !== NA && <p>Ano: {movieData.Year}</p>}
            {movieData.Runtime !== NA && <p>Duração: {movieData.Runtime}</p>}
            {movieData.Genre !== NA && <p>Gênero: {movieData.Genre}</p>}
            {<p>Sinopse: {movieData.overview}</p>}
            {movieData.Country !== NA && <p>País: {movieData.Country}</p>}
            {movieData.imdbRating !== NA && <p>imdb: {movieData.imdbRating}</p>}

            {movieData.Ratings[1] && <p>rotten critic:{movieData.Ratings[1].Value}</p>}

            {movieData.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movieData.posterPath}`} alt={`${movieData.Title} Poster`} />}
          </div>
        )}
        <h3>Filmes Salvos</h3>
        {savedMovies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>Sinopse: {movie.overview}</p>
            {movie.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} Poster`} />}
          </div>
        ))}
      </div>
    </>
  );
};
export default MovieSearch;
