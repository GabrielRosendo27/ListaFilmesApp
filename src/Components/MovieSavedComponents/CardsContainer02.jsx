import React from "react";
import { CardsContainer1 } from "./StyleMovieSaved/SavedMovies.style2";

import Card from "./Card";

const CardsContainer02 = ({ savedMovies, onRemove, isClockSvgVisible }) => {
  return (
    <>
      <CardsContainer1>
        {savedMovies.map((movie, index) => (
          <Card key={index} movie={movie} onRemove={onRemove} isClockSvgVisible={isClockSvgVisible} index={index} />
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

// <Cards key={index}>
//   <MoviePosterPath movie={movie} />
//   <InfoContainer>
//     <MovieTitle movie={movie} />
//     <MovieYear movie={movie} />
//     <MovieRuntime movie={movie} isClockSvgVisible={isClockSvgVisible} />
//     <ArrowDown isRotated={isRotated} setIsRotated={setIsRotated} />
//   </InfoContainer>
//   <RatingContainer>
//     <MovieRating movie={movie} />
//   </RatingContainer>
//   <TrashDiv>
//     <TrashIcon onClick={() => onRemove(movie.id)} />
//   </TrashDiv>
// </Cards>
