import React from "react";
import styled from "styled-components";

const ToggleListContainer = styled.div`
  width: max-content;
  cursor: pointer;
  padding: 5px 5px 0 5px;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`;
const ToggleListSvg = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.2s linear;
  transform: rotate(${(props) => (props.$isRotated ? "0deg" : "90deg")});
  animation: ${(props) => (props.$isRotated ? "fadeOut" : "fadeIn")} 2s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

//
//
const ToggleList = ({ toggleContainer, setIsClockSvgVisible }) => {
  const [isRotated, setIsRotated] = React.useState(false);

  const toggleClick = () => {
    setIsRotated(!isRotated);
    setIsClockSvgVisible((prev) => !prev);
    toggleContainer();
  };

  return (
    <ToggleListContainer onClick={toggleClick} $isRotated={isRotated}>
      <ToggleListSvg src="togglelist.svg" $isRotated={isRotated}></ToggleListSvg>
    </ToggleListContainer>
  );
};

export default ToggleList;
