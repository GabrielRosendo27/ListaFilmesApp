import React from "react";
import { Title, Tooltip, TitleContainer } from "../StyleMovieSaved/SavedMovies.style";

const MovieTitle = ({ movie }) => {
  const [isTooltipVisible, setTooltipVisible] = React.useState(false);
  return (
    <TitleContainer onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
      <Title>{movie.title}</Title>
      <Tooltip $isVisible={isTooltipVisible}>{movie.title}</Tooltip>
    </TitleContainer>
  );
};

export default MovieTitle;
