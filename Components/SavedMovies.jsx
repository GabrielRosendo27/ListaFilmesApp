import React from "react";
import TrashIcon from "./MovieSavedComponents/TrashIcon";
import { CardsContainer, Card, MovieImage, InfoContainer, Title, Details, RatingContainer, Rating, TrashDiv } from "../Components/MovieSavedComponents/SavedMovies.style";
import ClockSvg from "../assets/ClockSvg";
import ImgSvg from "../assets/ImgSvg";
import ImgSvgCountry from "../assets/ImgSvgCountry";

const SavedMovies = ({ savedMovies, onRemove }) => {
  const NA = "N/A";
  return (
    <CardsContainer>
      {savedMovies.map((movie, index) => (
        <Card key={index}>
          <div>{movie.posterPath && <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} Poster`} />}</div>
          <InfoContainer>
            {/* titulo */}
            <Title>{movie.title}</Title>
            {/* ano */}
            {movie.Year !== NA && <Details>{movie.Year}</Details>}
            {/* duração */}
            {movie.Runtime !== NA && (
              <Details>
                <ClockSvg />
                {movie.Runtime}
              </Details>
            )}
            {/* gênero */}

            {movie.Genre !== NA && (
              <Details>
                <ImgSvg />
                {movie.Genre}
              </Details>
            )}
            {/* sinopse */}
            {/* {<Details>Sinopse: {movie.overview}</Details>} */}
            {/* país */}
            {movie.Country !== NA && (
              <Details>
                <ImgSvgCountry />
                {movie.Country.split(", ").slice(0, 2).join(", ")}
              </Details>
            )}
          </InfoContainer>
          {/* rating */}
          <RatingContainer>
            <span role="img" aria-label="star">
              ⭐
            </span>
            {movie.imdbRating !== NA && <Rating> {movie.imdbRating}/10</Rating>}
            {movie.Ratings[1] && <Rating>RT: {movie.Ratings[1].Value}</Rating>}
          </RatingContainer>
          {/* icone lixeira */}
          <TrashDiv>
            <TrashIcon onClick={() => onRemove(movie.id)} />
          </TrashDiv>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default SavedMovies;
