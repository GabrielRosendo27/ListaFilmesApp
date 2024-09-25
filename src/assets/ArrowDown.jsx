import React from "react";
import styled from "styled-components";

const ArrowDownContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowDownSvg = styled.img`
  transition: transform 0.15s linear;
  transform: rotate(${(props) => (props.$isRotated ? "360deg" : "270deg")}) translateX(${(props) => (props.$isRotated ? "10px" : "0px")});
`;

const ArrowDown = ({ isRotated, setIsRotated }) => {
  const arrowClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <ArrowDownContainer onClick={arrowClick}>
      <ArrowDownSvg src="arrow-down.svg" alt="" width={"26px"} height={"26px"} $isRotated={isRotated} />
    </ArrowDownContainer>
  );
};

export default ArrowDown;
