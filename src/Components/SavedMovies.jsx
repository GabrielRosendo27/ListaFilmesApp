import React from "react";
import ToggleList from "./ToggleList";
import CardsContainer01 from "./MovieSavedComponents/CardsContainer01";
import CardsContainer02 from "./MovieSavedComponents/CardsContainer02";

const SavedMovies = ({ savedMovies, onRemove }) => {
  const [isClockSvgVisible, setIsClockSvgVisible] = React.useState(true);
  const [useContainer01, setUseContainer01] = React.useState(true);

  const toggleContainer = () => {
    setUseContainer01(!useContainer01);
    setIsClockSvgVisible(!isClockSvgVisible);
  };
  return (
    <>
      <ToggleList setIsClockSvgVisible={setIsClockSvgVisible} toggleContainer={toggleContainer} />
      {useContainer01 ? (
        <CardsContainer01 savedMovies={savedMovies} onRemove={onRemove} isClockSvgVisible={isClockSvgVisible} />
      ) : (
        <CardsContainer02 savedMovies={savedMovies} onRemove={onRemove} isClockSvgVisible={isClockSvgVisible} />
      )}
    </>
  );
};

export default SavedMovies;
