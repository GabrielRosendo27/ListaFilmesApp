import React from "react";
import { InputButtonContainerStyle } from "./StyleMovieSearch/InputButtonContainer.style";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

const InputButtonContainer = ({ inputValue, setInputValue, setMovieData, error, setError, movieData, onMovieSave }) => {
  return (
    <InputButtonContainerStyle>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <ButtonComponent
        inputValue={inputValue}
        setMovieData={setMovieData}
        error={error}
        setError={setError}
        movieData={movieData}
        onMovieSave={onMovieSave}
        setInputValue={setInputValue}
      />
    </InputButtonContainerStyle>
  );
};

export default InputButtonContainer;
