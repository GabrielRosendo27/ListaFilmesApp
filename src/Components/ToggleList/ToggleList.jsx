import React from "react";
import styled from "styled-components";

const ToggleListContainer = styled.div`
  width: max-content;
  cursor: pointer;
  padding: 5px 5px 0 5px;
  transition: transform 0.2s linear, margin-left 0.2s linear;
  transform: rotate(${(props) => (props.$isRotated ? "90deg" : "0deg")});
  margin-left: ${(props) => (props.$isMargin ? "12vw" : "0")};
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

  @media (max-width: 1050px) {
    margin-left: ${(props) => (props.$isMargin ? "1vw" : "0")};
  }
`;
const ToggleListSvg = styled.img`
  width: 22px;
  height: 22px;
  &:hover {
    transform: scale(1.125);
    transition: transform 0.2s linear;
  }
`;
//

//
const ToggleList = ({ toggleContainer, setIsClockSvgVisible }) => {
  const [isRotated, setIsRotated] = React.useState(false);
  const [isMargin, setIsMargin] = React.useState(false);

  const toggleClick = () => {
    setIsRotated(!isRotated);
    setIsMargin(!isMargin);
    setIsClockSvgVisible((prev) => !prev);
    toggleContainer();
  };

  return (
    <ToggleListContainer $isMargin={isMargin} $isRotated={isRotated} onClick={toggleClick}>
      <ToggleListSvg src="togglelist.svg"></ToggleListSvg>
    </ToggleListContainer>
  );
};

export default ToggleList;
