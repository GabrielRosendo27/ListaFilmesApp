import React from "react";
import TrashIcon from "./TrashIcon";
import { CardsContainer1, Card, InfoContainer, Title, Details, RatingContainer, Rating, TrashDiv } from "./StyleMovieSaved/SavedMovies.style";
import MovieRuntime from "./DataMovie/MovieRuntime";
import MoviePosterPath from "./DataMovie/MoviePosterPath";
import MovieTitle from "./DataMovie/MovieTitle";
import ImgSvg from "../../assets/ImgSvg";
import ImgSvgCountry from "../../assets/ImgSvgCountry";
import MovieYear from "./DataMovie/MovieYear";

const CardsContainer01 = ({ savedMovies, onRemove, isClockSvgVisible }) => {
  const NA = "N/A";
  return (
    <>
      <CardsContainer1>
        {savedMovies.map((movie, index) => (
          <Card key={index}>
            <MoviePosterPath movie={movie} />
            <InfoContainer>
              <MovieTitle movie={movie} />
              <MovieYear movie={movie} />
              <MovieRuntime movie={movie} isClockSvgVisible={isClockSvgVisible} />
              {/* {movie.Runtime !== NA && (
                <Details>
                  <ClockSvg isClockSvgVisible={isClockSvgVisible} />
                  {movie.Runtime}
                </Details>
              )} */}
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
            {/* icone lixeira */}
            <TrashDiv>
              <TrashIcon onClick={() => onRemove(movie.id)} />
            </TrashDiv>
          </Card>
        ))}
      </CardsContainer1>
    </>
  );
};

export default CardsContainer01;
