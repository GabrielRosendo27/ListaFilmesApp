import React from "react";
import TrashIcon from "./MovieSavedComponents/TrashIcon";

const SavedMovies = ({ savedMovies, onRemove }) => {
  const NA = "N/A";

  return (
    <div>
      {savedMovies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          {movie.Year !== NA && <p>Ano: {movie.Year}</p>}
          {movie.Runtime !== NA && <p>Duração: {movie.Runtime}</p>}
          {movie.Genre !== NA && <p>Gênero: {movie.Genre}</p>}
          {<p>Sinopse: {movie.overview}</p>}
          {movie.Country !== NA && <p>País: {movie.Country}</p>}
          {movie.imdbRating !== NA && <p>imdb: {movie.imdbRating}</p>}

          {movie.Ratings[1] && <p>rotten critic:{movie.Ratings[1].Value}</p>}
          {movie.posterPath && <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} Poster`} />}
          <TrashIcon onClick={() => onRemove(movie.id)} />
        </div>
      ))}
    </div>
  );
};

export default SavedMovies;
