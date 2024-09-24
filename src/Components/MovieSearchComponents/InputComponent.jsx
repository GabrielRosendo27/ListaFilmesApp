import React from "react";
import { InputComponentStyle, InputContainerStyle } from "./StyleMovieSearch/InputComponent.style";
import LupaSvg from "./LupaSvg";

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <InputContainerStyle>
      <LupaSvg />
      <InputComponentStyle type="text" value={inputValue} placeholder="Digite o nome do Filme" onChange={(e) => setInputValue(e.target.value)}></InputComponentStyle>
    </InputContainerStyle>
  );
};

export default InputComponent;
