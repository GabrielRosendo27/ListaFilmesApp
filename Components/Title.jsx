import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  background-color: #3a3a5c;
  padding: 7px;
  color: rgb(209, 209, 209);
  letter-spacing: 0.2rem;
  border-radius: 12px;
  @media (max-width: 368px) {
    font-size: 1.6rem;
  }
`;

const Title = () => {
  return <Titulo>Lista de Filmes</Titulo>;
};

export default Title;
