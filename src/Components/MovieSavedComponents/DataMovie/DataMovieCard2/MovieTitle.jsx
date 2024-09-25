import React from "react";
import { Title, MovieTitleContainer, Tooltip } from "../../StyleMovieSaved/SavedMovies.style2";

const MovieTitle = ({ movie }) => {
  const [isTooltipVisible, setTooltipVisible] = React.useState(false);
  return (
    <MovieTitleContainer onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
      <Title>{movie.title}</Title>
      <Tooltip $isVisible={isTooltipVisible}>{movie.title}</Tooltip>
    </MovieTitleContainer>
  );
};

export default MovieTitle;
