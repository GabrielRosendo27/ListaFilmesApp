import React from "react";
import tmdbApi from "../../api/tmdbApi";
import omdbApi from "../../api/omdbApi";
import { ButtonComponentStyle } from "../MovieSearchComponents/ButtonComponent.style";
import Loading from "../../assets/Loading";

const ButtonComponent = ({ setInputValue, inputValue, setMovieData, error, setError, onMovieSave }) => {
  const [loading, setLoading] = React.useState(false);
  const handleSearch = async () => {
    const tmdbApiKey = "88740fcede037c6631f0d94c508f0454";
    const omdbApiKey = "3d49971e";
    try {
      setLoading(true);
      const { title, originalTitle, overview, posterPath } = await tmdbApi(inputValue, tmdbApiKey);
      const movieDetails = await omdbApi(originalTitle, omdbApiKey);
      const movieData = { ...movieDetails, overview, posterPath, title };
      setMovieData(movieData);
      setError(null);
      await onMovieSave(movieData);
      setLoading(false);
      setInputValue("");
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setMovieData(null);
    }
  };
  return (
    <div>
      <ButtonComponentStyle onClick={handleSearch}>{loading ? <Loading /> : "Adicionar"} </ButtonComponentStyle>
    </div>
  );
};

export default ButtonComponent;
