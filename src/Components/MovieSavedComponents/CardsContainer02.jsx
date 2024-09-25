import React from "react";
import TrashIcon from "./TrashIcon";
import { CardsContainer1, Card, InfoContainer, RatingContainer, TrashDiv } from "./StyleMovieSaved/SavedMovies.style2";
import MovieRuntime from "./DataMovie/DataMovieCard2/MovieRuntime";
import MoviePosterPath from "./DataMovie/DataMovieCard2/MoviePosterPath";
import MovieTitle from "./DataMovie/DataMovieCard2/MovieTitle";
import MovieYear from "./DataMovie/DataMovieCard2/MovieYear";
import MovieRating from "./DataMovie/DataMovieCard2/MovieRating";

const CardsContainer02 = ({ savedMovies, onRemove, isClockSvgVisible }) => {
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
            </InfoContainer>
            <RatingContainer>
              <MovieRating movie={movie} />
            </RatingContainer>
            <TrashDiv>
              <TrashIcon onClick={() => onRemove(movie.id)} />
            </TrashDiv>
          </Card>
        ))}
      </CardsContainer1>
    </>
  );
};

export default CardsContainer02;

{
  /* sinopse */
}
{
  /* {<Details>Sinopse: {movie.overview}</Details>} */
}
