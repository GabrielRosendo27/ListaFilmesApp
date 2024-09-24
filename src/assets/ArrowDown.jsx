import React from "react";
import styled from "styled-components";
import Sinopse from "../Components/Sinopse/Sinopse";

const ArrowDownContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.15s linear;
  transform: rotate(${(props) => (props.$isRotated ? "360deg" : "270deg")});
`;
const ArrowDownSvg = styled.img`
  transition: transform 0.15s linear;
`;

const ArrowDown = () => {
  const [isRotated, setIsRotated] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const arrowClick = () => {
    setIsRotated(!isRotated);
    setIsExpanded(!isExpanded);
  };
  return (
    <ArrowDownContainer $isRotated={isRotated} onClick={arrowClick}>
      <ArrowDownSvg src="arrow-down.svg" alt="" width={"26px"} height={"26px"} />
      {isRotated ? <Sinopse /> : ""}
    </ArrowDownContainer>
  );
};

export default ArrowDown;
