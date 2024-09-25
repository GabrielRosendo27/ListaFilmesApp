import React from "react";
import TrashIcon from "./TrashIcon";
import { CardsContainer1, Card, InfoContainer, RatingContainer, TrashDiv } from "./StyleMovieSaved/SavedMovies.style";
import MovieRuntime from "./DataMovie/MovieRuntime";
import MoviePosterPath from "./DataMovie/MoviePosterPath";
import MovieTitle from "./DataMovie/MovieTitle";
import MovieYear from "./DataMovie/MovieYear";
import MovieGenre from "./DataMovie/MovieGenre";
import MovieCountry from "./DataMovie/MovieCountry";
import MovieRating from "./DataMovie/MovieRating";

{
  /* sinopse */
}
{
  /* {<Details>Sinopse: {movie.overview}</Details>} */
}

const CardsContainer01 = ({ savedMovies, onRemove, isClockSvgVisible }) => {
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
              <MovieGenre movie={movie} />
              <MovieCountry movie={movie} />
            </InfoContainer>
            <RatingContainer>
              <MovieRating movie={movie} />
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
