import React from "react";
import { InfoContainer, RatingContainer, TrashDiv, Cards, TrashRatingDiv, MovieYearMovieRuntimeDiv } from "./StyleMovieSaved/SavedMovies.style2";
import TrashIcon from "./TrashIcon";
import MovieRuntime from "./DataMovie/DataMovieCard2/MovieRuntime";
import MoviePosterPath from "../MovieSavedComponents/DataMovie/DataMovieCard2/MoviePosterPath";
import MovieTitle from "./DataMovie/DataMovieCard2/MovieTitle";
import MovieYear from "./DataMovie/DataMovieCard2/MovieYear";
import MovieRating from "./DataMovie/DataMovieCard2/MovieRating";
import ArrowDown from "../../assets/ArrowDown";
import MovieSinopse from "./DataMovie/DataMovieCard2/MovieSinopse";

const Card = ({ movie, onRemove, isClockSvgVisible, index }) => {
  const [isRotated, setIsRotated] = React.useState(false);
  return (
    <>
      <Cards $isRotated={isRotated}>
        <MoviePosterPath movie={movie} />
        <MovieTitle movie={movie} isRotated={isRotated} />
        <InfoContainer>
          <MovieYearMovieRuntimeDiv>
            <MovieYear movie={movie} index={index} isRotated={isRotated} />

            <MovieRuntime movie={movie} isClockSvgVisible={isClockSvgVisible} index={index} isRotated={isRotated} />
          </MovieYearMovieRuntimeDiv>
          <ArrowDown isRotated={isRotated} setIsRotated={setIsRotated} />
        </InfoContainer>
        {isRotated ? <MovieSinopse movie={movie} /> : ""}
        <TrashRatingDiv>
          <RatingContainer $isRotated={isRotated}>
            <MovieRating movie={movie} />
          </RatingContainer>
          <TrashDiv>
            <TrashIcon onClick={() => onRemove(movie.id)} />
          </TrashDiv>
        </TrashRatingDiv>
      </Cards>
    </>
  );
};

export default Card;
