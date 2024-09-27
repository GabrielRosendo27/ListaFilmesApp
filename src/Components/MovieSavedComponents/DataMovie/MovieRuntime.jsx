import React from "react";
import { Details } from "../StyleMovieSaved/SavedMovies.style";
import ClockSvg from "../../../assets/ClockSvg";
const MovieRuntime = ({ movie, isClockSvgVisible }) => {
  const NA = "N/A";

  const formatRuntime = (runtime) => {
    // Verifica se runtime é válido e um número
    if (!runtime || isNaN(runtime)) return "N/A";

    const hours = Math.floor(runtime / 60); // Converte para horas
    const minutes = runtime % 60; // Pega o resto para os minutos

    // Retorna no formato 2h02m, garantindo que os minutos tenham sempre 2 dígitos
    return `${hours}h${minutes.toString().padStart(2, "0")}m`;
  };

  return (
    <>
      {movie.Runtime !== NA && (
        <Details>
          <ClockSvg isClockSvgVisible={isClockSvgVisible} />
          {formatRuntime(parseInt(movie.Runtime))}
        </Details>
      )}
    </>
  );
};

export default MovieRuntime;
