import React from "react";
import TrashIcon from "./TrashIcon";
import { CardsContainer1, Card, MovieImage, InfoContainer, Title, Details, RatingContainer, Rating, TrashDiv } from "./StyleMovieSaved/SavedMovies.style2";
import ClockSvg from "../../assets/ClockSvg";
import ImgSvg from "../../assets/ImgSvg";
import ImgSvgCountry from "../../assets/ImgSvgCountry";
import ArrowDown from "../../assets/ArrowDown";

const CardsContainer02 = ({ savedMovies, onRemove, isClockSvgVisible }) => {
  const NA = "N/A";

  return (
    <>
      <CardsContainer1>
        {savedMovies.map((movie, index) => (
          <Card key={index}>
            {movie.posterPath && <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} Poster`} />}
            <InfoContainer>
              {/* titulo */}
              <Title>{movie.title}</Title>
              {/* ano */}
              {(movie.Year !== NA) | (movie.Runtime !== NA) && (
                <Details>
                  {movie.Year} | <ClockSvg isClockSvgVisible={isClockSvgVisible} />
                  {movie.Runtime}
                </Details>
              )}

              {/* sinopse */}
              {/* {<Details>Sinopse: {movie.overview}</Details>} */}

              <RatingContainer>
                {movie.imdbRating !== NA && (
                  <Rating>
                    {" "}
                    <span role="img" aria-label="star">
                      ⭐{movie.imdbRating}
                    </span>
                  </Rating>
                )}
                {movie.Ratings[1] && (
                  <Rating>
                    <img src="/tomatosvg.svg" width="18" /> {movie.Ratings[1].Value}
                  </Rating>
                )}
              </RatingContainer>
              <ArrowDown />
            </InfoContainer>
            {/* icone lixeira */}
            <TrashDiv>
              <TrashIcon onClick={() => onRemove(movie.id)} />
            </TrashDiv>
            {/* rating */}
          </Card>
        ))}
      </CardsContainer1>
    </>
  );
};

export default CardsContainer02;
