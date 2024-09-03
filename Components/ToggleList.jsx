import React from "react";
import styled from "styled-components";

const ToggleListContainer = styled.div`
  width: max-content;
  cursor: pointer;
  padding: 5px 5px 0 5px;
  transition: transform 0.2s linear, margin-left 0.2s linear;
  transform: rotate(${(props) => (props.$isRotated ? "90deg" : "0deg")});
  margin-left: ${(props) => (props.$isMargin ? "18vw" : "0")};
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
      <ToggleListSvg src="togglelistsvg.svg"></ToggleListSvg>
    </ToggleListContainer>
  );
};

export default ToggleList;
