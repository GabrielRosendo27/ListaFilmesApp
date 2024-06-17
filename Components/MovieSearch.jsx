import React from "react";
import tmdbApi from "../api/tmdbApi";
import omdbApi from "../api/omdbApi";

const MovieSearch = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [movieData, setMovieData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleSearch = async () => {
    const tmdbApiKey = "88740fcede037c6631f0d94c508f0454";
    const omdbApiKey = "3d49971e";
    try {
      const { originalTitle, overview, posterPath } = await tmdbApi(inputValue, tmdbApiKey);
      const movieDetails = await omdbApi(originalTitle, omdbApiKey);
      setMovieData({ ...movieDetails, overview, posterPath });
      setError(null);
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
            <p>Ano: {movieData.Year}</p>
            <p>Duração: {movieData.Runtime}</p>
            <p>Gênero: {movieData.Genre}</p>
            <p>Sinopse: {movieData.overview}</p>
            <p>País: {movieData.Country}</p>
            <p>imdb: {movieData.imdbRating}</p>
            <p>Orçamento: {movieData.BoxOffice}</p>

            <img src={movieData.Poster} alt={`${movieData.Title} Poster`} />
            {movieData.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movieData.posterPath}`} alt={`${movieData.Title} Poster`} />}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieSearch;
