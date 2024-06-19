import React from "react";
import tmdbApi from "../api/tmdbApi";
import omdbApi from "../api/omdbApi";
import styled from "styled-components";
import PathSvgInput from "../assets/PathSvgInput";

const InputSearch = styled.input`
  width: 195px;
  padding: 10px 0px 10px 40px;
  border-radius: 9999px;
  border: solid 1px #333;
  transition: all 0.2s ease-in-out;
  outline: none;
  opacity: 0.8;
  &:focus {
    opacity: 1;
    width: 250px;
  }
`;
const Svg = styled.svg`
  position: absolute;
  top: 6%;
  left: 10px;
  transform: translate(0, -50%);
`;

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
        <InputSearch type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite o nome do Filme"></InputSearch>
        <Svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d={PathSvgInput} fillRule="evenodd"></path>
        </Svg>
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
