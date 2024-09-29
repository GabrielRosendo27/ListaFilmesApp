import React from "react";
import { Title, MovieTitleContainer, Tooltip } from "../../StyleMovieSaved/SavedMovies.style2";
import MovieId from "./MovieId";
const MovieTitle = ({ movie, isRotated, index }) => {
  const [isTooltipVisible, setTooltipVisible] = React.useState(false);
  return (
    <MovieTitleContainer onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)} $isRotated={isRotated}>
      {isRotated ? "" : <MovieId index={index} />}
      <Title>{movie.title}</Title>
      <Tooltip $isVisible={isTooltipVisible}>{movie.title}</Tooltip>
    </MovieTitleContainer>
  );
};

export default MovieTitle;
