import React from "react";
import styled from "styled-components";

const MovieIdDiv = styled.div`
  color: #fb8500;
  margin-right: 10px;
  font-weight: 600;
`;
const MovieId = ({ index }) => {
  return <MovieIdDiv>{index + 1}.</MovieIdDiv>;
};

export default MovieId;
