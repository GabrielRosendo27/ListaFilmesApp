import React from "react";
import ToggleList from "./ToggleList";
import CardsContainer01 from "./MovieSavedComponents/CardsContainer01";
import CardsContainer02 from "./MovieSavedComponents/CardsContainer02";

const SavedMovies = ({ savedMovies, onRemove }) => {
  const [useContainer01, setUseContainer01] = React.useState(true);
  const toggleContainer = () => {
    setUseContainer01(!useContainer01);
  };
  return (
    <>
      <ToggleList toggleContainer={toggleContainer} />
      {useContainer01 ? <CardsContainer01 savedMovies={savedMovies} onRemove={onRemove} /> : <CardsContainer02 savedMovies={savedMovies} onRemove={onRemove} />}
    </>
  );
};

export default SavedMovies;
