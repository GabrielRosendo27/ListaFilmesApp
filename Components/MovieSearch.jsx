import React from "react";
import tmdbApi from "../api/tmdbApi";
import omdbApi from "../api/omdbApi";
const MovieSearch = ({ onMovieSave }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [movieData, setMovieData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleSearch = async () => {
    const tmdbApiKey = "88740fcede037c6631f0d94c508f0454";
    const omdbApiKey = "3d49971e";
    try {
      const { title, originalTitle, overview, posterPath } = await tmdbApi(inputValue, tmdbApiKey);
      const movieDetails = await omdbApi(originalTitle, omdbApiKey);
      const movieData = { ...movieDetails, overview, posterPath, title };
      setMovieData(movieData);
      setError(null);

      await onMovieSave(movieData);
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
            <h2>{movieData.title} - Adicionado!</h2>
            {movieData.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movieData.posterPath}`} alt={`${movieData.Title} Poster`} />}
          </div>
        )}
      </div>
    </>
  );
};
export default MovieSearch;
