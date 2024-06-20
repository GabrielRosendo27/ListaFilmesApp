import React from "react";
import tmdbApi from "../../api/tmdbApi";
import omdbApi from "../../api/omdbApi";
import { ButtonComponentStyle } from "../MovieSearchComponents/ButtonComponent.style";

const ButtonComponent = ({ inputValue, setMovieData, error, setError, onMovieSave }) => {
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
    <div>
      <ButtonComponentStyle onClick={handleSearch}>Adicionar</ButtonComponentStyle>
    </div>
  );
};

export default ButtonComponent;
